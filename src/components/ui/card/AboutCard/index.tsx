import { FC } from "react";
import { motion } from "framer-motion";

import { cardAnimation } from "@/utils/animations";

import Image, { StaticImageData } from "next/image";
import cls from './index.module.scss';


interface AboutCardProps {
    ico: StaticImageData;
    title: string;
    text: string;
}

const AboutCard: FC<AboutCardProps> = ({
    ico,
    title,
    text,
}) => {
    return (
        <motion.article className={cls.card} variants={cardAnimation}>
            <div className={cls.head}>
                <Image
                    src={ico.src}
                    width={ico.width}
                    height={ico.height}
                    alt={`ico ${title}`}
                />
                <h5>{ title }</h5>
            </div>
            <div className={cls.body}>
                <p>
                    { text }
                </p>
            </div>
        </motion.article>
    );
}

export { AboutCard };