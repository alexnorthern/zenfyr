import { ButtonHTMLAttributes, FC } from "react";
import Image, { StaticImageData } from "next/image";
import cls from './index.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    ico?: StaticImageData;
    className?: string;

    sm?: boolean;
    mode?: 'secondary' | 'primary';
}

const Button: FC<ButtonProps> = ({
    children,
    ico,
    className,
    sm,
    mode = 'primary',
    ...rest
}) => {
    return (
        <button
            className={`${cls.button} ${className}`}
            data-mode={mode} 
            data-sm={sm}
            {...rest}
        >
            <span>
                { children }
            </span>
            { ico && <Image
                src={ico}
                width={16}
                height={16}
                alt="ico"
            /> }
        </button>
    );
}

export { Button };