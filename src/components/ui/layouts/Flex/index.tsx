import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './index.module.scss';

interface FlexProps {
    className?: string;
    children: ReactNode;
    justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flexGrow?: number;
    gap?: string;
}

const Flex: FC<FlexProps> = ({
    className = '',
    children,
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexDirection = 'row',
    flexWrap = 'nowrap',
    gap = '1rem',
    flexGrow,
}) => {

    const combinedClassName = clsx(
        cls.flex,
        cls[`justify-${justifyContent}`],
        cls[`align-${alignItems}`],
        cls[`direction-${flexDirection}`],
        cls[`wrap-${flexWrap}`],
        className
    );

    return (
        <div
            className={combinedClassName}
            style={{ gap, flexGrow: flexGrow }}
        >
            {children}
        </div>
    );
};

export { Flex };