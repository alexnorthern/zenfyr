import { FC } from 'react';
import cls from './index.module.scss';

interface GlowProps {
    className?: string;
    children?: React.ReactNode;
}

const Glow: FC<GlowProps> = ({ className = '', children }) => {
    return (
        <div className={`${cls.glow} ${className}`}>
            {children}
        </div>
    );
}

export { Glow };