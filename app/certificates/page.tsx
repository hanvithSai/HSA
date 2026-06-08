"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useRef } from "react";
import { ArrowLeft, ExternalLink, X, Calendar } from "lucide-react";
import { certificates, Certificate } from "@/lib/certificate-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Add canonical list of available tags (use these for filter options)
const AVAILABLE_TAGS = [
    "Python",
    "JS",
    "TS",
    "SQL",
    "React",
    "HTML",
    "CSS",
    "WebDev",
    "AI",
    "ML",
    "AWS",
    "GCP",
    "DSA",
    "CP",
    "Product Management",
    "Research",
    "Hackathons",
    "Internships",
];

export default function Certifications() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [query, setQuery] = useState<string>("");
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
    // new: sort option state - 'relevance' (default), 'newest', 'oldest'
    const [sortOption, setSortOption] = useState<
        "relevance" | "newest" | "oldest"
    >("relevance");

    // gather all available tags from tools & tags across certificates
    // Use the canonical tag list provided; this ensures filter options are fixed
    const allTags = useMemo(() => {
        return AVAILABLE_TAGS;
    }, []);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) => {
            const next = new Set(prev);
            if (next.has(tag)) next.delete(tag);
            else next.add(tag);
            return next;
        });
    };

    const clearFilters = () => {
        setSelectedTags(new Set());
        setQuery("");
        // reset sorting to default
        setSortOption("relevance");
    };

    // robust date parser: handles ISO and human dates with ordinals like "15th June 2025"
    const parseDate = (dateString?: string | Date): Date | null => {
        if (!dateString) return null;
        if (dateString instanceof Date) {
            const d = dateString;
            return isNaN(d.getTime()) ? null : d;
        }
        const sRaw = String(dateString).trim();
        // fast-path ISO yyyy-mm-dd
        if (/^\d{4}-\d{2}-\d{2}$/.test(sRaw)) {
            const d = new Date(sRaw);
            return isNaN(d.getTime()) ? null : d;
        }
        // remove ordinal suffixes: 1st, 2nd, 3rd, 4th ...
        const s = sRaw.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, "$1").trim();
        // try patterns like "2 June 2025" -> Date("June 2 2025")
        const dmY = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
        if (dmY) {
            const [, day, month, year] = dmY;
            const d = new Date(`${month} ${day} ${year}`);
            if (!isNaN(d.getTime())) return d;
        }
        // fallback to native Date parsing
        const d = new Date(s);
        return isNaN(d.getTime()) ? null : d;
    };

    // helper: ordinal suffix for day numbers
    const getOrdinal = (n: number) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };

    // detect whether the original string contained an explicit day number
    const hasDayComponent = (s?: string) => {
        if (!s) return false;
        return /\b\d{1,2}(st|nd|rd|th)?\b/i.test(s);
    };

    // format single date — returns JSX so we can render ordinal as <sup>
    const formatDate = (dateParam?: string | Date) => {
        const d = parseDate(dateParam);
        if (!d) return "";
        // if original input was a string and had no day, print month only
        if (typeof dateParam === "string" && !hasDayComponent(dateParam)) {
            return d.toLocaleString("en-US", { month: "long" });
        }
        const day = d.getDate();
        const ordinal = getOrdinal(day);
        const month = d.toLocaleString("en-US", { month: "long" });
        const year = d.getFullYear();
        return (
            <>
                {day}
                <sup className="text-[0.6rem] align-super mr-1">{ordinal}</sup> {month}{" "}
                {year}
            </>
        );
    };

    // format date ranges — returns JSX
    const formatDateRange = (
        start?: string,
        end?: string,
        fallbackDate?: string
    ) => {
        const sRaw = start || fallbackDate;
        const sd = parseDate(sRaw);
        const ed = parseDate(end);

        if (!sd && !ed) return "Date not specified";
        if (sd && !ed) return formatDate(sRaw);
        if (!sd && ed) return formatDate(end);

        if (sd && ed) {
            // same year -> concise range
            if (sd.getFullYear() === ed.getFullYear()) {
                const year = sd.getFullYear();
                const sHasDay = typeof sRaw === "string" && hasDayComponent(sRaw);
                const eHasDay = typeof end === "string" && hasDayComponent(end);

                const sDay = sd.getDate();
                const eDay = ed.getDate();
                const sOrd = getOrdinal(sDay);
                const eOrd = getOrdinal(eDay);
                const sMonthShort = sd.toLocaleString("en-US", { month: "short" });
                const eMonthShort = ed.toLocaleString("en-US", { month: "short" });

                // both have day -> "7th Jun — 10th Jun 2025"
                if (sHasDay && eHasDay) {
                    return (
                        <>
                            {sDay}
                            <sup className="text-[0.6rem] align-super mr-1">{sOrd}</sup>{" "}
                            {sMonthShort} — {eDay}
                            <sup className="text-[0.6rem] align-super mr-1">{eOrd}</sup>{" "}
                            {eMonthShort} {year}
                        </>
                    );
                }

                // mixed or month-only cases — show month-only where day is absent
                if (!sHasDay && eHasDay) {
                    return (
                        <>
                            {sd.toLocaleString("en-US", { month: "long" })} — {eDay}
                            <sup className="text-[0.6rem] align-super mr-1">{eOrd}</sup>{" "}
                            {eMonthShort} {year}
                        </>
                    );
                }
                if (sHasDay && !eHasDay) {
                    return (
                        <>
                            {sDay}
                            <sup className="text-[0.6rem] align-super mr-1">{sOrd}</sup>{" "}
                            {sMonthShort} — {ed.toLocaleString("en-US", { month: "long" })}{" "}
                            {year}
                        </>
                    );
                }
                // neither has day -> "June — July 2025" (month names)
                return (
                    <>
                        {sd.toLocaleString("en-US", { month: "long" })} —{" "}
                        {ed.toLocaleString("en-US", { month: "long", year: "numeric" })}
                    </>
                );
            }
            // different years: full dates for both sides
            return (
                <>
                    {formatDate(start)} — {formatDate(end)}
                </>
            );
        }
        return "Date not specified";
    };


    // filtered list based on search query, selected tags and optional sorting
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        const results = certificates.filter((c) => {
            // tag filter: certificate must include at least one selected tag (OR)
            if (selectedTags.size > 0) {
                const combined = new Set([...(c.tools || []), ...(c.tags || [])]);
                const hasAny = Array.from(selectedTags).some((t) => combined.has(t));
                if (!hasAny) return false;
            }
            if (!q) return true;
            // search only in title, host/issuer, and tags
            const hay = [
                c.title || "",
                c.host || "",
                c.issuer || "",
                ...(c.tags || []),
            ]
                .join(" ")
                .toLowerCase();
            return hay.includes(q);
        });

        if (sortOption === "relevance") return results;

        // helper to pick the most relevant date for sorting
        const getSortTime = (c: Certificate): number | null => {
            const d = parseDate(c.endDate || c.startDate || c.date);
            return d ? d.getTime() : null;
        };

        const sorted = results.slice().sort((a, b) => {
            const ta = getSortTime(a);
            const tb = getSortTime(b);
            // both missing -> keep original order
            if (ta === null && tb === null) return 0;
            // one missing -> push missing to end
            if (ta === null) return 1;
            if (tb === null) return -1;
            // both present -> compare
            if (sortOption === "newest") return tb - ta; // descending (newest first)
            return ta - tb; // ascending (oldest first)
        });

        return sorted;
    }, [query, selectedTags, sortOption]);

    // Slideshow state: track current image index for each certificate by id
    const [slideIndexes, setSlideIndexes] = useState<Record<number, number>>({});
    // Track which certificate image is in viewport
    const [inViewIds, setInViewIds] = useState<Record<number, boolean>>({});

    // Helper to go to next/prev image in slideshow
    const handleSlide = (certId: number, images: string[], dir: 1 | -1) => {
        setSlideIndexes((prev) => {
            const curr = prev[certId] ?? 0;
            const next = (curr + dir + images.length) % images.length;
            return { ...prev, [certId]: next };
        });
    };

    // Intersection observer hook for each certificate image area
    const imageRefs = useRef<Record<number, HTMLDivElement | null>>({});

    useEffect(() => {
        const observers: Record<number, IntersectionObserver> = {};
        Object.entries(imageRefs.current).forEach(([certIdStr, el]) => {
            const certId = Number(certIdStr);
            if (!el) return;
            observers[certId]?.disconnect();
            observers[certId] = new window.IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setInViewIds((prev) => ({
                            ...prev,
                            [certId]: entry.isIntersecting,
                        }));
                    });
                },
                { threshold: 0.3 }
            );
            observers[certId].observe(el);
        });
        return () => {
            Object.values(observers).forEach((obs) => obs.disconnect());
        };
    }, [filtered.length]);

    // Automatic slideshow effect for all in-view certificates with multiple images
    useEffect(() => {
        const timers: Record<number, NodeJS.Timeout> = {};
        filtered.forEach((cert) => {
            const images = Array.isArray(cert.image) ? cert.image : [cert.image];
            if (images.length > 1 && inViewIds[cert.id]) {
                timers[cert.id] = setInterval(() => {
                    setSlideIndexes((prev) => {
                        const curr = prev[cert.id] ?? 0;
                        const next = (curr + 1) % images.length;
                        return { ...prev, [cert.id]: next };
                    });
                }, 2500);
            }
        });
        return () => {
            Object.values(timers).forEach(clearInterval);
        };
    }, [filtered, inViewIds]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                            My Certifications
                        </h1>
                        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
                            These certifications represent my commitment to continuous learning
                            and skill development across various technologies and domains.
                        </p>

                        {/* Search + Filters */}
                        <div className="max-w-4xl mx-auto mb-6">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <label className="relative flex-1">
                                    <input
                                        aria-label="Search certificates by host, title or tags"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search by host, title, skills, tags..."
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {query && (
                                        <button
                                            onClick={() => setQuery("")}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                                            aria-label="Clear search"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </label>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={clearFilters}
                                        className="px-4 py-2 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                        Clear
                                    </button>
                                    <div className="flex items-center gap-3">
                                        <div className="text-sm text-muted-foreground">
                                            {filtered.length} results
                                        </div>
                                        <label className="text-sm text-muted-foreground flex items-center gap-2">
                                            <span className="text-xs">Sort:</span>
                                            <select
                                                aria-label="Sort certificates"
                                                value={sortOption}
                                                onChange={(e) =>
                                                    setSortOption(
                                                        e.target.value as "relevance" | "newest" | "oldest"
                                                    )
                                                }
                                                className="text-sm px-2 py-1 rounded border border-border bg-card text-foreground"
                                            >
                                                <option value="relevance">Relevance</option>
                                                <option value="newest">Newest first</option>
                                                <option value="oldest">Oldest first</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Tag filters */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {allTags.map((tag) => {
                                    const active = selectedTags.has(tag);
                                    return (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${active
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80"
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {filtered.map((cert, index) => {
                                // Normalize images to array
                                const images = Array.isArray(cert.image)
                                    ? cert.image
                                    : [cert.image];
                                const hasMultiple = images.length > 1;
                                const currIdx = slideIndexes[cert.id] ?? 0;
                                return (
                                    <motion.div
                                        key={cert.id}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: index * 0.04 }}
                                        className="bg-card rounded-lg shadow-sm border border-border overflow-hidden"
                                    >
                                        <div className="md:flex">
                                            {/* Image/Slideshow */}
                                            <div
                                                className="md:w-1/3 w-full bg-muted flex items-center justify-center p-4"
                                                ref={(el) => {
                                                    imageRefs.current[cert.id] = el;
                                                }}
                                            >
                                                {/* Fixed aspect ratio and min-height wrapper */}
                                                <div
                                                    className="w-full relative"
                                                    style={{
                                                        aspectRatio: "3/2", // or "4/3" if preferred
                                                        minHeight: 300,
                                                        maxHeight: 500, // optional, to avoid excessive height
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        background: "transparent",
                                                    }}
                                                >
                                                    {/* Slideshow for multiple images */}
                                                    {hasMultiple ? (
                                                        <>
                                                            <Image
                                                                src={encodeURI(
                                                                    images[currIdx] || "/placeholder.svg"
                                                                )}
                                                                alt={cert.title}
                                                                fill
                                                                className="object-contain rounded-md"
                                                            />
                                                            {/* Navigation arrows */}
                                                            <button
                                                                aria-label="Previous image"
                                                                onClick={() => handleSlide(cert.id, images, -1)}
                                                                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-background/80 border border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                                                            >
                                                                {/* Left Chevron SVG */}
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <polyline points="15 18 9 12 15 6" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                aria-label="Next image"
                                                                onClick={() => handleSlide(cert.id, images, 1)}
                                                                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-background/80 border border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                                                            >
                                                                {/* Right Chevron SVG */}
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <polyline points="9 6 15 12 9 18" />
                                                                </svg>
                                                            </button>
                                                            {/* Dots indicator */}
                                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                                                {images.map((_, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className={`inline-block w-2 h-2 rounded-full transition-colors ${i === currIdx
                                                                            ? "bg-primary"
                                                                            : "bg-muted-foreground/40"
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        // Single image
                                                        <Image
                                                            src={encodeURI(images[0] || "/placeholder.svg")}
                                                            alt={cert.title}
                                                            fill
                                                            className="object-contain rounded-md"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="md:w-2/3 p-5 flex flex-col">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                                                            {cert.host || cert.issuer}
                                                        </div>
                                                        <h2 className="text-lg md:text-xl font-bold text-foreground">
                                                            {cert.title}
                                                        </h2>
                                                        <div className="mt-1">
                                                            <div className="flex items-center text-sm text-muted-foreground">
                                                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                                                {formatDateRange(
                                                                    cert.startDate,
                                                                    cert.endDate,
                                                                    cert.date
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        {cert.certificateFile && (
                                                            <a
                                                                href={cert.certificateFile}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-3 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors"
                                                            >
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                View
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="mt-4 text-sm text-muted-foreground text-justify leading-relaxed">
                                                    {cert.description}
                                                </p>

                                                {cert.experience && (
                                                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                                        <div className="font-semibold text-sm mb-1 text-foreground">
                                                            Experience
                                                        </div>
                                                        <p className="text-sm text-muted-foreground text-justify italic">
                                                            "{cert.experience}"
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Show combined unique tools + tags once as Skills & Tools */}
                                                {((cert.tools && cert.tools.length > 0) ||
                                                    (cert.tags && cert.tags.length > 0)) && (
                                                        <div className="mt-4 pt-4 border-t border-border">
                                                            <div className="font-semibold text-sm mb-2 text-foreground">
                                                                Skills & Tools
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {Array.from(
                                                                    new Set([
                                                                        ...(cert.tools || []),
                                                                        ...(cert.tags || []),
                                                                    ])
                                                                ).map((t) => (
                                                                    <span
                                                                        key={t}
                                                                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                                                                    >
                                                                        {t}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center pb-8">
                            <Link
                                href="/#certificates"
                                className="inline-flex items-center text-primary hover:underline font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
