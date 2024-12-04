"use client";
import { FC, useState } from "react";
import Link from "next/link";

import { faq } from "@/data";
import { publicRoutes } from "@/configs/routes.config";

import { Accordion, AccordionGroup } from "@/components/ui/accordions/Accordion"

import cls from './index.module.scss';


export enum FAQTypes {
    subscriptions = 'subscriptions',
    rules = 'rules',
    gamePanel = 'game_panel',
    configuringServers = 'configuring_servers',
};

type FAQKeys = keyof typeof faq;

interface FaqSectionProps {
    allowedTypes?: FAQTypes[];
}

const FaqSection: FC<FaqSectionProps> = ({ allowedTypes }) => {
    const [active, setActive] = useState<FAQTypes>(FAQTypes.subscriptions);

    const getUniqueTypes = (keys: string[]): { key: string; name: string }[] => {
        return keys
            .map(key => {
                const items = faq[key as FAQKeys];
                if (Array.isArray(items) && items.length > 0) {
                    return { key, name: items[0].type };
                }
                return null;
            })
            .filter(Boolean) as { key: string; name: string }[];
    };
    
    const uniqueTypes = allowedTypes 
        ? getUniqueTypes(allowedTypes) 
        : getUniqueTypes(Object.keys(faq));
    
    return (
        <div className={cls.faqSection}>
            <div className={cls.menu}>
                {uniqueTypes.map(item => (
                    <button
                        key={item.key}
                        type='button'
                        title={`Переключить на ${item.name}`}
                        className={`${active === item.key ? cls.active : ''} ${cls.item}`}
                        onClick={() => setActive(item.key as FAQTypes)}
                    >
                        {item.name}
                    </button>
                ))}
                { allowedTypes && (
                    <Link 
                        href={publicRoutes.faq}
                        className={cls.toFaqLink}
                    >
                        {'Перейти к FAQ ->'}
                    </Link>
                ) }
            </div>
            <AccordionGroup>
                {faq[active].map((item, idx) => (
                    <Accordion key={idx} title={item.title}>
                        <p className={cls.text}>{item.text}</p>
                    </Accordion>
                ))}
            </AccordionGroup>
        </div>
    );
}

export { FaqSection };