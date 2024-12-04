import { FC } from 'react';
import cls from './index.module.scss';

const Loading: FC = () => {
    return (
        <div className={cls.loading}>
            <div className={cls.container}>
                <div className={cls.spinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2 className={cls.title}>Loading...</h2>
            </div>
        </div>
    );
}

export { Loading };