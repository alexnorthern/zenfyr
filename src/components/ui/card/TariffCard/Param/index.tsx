import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import cls from './index.module.scss';


type Param = {
    ico: StaticImageData | string,
    name: string;
    value: string | number;
}

const Param: FC<Param> = ({ 
    ico, 
    name, 
    value 
}) => {
    return (
        <div className={cls.param}>
            <small>
                <Image
                    src={ico}
                    width={16}
                    height={16}
                    alt={name}
                />
                <span>{ name }</span>
            </small>
            <p>{ value }</p>
        </div>
    );
}

export { Param };