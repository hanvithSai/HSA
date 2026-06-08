import { useState } from "react";
import { CalendarHeatmap } from "@/components/calendar-heatmap";
import { CALENDAR_DATA } from "@/lib/calendar-data";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";

export function ActivityHeatmap() {
    const [year, setYear] = useState(2024);
    const years = [2023, 2024, 2025, 2026];

    return (
        <section className="py-12 container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-6">
                <FadeIn>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">Days I Code</h3>
                        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                            This heatmap represents the time, effort, and dedication poured into crafting innovative solutions.
                            Every block is a step towards excellence, reflecting my commitment to continuous learning and building.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="flex flex-col-reverse lg:flex-row gap-6">
                        {/* Heatmap Container */}
                        <div className="flex-1 p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden">
                            <CalendarHeatmap
                                data={CALENDAR_DATA}
                                year={year}
                                className="w-full"
                            />
                        </div>

                        {/* Year Selector */}
                        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:w-32 shrink-0">
                            {years.map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setYear(y)}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                        year === y
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    )}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
