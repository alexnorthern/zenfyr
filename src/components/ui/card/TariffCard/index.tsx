import { FC } from "react";
import { motion } from 'framer-motion';
import { Tariff } from "@/types/interfaces";

import { cardAnimation } from "@/utils/animations";

import { Top } from "./Top";
import { Middle } from "./Middle";
import { Bottom } from "./Bottom";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { Button } from "@/components/ui/forms/buttons/Button";
import cls from './index.module.scss';

interface TariffCardProps {
    tariff: Tariff;
}

const TariffCard: FC<TariffCardProps> = ({ tariff }) => {

    return (
        <motion.article
            className={cls.tariffCard}
            style={{
                background: tariff.background
            }}
            initial={{ scale: 1 }}
            variants={cardAnimation}
            whileHover={{
                scale: 1.02,
                boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.5)',
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            <Top
                ico={tariff.ico}
                name={tariff.name}
                lastPrise={tariff.lastPrise}
                prise={tariff.prise}
                isPopular={tariff.isPopular}
            />
            <DashedLine
                color={'#fff'}
                opacity={0.1}
                dashLength={14}
                gapLength={14}
                strokeWidth={1}
            />
            <Middle
                ps={tariff.ps}
                cores={tariff.cores}
                ram={tariff.ram}
                memory={tariff.memory}
            />
            <DashedLine
                color={'#fff'}
                opacity={0.1}
                dashLength={14}
                gapLength={14}
                strokeWidth={1}
            />
            <Bottom
                extra={tariff.extra}
            />
            <Button>
                Заказать
            </Button>
        </motion.article>
    );
}

export { TariffCard };