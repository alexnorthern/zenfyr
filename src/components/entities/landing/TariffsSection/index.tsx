"use client"
import { forwardRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { games, tariffs } from "@/data";
import { publicRoutes, generateDynamicRoute } from "@/configs/routes.config";
import { fadeIn } from "@/utils/animations";

import { Head } from "@/components/widgets/Head";
import { Container } from "@/components/ui/layouts/Container";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { TariffCard } from "@/components/ui/card/TariffCard";
import { GameBage } from "@/components/ui/bages/GameBage";
import lightning from '@/assets/images/ico/base/lightning.svg';
import cls from './index.module.scss';


const TariffsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const [visibleCount, setVisibleCount] = useState<number>(8);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const filteredData = tariffs.slice(0, visibleCount);

    return (
        <motion.section 
            ref={ref} 
            className={cls.tariffsSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <Container>
                <div className={cls.frame}>
                    <Head
                        title={<>Широкий выбор по тарифам,<br />берите то — что нужно вам.</>}
                        disc='Мы стараемся дать каждому  пользователю возможность ощутить преимущества премиального хостинга.'
                    />
                    <div className={cls.navigation}>
                        <div className={cls.list}>
                            <GameBage
                                ico={lightning}
                                name={'Бесплатные тарифы'}
                                href={publicRoutes.freehost}
                            />
                            {games && games.map(game => (
                                <GameBage
                                    key={game.id}
                                    ico={game.ico}
                                    name={game.name}
                                    href={generateDynamicRoute.gameHost(game.id)}
                                />
                            ))}
                        </div>
                        <Link className={cls.catalogLink} href={publicRoutes.catalog}>
                            <span>
                                Перейти в каталог -&gt;
                            </span>
                        </Link>
                    </div>
                    <DashedLine
                        color={'#fff'}
                        opacity={0.1}
                        dashLength={14}
                        gapLength={14}
                        strokeWidth={1}
                    />
                    <div className={cls.wrapper}>
                        {tariffs && filteredData.map(item => (
                            <TariffCard
                                key={item.id}
                                tariff={item}
                            />
                        ))}
                    </div>
                    {visibleCount < tariffs.length && (
                        <button
                            title='Показать еще'
                            className={cls.showMore}
                            onClick={handleShowMore}
                        >
                            <span>Показать ещё {Math.min(4, tariffs.length - visibleCount)} опции</span>
                        </button>
                    )}
                </div>
            </Container>
        </motion.section>
    );
});

TariffsSection.displayName = 'TariffsSection';

export { TariffsSection };