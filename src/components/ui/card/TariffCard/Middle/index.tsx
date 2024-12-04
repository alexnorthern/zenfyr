import { FC } from "react";
import { Tariff } from "@/types/interfaces";
import { Param, Param as IParam } from '../Param';
import { ps as psIco, cores as coresIco, ram as ramIco, memory as memoryIco } from '@/assets/images/ico/tariffs';
import cls from './index.module.scss';

const Middle: FC<Pick<Tariff, 'ps' | 'cores' | 'ram' | 'memory'>> = ({ ps, cores, ram, memory }) => {

    const params: IParam[] = [
        {
            ico: psIco,
            name: 'Процессор',
            value: ps,
        },
        {
            ico: coresIco,
            name: 'Ядра',
            value: cores,
        },
        {
            ico: ramIco,
            name: 'ОЗУ',
            value: ram,
        },
        {
            ico: memoryIco,
            name: 'Диск',
            value: memory,
        },
    ];

    return (
        <div className={cls.middle}>
            {params.map((item, idx) => (
                <Param
                    key={idx}
                    ico={item.ico}
                    name={item.name}
                    value={item.value}
                />
            ))}
        </div>
    );
}

export { Middle };