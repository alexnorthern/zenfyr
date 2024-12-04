import { FC } from "react";
import Image from "next/image";
import { Tariff } from "@/types/interfaces";
import cls from './index.module.scss';


const Top: FC<Pick<Tariff, 'ico' | 'name' | 'lastPrise' | 'prise' | 'isPopular'>> = ({ ico, name, lastPrise, prise, isPopular }) => {
    return (
        <div className={cls.top}>
            <div className={cls.name}>
                <Image
                    src={ico.src}
                    width={ico.width}
                    height={ico.height}
                    alt={name}
                />
                <h6>{name}</h6>
                {isPopular && (<span className={cls.popular}>
                    • Популярно
                </span>)}
            </div>
            <div className={cls.prise}>
                <p>от {lastPrise && <strong>{`${new Intl.NumberFormat("en-En").format(lastPrise)} руб`}</strong>}</p>
                <p>
                    <span>{ prise > 0 ? `${prise.toFixed(2)} руб` : 'Бесплатно'}</span>
                    { prise > 0 && (<small>/месяц</small>)}
                </p>
            </div>
        </div>
    );
}

export { Top };