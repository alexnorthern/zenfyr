"use client";
import { FC, useRef, useState, useLayoutEffect } from "react";

interface DashedLineProps {
    color?: string;
    opacity?: number;
    dashLength?: number;
    gapLength?: number;
    strokeWidth?: number;
    className?: string;
}

const DashedLine: FC<DashedLineProps> = ({
    color = 'white',
    opacity = 0.1,
    dashLength = 14,
    gapLength = 14,
    strokeWidth = 1,
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lineWidth, setLineWidth] = useState<number>(0);

    useLayoutEffect(() => {
        if (containerRef.current) {
            setLineWidth(containerRef.current.offsetWidth);
        }
    }, []);

    const calculateDashCount = () => {
        const fullDashLength = dashLength + gapLength;
        const dashCount = Math.ceil(lineWidth / fullDashLength);
        return dashCount;
    };

    const renderDashes = () => {
        const dashCount = calculateDashCount();
        const dashes = [];

        for (let i = 0; i < dashCount; i++) {
            dashes.push(
                <line
                    key={i}
                    x1={i * (dashLength + gapLength)}
                    y1="1"
                    x2={i * (dashLength + gapLength) + dashLength}
                    y2="1"
                    stroke={color}
                    strokeOpacity={opacity}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
            );
        }

        return dashes;
    };

    return (
        <div ref={containerRef} className={`w-full ${className}`}>
            <svg
                width="100%"
                height="2"
                viewBox={`0 0 ${lineWidth} 2`}
                fill="none"
            >
                {renderDashes()}
            </svg>
        </div>
    );
};

export { DashedLine };