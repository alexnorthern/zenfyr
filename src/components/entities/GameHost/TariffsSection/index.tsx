"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { games, tariffs } from "@/data";
import { publicRoutes } from "@/configs/routes.config";
import { fadeIn } from "@/utils/animations";

import { Head } from "@/components/widgets/Head";
import { EmptyCard } from "@/components/ui/card/EmptyCard";
import { Container } from "@/components/ui/layouts/Container";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { TariffCard } from "@/components/ui/card/TariffCard";
import { Button } from "@/components/ui/forms/buttons/Button";
import cls from './index.module.scss';


interface TariffsSectionProps {
    gameId: string;
}

const TariffsSection: FC<TariffsSectionProps> = ({ gameId }) => {
    const { push } = useRouter();
    const gameName = gameId.replaceAll('_', ' ').replace(/\b\w/g, c => c.toUpperCase());

    const filteredData = tariffs.filter(e => e.games.includes(gameId));

    console.log(filteredData);

    return (
        <motion.section
            className={cls.tariffsSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <Container>
                <div className={cls.frame}>
                    <Head
                        title={<>Лучший хостинг для вашего<br /> {gameName} сервера.<br /><span>{games.find(e => e.id === gameId)?.disc}</span></>}
                        disc='Мы стараемся дать каждому  пользователю возможность ощутить преимущества премиального хостинга.'
                    />
                    <DashedLine
                        color={'#fff'}
                        opacity={0.1}
                        dashLength={14}
                        gapLength={14}
                        strokeWidth={1}
                    />
                    {filteredData.length ? (
                        <div className={cls.wrapper}>
                            {filteredData.map(item => (
                                <TariffCard
                                    key={item.id}
                                    tariff={item}
                                />
                            ))}
                        </div>
                    ) : (
                        <EmptyCard
                            title={<>По <span>{gameName}</span> не нашлось тарифов.</>}
                            disc='Вернитесь к каталогу тарифов и выберете другой сервис.'
                        >
                            <Button
                                type='button'
                                title='К списку тарифов'
                                onClick={() => push(publicRoutes.catalog)}
                            >
                                К списку тарифов
                            </Button>
                        </EmptyCard>
                    )}
                </div>
            </Container>
        </motion.section>
    );
};

export { TariffsSection };