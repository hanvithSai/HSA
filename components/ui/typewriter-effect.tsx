"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // Split words into an array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, setScope] = useState(0);

    useEffect(() => {
        // Simple sequence animation handled via CSS or just delay?
        // Let's use a simpler approach for stability:
        // We render all, but animate opacity/width
    }, []);

    const renderWords = () => {
        return (
            <motion.div className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.1, // rapid
                                        delay: idx * 0.5 + index * 0.05, // Stagger effect
                                        ease: "easeInOut",
                                    }}
                                    key={`char-${index}`}
                                    className={cn(``, word.className)}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div
            className={cn(
                "text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
