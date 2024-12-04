import { Tariff } from '@/types/interfaces';
import { lvls, slots, ddos, support } from '@/assets/images/ico/tariffs';

export const tariffsFreehost: Tariff[] = [
    {
        id: 1,
        ico: lvls._1,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(216, 255, 89, 0.11) 0%, rgba(205, 255, 89, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Grass',
        lastPrise: null,
        prise: 0,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '1 ядро (4.9 гц)',
        ram: '2 GB',
        memory: '20 GB',
        extra: [
            {
                ico: slots,
                text: 'Не более 8 слотов',
            },
            {
                ico: ddos,
                text: 'Низкий пинг и защита от DDoS',
            },
            {
                ico: support,
                text: 'Поддержка установки своих ядер',
            },
        ]
    },
    {
        id: 2,
        ico: lvls._2,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 137, 139, 0.11) 0%, rgba(255, 89, 92, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: true,
        name: 'Flower',
        lastPrise: null,
        prise: 0,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '1.5 ядра (4.9 гц)',
        ram: '3 GB',
        memory: '30 GB',
        extra: [
            {
                ico: slots,
                text: 'Слоты неограниченные',
            },
            {
                ico: ddos,
                text: 'Низкий пинг и защита от DDoS',
            },
            {
                ico: support,
                text: 'Поддержка установки своих ядер',
            },
        ]
    },
    {
        id: 3,
        ico: lvls._3,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 211, 89, 0.11) 0%, rgba(255, 114, 89, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Bee',
        lastPrise: null,
        prise: 0,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '2 ядра (4.9 гц)',
        ram: '4 GB',
        memory: '50 GB',
        extra: [
            {
                ico: slots,
                text: 'Слоты неограниченные',
            },
            {
                ico: ddos,
                text: 'Низкий пинг и защита от DDoS',
            },
            {
                ico: support,
                text: 'Поддержка установки своих ядер',
            },
        ]
    },
    {
        id: 4,
        ico: lvls._4,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: true,
        name: 'Iron',
        lastPrise: 275,
        prise: 260,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '2 ядра (4.9 гц)',
        ram: '3.5 GB',
        memory: '40 GB',
        extra: [
            {
                ico: slots,
                text: 'Слоты неограниченные',
            },
            {
                ico: ddos,
                text: 'Низкий пинг и защита от DDoS',
            },
            {
                ico: support,
                text: 'Поддержка установки своих ядер',
            },
        ]
    },
]