import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/animations";

import logo from '@/assets/images/ico/logo.svg';
import cls from './index.module.scss';


interface CompareCardProps {
    name: string;
    ping: string;
    list: Array<{
        param: string;
        value: string;
    }>;
}

const CompareCard: FC<CompareCardProps> = ({
    name,
    ping,
    list
}) => {
    return (
        <div className={cls.wrapper}>
            {name !== 'zenfyr' && (
                <div className={cls.ping}>
                    <p>Ваш пинг на этом сервере</p>
                    <span>{ping}</span>
                </div>
            )}
            <motion.article 
                className={cls.compareCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}    
            >
                <div className={cls.head}>
                    {name === 'zenfyr'
                        ? (<Image
                            src={logo}
                            width={95}
                            height={32.939}
                            alt={'zenfyr'}
                        />)
                        : <h5 className={cls.name}>{name}</h5>}
                </div>
                <ul className={cls.body}>
                    {list.map((item, idx) => (
                        <li key={idx} className={cls.item}>
                            <small>{item.param}</small>
                            <span data-yes={item.value === 'Да'}>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </motion.article>
        </div>
    );
}

export { CompareCard };