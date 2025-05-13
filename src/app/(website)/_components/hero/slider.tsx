'use client';

import { PropsWithChildren, Children, useEffect, useRef } from 'react';
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';
import clsx from 'clsx';
import { useSlider } from '../../_hooks/useSlider';

interface SliderProps extends PropsWithChildren {
    initialIndex?: number;
    loop?: boolean;
}

const SliderDot = ({currentIndex, index, onClick}: {currentIndex: number, index: number, onClick: () => void}) => {
    return (
        <div className={clsx('h-5 w-5 rounded-full cursor-pointer', currentIndex === index ? 'bg-gray-200': 'bg-gray-200/50')} onClick={onClick}></div>
    );
};

export const Slider = ({ initialIndex = 0, loop = false, children }: SliderProps) => {
    const numberOfSlides = Children.count(children);

    const { currentIndex, goTo, next, prev } = useSlider({ length: numberOfSlides, initialIndex, loop });

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const deltaX = touchStartX.current - touchEndX.current;
            if (deltaX > 50) {
                next(); // Swipe left
            } else if (deltaX < -50) {
                prev(); // Swipe right
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prev()
            } else if (event.key === 'ArrowRight') {
                next()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [next,prev])
    

    return (
        <div
            className="overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button onClick={() => prev()} className='hidden md:block cursor-pointer absolute left-[2%] bottom-[4%] md:top-1/2 md:bottom-auto z-10 p-2 hover:scale-110 transition-all duration-300'><ChevronLeftCircleIcon size={40} className='text-white bg-gray-400/60 rounded-full'/></button>
            <div
                className="transform flex flex-row transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children}
            </div>

            <button onClick={() => next()} className='hidden md:block cursor-pointer absolute right-[2%] bottom-[4%] md:top-1/2 md:bottom-auto z-10 p-2 hover:scale-110 transition-all duration-300'><ChevronRightCircleIcon size={40} className='text-white bg-gray-400/60 rounded-full'/></button>
            <div className='flex absolute left-1/2 top-[90.5%] -translate-x-1/2 gap-2'>
                {
                    Children.map(children, (child, index) => (
                        <SliderDot key={index} currentIndex={currentIndex} index={index} onClick={() => goTo(index)}/>
                    ))
                }
            </div>
        </div>
    );
};