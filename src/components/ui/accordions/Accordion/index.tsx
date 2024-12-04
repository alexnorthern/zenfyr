"use client";
import { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import chevron_down from '@/assets/images/ico/base/chevron_down.svg';
import chevron_up from '@/assets/images/ico/base/chevron_up.svg';
import cls from './index.module.scss';


interface AccordionProps {
    title: string;
    children: ReactNode;
}

interface AccordionGroupProps {
    children: ReactNode;
}

const AccordionGroup: FC<AccordionGroupProps> = ({ children }) => {
    return (
        <div className={cls.group}>
            {children}
        </div>
    );
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cls.accordion}>
            <button 
                title={`${isOpen ? 'Свернуть' : 'Раскрыть'} выпадающий список`}
                type='button'
                className={cls.header}
                onClick={toggleAccordion}
            >
                <span>{title}</span>
                <Image 
                    src={isOpen ? chevron_down : chevron_up}
                    width={24}
                    height={24}
                    alt='arrow'
                />
            </button>
            <div className={`${cls.body} ${isOpen ? cls.open : ''}`}>
                <div className={cls.content}>
                    { children }
                </div>
            </div>
        </div>
    );
};

export { AccordionGroup, Accordion };