"use client";

import { useState, useEffect } from "react";

interface MultiTypingEffectProps {
    phrases: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export default function MultiTypingEffect({
    phrases,
    speed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000,
    className = "",
}: MultiTypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayedText.length < currentPhrase.length) {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, wait before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, move to next phrase
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, currentPhraseIndex, isDeleting, phrases, speed, deleteSpeed, pauseDuration]);

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
