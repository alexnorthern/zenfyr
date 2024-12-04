import { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import cls from './index.module.scss';


interface GameBageProps {
    ico: StaticImageData;
    isFreeHost?: boolean;
    name: string;
    href: string;
}

const GameBage: FC<GameBageProps> = ({
    ico,
    isFreeHost,
    name,
    href
}) => {
    return (
        <Link className={`${isFreeHost && cls.active} ${cls.gameBage}`} href={href}>
            <div className={cls.image}>
                <Image
                    src={ico.src}
                    width={32}
                    height={32}
                    alt={name}
                />
            </div>
            <span>{name}</span>
        </Link>
    );
}

export { GameBage };