"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

export default function TypingEffect({
    text,
    speed = 100,
    delay = 0,
    className = "",
    onComplete,
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (currentIndex === 0 && delay > 0) {
            const delayTimeout = setTimeout(() => {
                setCurrentIndex(1);
            }, delay);
            return () => clearTimeout(delayTimeout);
        }

        if (currentIndex > 0 && currentIndex <= text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex));
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (currentIndex > text.length && !isComplete) {
            setIsComplete(true);
            if (onComplete) {
                onComplete();
            }
        }
    }, [currentIndex, text, speed, delay, isComplete, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            <span
                className={`inline-block w-0.5 h-[0.9em] ml-1 bg-current align-middle transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                }`}
            />
        </span>
    );
}
