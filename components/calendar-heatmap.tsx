"use client";

import React, { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

// --- Types ---

export interface CalendarEvent {
    title: string;
    start: { dateTime: string; timeZone?: string };
    end: { dateTime: string; timeZone?: string };
    description?: string;
    location?: string;
    eventType?: string;
}

interface CalendarHeatmapProps {
    data: CalendarEvent[];
    year?: number;
    className?: string;
}

// --- Constants & Helpers ---

const MS_PER_HOUR = 1000 * 60 * 60;
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getColorClass(hours: number): string {
    if (hours === 0) return "bg-primary/10 dark:bg-primary/10";

    // Theme-based Blue Scale: Higher opacity = Darker/More Intense
    if (hours <= 1) return "bg-primary/50 dark:bg-primary/30";
    if (hours <= 2) return "bg-primary/60 dark:bg-primary/50";
    if (hours <= 5) return "bg-primary/80 dark:bg-primary/70";
    return "bg-primary dark:bg-primary"; // Solid Primary (Darkest)
}

function generateYearDates(year: number): Date[] {
    const dates: Date[] = [];
    const start = new Date(year, 0, 1);
    const end = new Date(year + 1, 0, 0);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d));
    }
    return dates;
}

function processEvents(events: CalendarEvent[]): Map<string, { hours: number; events: CalendarEvent[] }> {
    const dailyData = new Map<string, { hours: number; events: CalendarEvent[] }>();

    events.forEach((event) => {
        if (!event.start?.dateTime || !event.end?.dateTime) return;

        const start = new Date(event.start.dateTime);
        const end = new Date(event.end.dateTime);

        const current = new Date(start);
        current.setHours(0, 0, 0, 0);

        const endDay = new Date(end);
        endDay.setHours(0, 0, 0, 0);

        while (current <= endDay) {
            const dateStr = current.toISOString().split("T")[0];
            const dayStart = new Date(current);
            const dayEnd = new Date(current);
            dayEnd.setHours(23, 59, 59, 999);

            const overlapStart = start > dayStart ? start : dayStart;
            const overlapEnd = end < dayEnd ? end : dayEnd;

            let durationMs = overlapEnd.getTime() - overlapStart.getTime();
            if (durationMs < 0) durationMs = 0;

            const hours = durationMs / MS_PER_HOUR;

            if (hours > 0) {
                const existing = dailyData.get(dateStr) || { hours: 0, events: [] };
                existing.hours += hours;
                existing.events.push(event);
                dailyData.set(dateStr, existing);
            }

            current.setDate(current.getDate() + 1);
        }
    });

    return dailyData;
}

export function CalendarHeatmap({ data, year = new Date().getFullYear(), className }: CalendarHeatmapProps) {
    const dates = useMemo(() => generateYearDates(year), [year]);
    const dailyData = useMemo(() => processEvents(data), [data]);

    const [hoveredDate, setHoveredDate] = useState<{ date: Date; data: { hours: number; events: CalendarEvent[] } | undefined } | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [placement, setPlacement] = useState<'top' | 'bottom'>('top');
    const [align, setAlign] = useState<'center' | 'left' | 'right'>('center');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Layout Calculations
    const startDayOfWeek = dates[0].getDay(); // 0 (Sun) - 6 (Sat)
    const emptyStartDays = Array.from({ length: startDayOfWeek });

    // Calculate months
    const monthPositions: { label: string; colIndex: number }[] = [];
    let currentMonth = -1;
    dates.forEach((date, i) => {
        const month = date.getMonth();
        if (month !== currentMonth) {
            const totalIndex = i + startDayOfWeek;
            const colIndex = Math.floor(totalIndex / 7);
            // Only add label if it's the first time we see this month (and ensure space if needed)
            if (!monthPositions.find(p => p.label === MONTH_LABELS[month])) {
                monthPositions.push({ label: MONTH_LABELS[month], colIndex });
            }
            currentMonth = month;
        }
    });

    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (e: React.MouseEvent, date: Date, dayData: any) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }

        const rect = (e.currentTarget).getBoundingClientRect();
        const tooltipHeight = 150;
        const spaceAbove = rect.top;

        const placeTop = spaceAbove > tooltipHeight;

        // Smart horizontal alignment
        let newAlign: 'center' | 'left' | 'right' = 'center';
        let newX = rect.left + rect.width / 2;

        const tooltipWidth = 320; // approximate max width of tooltip
        const screenWidth = window.innerWidth;
        const leftEdge = newX - tooltipWidth / 2;
        const rightEdge = newX + tooltipWidth / 2;

        if (leftEdge < 10) {
            newAlign = 'left';
            newX = rect.left;
        } else if (rightEdge > screenWidth - 10) {
            newAlign = 'right';
            newX = rect.right;
        }

        setHoveredDate({ date, data: dayData });
        setPlacement(placeTop ? 'top' : 'bottom');
        setAlign(newAlign);
        setPosition({ x: newX, y: placeTop ? rect.top : rect.bottom });
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredDate(null);
        }, 300); // 300ms delay to allow moving into tooltip
    };

    const handleTooltipEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
    };

    const handleTooltipLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredDate(null);
        }, 300);
    };

    return (
        <div
            className={cn("flex flex-col gap-1 w-full max-w-full overflow-x-auto pb-2", className)}
            style={{
                '--cell-size': '11px',
                '--cell-gap': '3px',
            } as React.CSSProperties}
        >
            {/* Month Labels */}
            <div className="flex text-[10px] text-muted-foreground ml-[27px] relative h-4 select-none mb-1">
                {monthPositions.map((pos) => (
                    <span
                        key={pos.label}
                        className="absolute"
                        style={{
                            left: `calc(${pos.colIndex} * (var(--cell-size) + var(--cell-gap)))`
                        }}
                    >
                        {pos.label}
                    </span>
                ))}
            </div>

            <div className="flex gap-[var(--cell-gap)]">
                {/* Day Labels - Aligned precisely with grid rows */}
                <div
                    className="grid gap-[var(--cell-gap)] text-[10px] text-muted-foreground select-none"
                    style={{
                        // Matches grid rows exactly
                        gridTemplateRows: "repeat(7, var(--cell-size))",
                    } as React.CSSProperties}
                >
                    {/* Rows 0-6 corresponding to Sun-Sat. GitHub labels Mon(1), Wed(3), Fri(5) */}
                    <span className="opacity-0 w-[24px]">Sum</span>
                    <span className="leading-[var(--cell-size)] w-[24px]">Mon</span>
                    <span className="opacity-0 w-[24px]">Tue</span>
                    <span className="leading-[var(--cell-size)] w-[24px]">Wed</span>
                    <span className="opacity-0 w-[24px]">Thu</span>
                    <span className="leading-[var(--cell-size)] w-[24px]">Fri</span>
                    <span className="opacity-0 w-[24px]">Sat</span>
                </div>

                {/* Heatmap Grid */}
                <div
                    className="grid flex-1"
                    style={{
                        gridTemplateRows: "repeat(7, var(--cell-size))",
                        gridAutoFlow: "column",
                        gridAutoColumns: "var(--cell-size)",
                        gap: "var(--cell-gap)"
                    } as React.CSSProperties}
                >
                    {/* Empty cells for padding start of year */}
                    {emptyStartDays.map((_, i) => (
                        <div key={`empty-${i}`} className="bg-transparent" />
                    ))}

                    {/* Days */}
                    {dates.map((date) => {
                        const dateStr = date.toISOString().split("T")[0];
                        const dayInfo = dailyData.get(dateStr);
                        const hours = dayInfo?.hours || 0;
                        const colorClass = getColorClass(hours);

                        return (
                            <div
                                key={dateStr}
                                className={cn(
                                    "rounded-[2px] transition-all duration-200 cursor-pointer",
                                    colorClass
                                )}
                                onMouseEnter={(e) => handleMouseEnter(e, date, dayInfo)}
                                onMouseLeave={handleMouseLeave}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Tooltip Portal */}
            {mounted && hoveredDate && createPortal(
                <div
                    className={cn(
                        "fixed z-[100] p-3 w-max max-w-xs text-xs bg-popover/95 backdrop-blur-md text-popover-foreground rounded-lg shadow-xl border border-border transition-opacity duration-200",
                        align === 'center' && "-translate-x-1/2",
                        align === 'left' && "translate-x-0",
                        align === 'right' && "-translate-x-full",
                        placement === 'top' ? "-translate-y-full -mt-1.5" : "mt-1.5"
                    )}
                    style={{ left: position.x, top: position.y }}
                    onMouseEnter={handleTooltipEnter}
                    onMouseLeave={handleTooltipLeave}
                >
                    <div className="font-semibold mb-1 border-b border-border/50 pb-1 flex justify-between gap-4">
                        <span>{hoveredDate.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        <span className="text-muted-foreground font-normal">{hoveredDate.date.getFullYear()}</span>
                    </div>
                    {hoveredDate.data ? (
                        <div className="space-y-2">
                            <div className="text-[10px] text-muted-foreground font-medium">
                                {hoveredDate.data.hours.toFixed(1)} hours recorded
                            </div>
                            <div className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar">
                                {hoveredDate.data.events.map((event, idx) => (
                                    <div key={idx} className="bg-secondary/40 p-1.5 rounded flex flex-col gap-0.5">
                                        <div className="font-medium text-foreground truncate max-w-[200px]">{event.title}</div>
                                        <div className="text-[9px] text-muted-foreground flex justify-between items-center">
                                            <span>{new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            <span className="w-2 border-t border-border/50 mx-1"></span>
                                            <span>{new Date(event.end.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-[10px] text-muted-foreground italic">No activities</div>
                    )}
                </div>,
                document.body
            )}

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 text-[10px] text-muted-foreground mt-4 mr-4">
                <span>Less</span>
                <div className="flex gap-[3px]">
                    <div className={`w-[11px] h-[11px] rounded-[2px] ${getColorClass(0)}`} />
                    <div className={`w-[11px] h-[11px] rounded-[2px] ${getColorClass(1)}`} />
                    <div className={`w-[11px] h-[11px] rounded-[2px] ${getColorClass(2)}`} />
                    <div className={`w-[11px] h-[11px] rounded-[2px] ${getColorClass(5)}`} />
                    <div className={`w-[11px] h-[11px] rounded-[2px] ${getColorClass(8)}`} />
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
