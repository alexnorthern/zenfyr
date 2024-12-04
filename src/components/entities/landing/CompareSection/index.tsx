"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

import { pingCompare } from "@/data";
import { fadeIn } from "@/utils/animations";

import { Head } from "@/components/widgets/Head";
import { Container } from "@/components/ui/layouts/Container";
import { CompareCard } from "@/components/ui/card/CompareCard";
import { PingMeter } from "@/components/ui/pings/PingMeter";
import * as ico from '@/assets/images/ico';
import cls from './index.module.scss';


const CompareSection: FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % pingCompare.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + pingCompare.length) % pingCompare.length);
    };

    return (
        <motion.section
            className={cls.compareSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <Container>
                <div className={cls.frame}>
                    <Head
                        simple
                        title='Итак, давайте сравним!'
                    />
                </div>
                <div className={cls.ping}>
                    <PingMeter
                        minPing={10}
                        maxPing={60}
                    />
                    <div className={cls.wrapper}>
                        {isMobile ? (
                            <div className={cls.carousel}>
                                <div className={cls.slideWrapper}>
                                    <CompareCard
                                        name={pingCompare[currentSlide].name}
                                        ping={pingCompare[currentSlide].ping}
                                        list={pingCompare[currentSlide].list}
                                    />
                                </div>
                                <div className={cls.arrowWrapper}>
                                    <button
                                        className={`${cls.arrow} ${cls.arrowRight}`}
                                        onClick={nextSlide}
                                        aria-label="Предыдущий слайд"
                                    >
                                        <Image
                                            src={ico.chevronRight.src}
                                            alt="Предыдущий слайд"
                                            width={24}
                                            height={24}
                                        />
                                    </button>
                                    <button
                                        className={`${cls.arrow} ${cls.arrowLeft}`}
                                        onClick={prevSlide}
                                        aria-label="Следующий слайд"
                                    >
                                        <Image
                                            src={ico.chevronLeft.src}
                                            alt="Следующий слайд"
                                            width={24}
                                            height={24}
                                        />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                {pingCompare.map((item, idx) => (
                                    <CompareCard
                                        key={idx}
                                        name={item.name}
                                        ping={item.ping}
                                        list={item.list}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </motion.section>
    );
}

export { CompareSection };