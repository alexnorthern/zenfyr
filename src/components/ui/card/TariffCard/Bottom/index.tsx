import { FC } from "react";
import Image from "next/image";
import { Tariff } from "@/types/interfaces";
import cls from './index.module.scss';


const Bottom: FC<Pick<Tariff, 'extra'>> = ({ extra }) => {
    return (
        <ul className={cls.bottom}>
            {extra.map((item, idx) => (
                <li key={idx} className={cls.item}>
                    <Image
                        src={item.ico}
                        width={16}
                        height={16}
                        alt='item.text'
                    />
                    <span>{item.text}</span>
                </li>
            ))}
        </ul>
    );
}

export { Bottom };