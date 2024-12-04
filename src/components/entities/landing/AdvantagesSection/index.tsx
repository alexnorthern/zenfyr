import { FC } from "react";
import { motion } from 'framer-motion';

import { cardsAbout } from "@/data";
import { stagger } from "@/utils/animations";

import { Head } from "@/components/widgets/Head";
import { Container } from "@/components/ui/layouts/Container";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { AboutCard } from "@/components/ui/card/AboutCard";
import * as ico from '@/assets/images/ico/about';
import cls from './index.module.scss';


const AdvantagesSection: FC = () => {

    return (
        <motion.section
            className={cls.advantagesSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
        >
            <Container>
                <div className={cls.frame}>
                    <Head
                        title={<>Наши преимущества<br /> — То почему нас выбирают.</>}
                        disc='Наша команда делает всё, что бы предоставить вам самый надежный, производительный и стабильный хостинг-сервис на рынке.'
                    />
                    <DashedLine
                        color={'#fff'}
                        opacity={0.1}
                        dashLength={14}
                        gapLength={14}
                        strokeWidth={1}
                    />
                    <div className={cls.wrapper}>
                        {cardsAbout.map(item => {
                            const iconKey = `_${item.id}` as keyof typeof ico;
                            return (
                                    <AboutCard
                                        key={item.id}
                                        ico={ico[iconKey] || ico['_1']}
                                        title={item.title}
                                        text={item.text}
                                    />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </motion.section>
    );
}

export { AdvantagesSection };