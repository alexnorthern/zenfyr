import { FC, ReactNode } from "react";
import cls from './index.module.scss';


interface PromoProps {
    title: ReactNode;
    disc: string;
    children: ReactNode;
};

const Promo: FC<PromoProps> = ({
    title,
    disc,
    children
}) => {

    return (
        <section className={cls.promo}>
            <h2 className={cls.title}>{title}</h2>
            <p className={cls.disc}>{disc}</p>
            {children}
            <div className={cls.ellipse} />
        </section>
    );
}

export { Promo };