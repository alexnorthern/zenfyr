import { FC, ReactNode } from "react";
import cls from './index.module.scss';

interface HeadProps {
    title: string | ReactNode;
    disc?: string;
    simple?: boolean;
    center?: boolean;
}

const Head: FC<HeadProps> = ({
    title,
    disc,
    simple,
    center
}) => {
    return (
        <div className={cls.head} data-simple={simple} data-center={center}>
            <h2 className={cls.title}>
               { title }
            </h2>
            <p className={cls.disc}>
                {disc}
            </p>
        </div>
    );
}

export { Head };