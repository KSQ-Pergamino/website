'use client';

import { useState, useCallback } from 'react';

interface UseSliderOptions {
    initialIndex?: number;
    length: number;
    loop?: boolean;
}

export const useSlider = ({ initialIndex = 0, length, loop = false }: UseSliderOptions) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const next = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 >= length) {
                return loop ? 0 : prevIndex;
            }
            return prevIndex + 1;
        });
    }, [length, loop]);

    const prev = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex - 1 < 0) {
                return loop ? length - 1 : prevIndex;
            }
            return prevIndex - 1;
        });
    }, [length, loop]);

    const goTo = useCallback(
        (index: number) => {
            if (index >= 0 && index < length) {
                setCurrentIndex(index);
            }
        },
        [length]
    );

    return {
        currentIndex,
        next,
        prev,
        goTo,
    };
};