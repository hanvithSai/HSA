"use client";
import React, { useMemo, useState } from "react";
import {
  addDays,
  eachDayOfInterval,
  endOfYear,
  format,
  getDay,
  startOfYear,
  getMonth,
} from "date-fns";

// Populated event data
const rawEvents = [
  {
    Title: "VNR Induction Program",
    start: { dateTime: "2023-09-01T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-09-02T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
  {
    Title: "Stentorian",
    start: { dateTime: "2023-10-03T14:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-10-03T15:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
  {
    Title: "Leo (U/A)",
    start: { dateTime: "2023-10-19T18:55:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-10-19T19:55:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "fromGmail",
    sequence: 0,
    description:
      "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMT6d9vPJ5keP1wW47jZUYSyQoMavsKCmE\n",
    location: "PVR: Inorbit, Cyberabad, Hyderabad, Hyderabad",
  },
  {
    Title: "Leo (Telugu) (U/A)",
    start: { dateTime: "2023-10-23T19:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-10-23T20:30:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "fromGmail",
    sequence: 0,
    description:
      "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMYld-spQ6jBOkeuNt_l0PtOe3pJZrVMXY\n",
    location:
      "Platinum Movietime Cinema: Gachibowli SLN Terminus, Hyderabad, Hyderabad",
  },
  {
    Title: "Vasavi MUN",
    start: { dateTime: "2023-12-01T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-04T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
  {
    Title: "3D Printing",
    start: { dateTime: "2023-12-09T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-10T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "D320",
  },
  {
    Title: "Coding Contest - Qualifier Round",
    start: { dateTime: "2023-12-11T19:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-11T21:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "Online",
  },
  {
    Title: "Capture the Flag - Intramural",
    start: { dateTime: "2023-12-12T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-12T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "B block Seminar Hall",
  },
  {
    Title: "Anukuram Business Innovatiors Meet- Orientation",
    start: { dateTime: "2023-12-12T18:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-12T19:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "Online",
  },
  {
    Title: "Blogathon R1",
    start: { dateTime: "2023-12-13T18:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-13T22:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 2,
    description: "Online \nTeam 1-2",
    location: "",
  },
  {
    Title: "Capture the Flag - Qualifier Round",
    start: { dateTime: "2023-12-14T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
  {
    Title: "Draft-A-Thon",
    start: { dateTime: "2023-12-14T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-16T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "A-006",
  },
  {
    Title: "RoboJam",
    start: { dateTime: "2023-12-14T09:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T16:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "D-418,D-419",
  },
  {
    Title: "Unlocking Industrial Automation Workshop",
    start: { dateTime: "2023-12-14T09:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T16:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "B207,C204",
  },
  {
    Title: "3D Printing",
    start: { dateTime: "2023-12-14T09:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T16:30:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "D320",
  },
  {
    Title: "Vizcraft",
    start: { dateTime: "2023-12-14T09:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T16:30:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "Day:1- Power BI\nDay:2- Matplotlib",
    location: "C-208",
  },
  {
    Title: "GITHUB",
    start: { dateTime: "2023-12-14T09:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "A-001",
  },
  {
    Title: "Flutter",
    start: { dateTime: "2023-12-14T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "APJ Auditorium, C-007,C-008",
  },
  {
    Title: "Drone",
    start: { dateTime: "2023-12-14T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-14T16:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "A-013",
  },
  {
    Title: "RRR Kurukshetram lo Ravana Samharam",
    start: { dateTime: "2023-12-14T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-14T17:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "JSK Greens",
  },
  {
    Title: "Spark Quiz Coding Contest",
    start: { dateTime: "2023-12-14T11:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-14T11:50:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "On spot registeration",
    location: "",
  },
  {
    Title: "Code Rush - Fastest Fingers First-",
    start: { dateTime: "2023-12-14T14:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-14T14:30:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 1,
    description: "On spot registeration",
    location: "P401, P402,P404,P410",
  },
  {
    Title: "Capture the Flag - Final Round",
    start: { dateTime: "2023-12-15T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-16T00:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
  {
    Title: "UPSC Exam Preparation",
    start: { dateTime: "2023-12-15T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "B block seminar hall",
  },
  {
    Title: "Blogathon Final Round",
    start: { dateTime: "2023-12-15T10:00:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 2,
    description: "",
    location: "A-201",
  },
  {
    Title: "Coding Contest - Final Round",
    start: { dateTime: "2023-12-15T10:30:00+05:30", timeZone: "Asia/Kolkata" },
    end: { dateTime: "2023-12-15T13:00:00+05:30", timeZone: "Asia/Kolkata" },
    eventType: "default",
    sequence: 0,
    description: "",
    location: "",
  },
];

function parseEvents(events: typeof rawEvents) {
  // Aggregate hours per day
  const dayMap: Record<string, { hours: number; details: any[] }> = {};
  for (const ev of events) {
    const start = new Date(ev.start.dateTime);
    const end = new Date(ev.end.dateTime);
    let cur = new Date(start);
    while (cur <= end) {
      const dayStr = format(cur, "yyyy-MM-dd");
      // Calculate overlap for this day
      let dayStart = new Date(cur);
      let dayEnd = new Date(cur);
      dayStart.setHours(0, 0, 0, 0);
      dayEnd.setHours(23, 59, 59, 999);
      const overlapStart = cur.getTime() === start.getTime() ? start : dayStart;
      const overlapEnd = cur.getTime() === end.getTime() ? end : dayEnd;
      let hours =
        (overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60);
      hours = Math.ceil(hours * 2) / 2; // ceil to nearest half hour
      if (!dayMap[dayStr]) dayMap[dayStr] = { hours: 0, details: [] };
      dayMap[dayStr].hours += hours;
      dayMap[dayStr].details.push(ev);
      cur = addDays(cur, 1);
    }
  }
  return dayMap;
}

function getShade(hours: number) {
  if (hours === 0) return "blank";
  if (hours < 1) return "shade1";
  if (hours < 2) return "shade2";
  if (hours < 5) return "shade3";
  return "shade4";
}

const year = 2023;

const shadeColors: Record<string, string> = {
  blank: "#161b22",
  shade1: "#0e4429",
  shade2: "#006d32",
  shade3: "#26a641",
  shade4: "#39d353",
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Heatmap() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const dayMap = useMemo(() => parseEvents(rawEvents), []);

  // Generate all days in the year
  const days = eachDayOfInterval({
    start: startOfYear(new Date(year, 0, 1)),
    end: endOfYear(new Date(year, 0, 1)),
  });

  // Arrange as columns (weeks)
  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];
  for (let i = 0; i < days.length; i++) {
    if (i === 0 && getDay(days[i]) !== 0) {
      for (let j = 0; j < getDay(days[i]); j++) week.push(null);
    }
    week.push(days[i]);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);

  // For month labels
  const monthLabels: { [key: number]: number } = {};
  weeks.forEach((week, wi) => {
    for (let di = 0; di < week.length; di++) {
      const day = week[di];
      if (day && (getDay(day) === 0 || wi === 0)) {
        const m = getMonth(day);
        if (monthLabels[m] === undefined) monthLabels[m] = wi;
      }
    }
  });

  return (
    <section
      id="heatmap"
      style={{
        margin: "2rem 0",
        background: "#0d1117",
        borderRadius: 8,
        padding:
          "clamp(12px, 4vw, 24px) clamp(6px, 2vw, 16px) 24px clamp(30px, 8vw, 60px)",
        boxShadow: "0 2px 8px #0002",
        maxWidth: "100vw",
        overflowX: "auto",
        minWidth: 0,
      }}
    >
      <div
        style={{
          color: "#c9d1d9",
          fontWeight: 600,
          fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
          marginBottom: 8,
          whiteSpace: "nowrap",
        }}
      >
        Activity Heatmap
      </div>
      {/* Month labels */}
      <div
        style={{
          display: "flex",
          position: "relative",
          left: 36,
          height: 20,
          marginBottom: 2,
          minWidth: 600,
          fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
        }}
      >
        {Object.entries(monthLabels).map(([m, wi], idx, arr) => {
          const nextWi = arr[idx + 1]?.[1] ?? weeks.length;
          const colSpan = nextWi - wi;
          return (
            <div
              key={m}
              style={{
                flex: `0 0 ${colSpan * 18}px`,
                color: "#8b949e",
                fontSize: "inherit",
                textAlign: "left",
                minWidth: 30,
              }}
            >
              {months[parseInt(m)]}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minWidth: 600,
          overflowX: "auto",
        }}
      >
        {/* Weekday labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 4,
            fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
            width: 36,
            alignItems: "flex-end",
          }}
        >
          {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
            <div
              key={i}
              style={{
                height: 18,
                fontSize: "inherit",
                color: "#8b949e",
                lineHeight: "18px",
                textAlign: "right",
                marginBottom: 0,
                marginTop: 0,
                width: 36,
                userSelect: "none",
                minWidth: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        {/* Heatmap grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            minWidth: 0,
          }}
        >
          {weeks.map((week, wi) => (
            <div key={wi} style={{ display: "flex", flexDirection: "column" }}>
              {week.map((day, di) => {
                if (!day)
                  return (
                    <div
                      key={di}
                      style={{
                        width: 16,
                        height: 16,
                        marginBottom: 2,
                        marginRight: 2,
                        background: "transparent",
                        borderRadius: 3,
                        minWidth: 16,
                        minHeight: 16,
                        border: "1px solid #21262d",
                      }}
                    />
                  );
                const dayStr = format(day, "yyyy-MM-dd");
                const info = dayMap[dayStr] || { hours: 0, details: [] };
                const shade = getShade(info.hours);
                return (
                  <div
                    key={di}
                    style={{
                      width: 16,
                      height: 16,
                      minWidth: 16,
                      minHeight: 16,
                      marginBottom: 2,
                      marginRight: 2,
                      background: shadeColors[shade],
                      borderRadius: 3,
                      border:
                        expandedDay === dayStr
                          ? "2px solid #fff"
                          : "1px solid #21262d",
                      cursor: info.hours > 0 ? "pointer" : "default",
                      position: "relative",
                      zIndex: expandedDay === dayStr ? 2 : 1,
                      transition: "border 0.1s",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={() => setHoveredDay(dayStr)}
                    onMouseLeave={() => setHoveredDay(null)}
                    onClick={() =>
                      info.hours > 0 &&
                      setExpandedDay(expandedDay === dayStr ? null : dayStr)
                    }
                    title={
                      info.hours > 0 ? `${info.hours} active hours` : undefined
                    }
                  >
                    {/* Tooltip */}
                    {hoveredDay === dayStr && (
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          bottom: "100%",
                          transform: "translateX(-50%)",
                          marginBottom: 8,
                          background: "#161b22",
                          color: "#fff",
                          border: "1px solid #30363d",
                          padding: "6px 14px",
                          fontSize: 13,
                          zIndex: 100,
                          whiteSpace: "nowrap",
                          borderRadius: 6,
                          boxShadow: "0 2px 8px #0008",
                          maxWidth: 240,
                          pointerEvents: "none",
                        }}
                      >
                        {info.hours > 0
                          ? `${info.hours} active hours on ${format(
                              day,
                              "MMMM do, yyyy (EEE)"
                            )}`
                          : `No activity on ${format(
                              day,
                              "MMMM do, yyyy (EEE)"
                            )}`}
                        {info.hours > 0 && (
                          <div
                            style={{
                              color: "#58a6ff",
                              textDecoration: "underline",
                              marginTop: 2,
                              fontSize: 12,
                            }}
                          >
                            Click for details
                          </div>
                        )}
                      </div>
                    )}
                    {/* Expanded details */}
                    {expandedDay === dayStr && (
                      <div
                        style={{
                          position: "fixed",
                          left: Math.min(window.innerWidth - 340, 70 + wi * 18),
                          top: Math.max(60, 120 + di * 18),
                          background: "#161b22",
                          color: "#fff",
                          border: "1.5px solid #fff",
                          padding: 16,
                          fontSize: 13,
                          zIndex: 200,
                          minWidth: 220,
                          maxWidth: "90vw",
                          borderRadius: 8,
                          boxShadow: "0 2px 16px #000a",
                          overflowWrap: "break-word",
                        }}
                      >
                        <strong>{format(day, "yyyy-MM-dd (EEEE)")}</strong>
                        <div style={{ marginBottom: 8 }}>
                          {info.hours} active hours
                        </div>
                        <ul style={{ paddingLeft: 16 }}>
                          {info.details.map((ev, i) => (
                            <li key={i} style={{ marginBottom: 8 }}>
                              <div>
                                <b>{ev.Title}</b>
                              </div>
                              <div>
                                {format(new Date(ev.start.dateTime), "HH:mm")} -{" "}
                                {format(new Date(ev.end.dateTime), "HH:mm")}
                              </div>
                              {ev.location && <div>{ev.location}</div>}
                              {ev.description && (
                                <div
                                  style={{
                                    fontSize: 11,
                                    color: "#8b949e",
                                    whiteSpace: "pre-line",
                                  }}
                                >
                                  {ev.description}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setExpandedDay(null)}
                          style={{
                            marginTop: 8,
                            background: "#21262d",
                            color: "#fff",
                            border: "none",
                            borderRadius: 4,
                            padding: "4px 12px",
                            cursor: "pointer",
                          }}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div
        style={{
          marginTop: 18,
          fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
          color: "#8b949e",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          marginLeft: 36,
        }}
      >
        <span style={{ marginRight: 8 }}>Less</span>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: shadeColors.blank,
            borderRadius: 3,
            marginRight: 3,
            border: "1px solid #21262d",
          }}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: shadeColors.shade1,
            borderRadius: 3,
            marginRight: 3,
            border: "1px solid #21262d",
          }}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: shadeColors.shade2,
            borderRadius: 3,
            marginRight: 3,
            border: "1px solid #21262d",
          }}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: shadeColors.shade3,
            borderRadius: 3,
            marginRight: 3,
            border: "1px solid #21262d",
          }}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            background: shadeColors.shade4,
            borderRadius: 3,
            marginRight: 8,
            border: "1px solid #21262d",
          }}
        ></span>
        <span>More</span>
      </div>
    </section>
  );
}
