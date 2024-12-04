import { FC, ReactNode } from "react";
import cls from './index.module.scss';


interface EmptyCardProps {
    title: ReactNode;
    disc: string;
    children: ReactNode;
};

const EmptyCard: FC<EmptyCardProps> = ({
    title,
    disc,
    children
}) => {

    return (
        <section className={cls.emptyCard}>
            <h3 className={cls.title}>{title}</h3>
            <p className={cls.disc}>{disc}</p>
            {children}
        </section>
    );
}

export { EmptyCard };