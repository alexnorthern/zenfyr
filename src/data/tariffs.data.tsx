import { Tariff } from '@/types/interfaces';
import { lvls, slots, ddos, support } from '@/assets/images/ico/tariffs';

export const tariffs: Tariff[] = [
    {
        id: 1,
        ico: lvls._1,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 167, 89, 0.11) 0%, rgba(255, 167, 89, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Brick',
        lastPrise: null,
        prise: 165,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '1 ядро (4.9 гц)',
        ram: '2 GB',
        memory: '20 GB',
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
        id: 2,
        ico: lvls._2,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 147, 137, 0.11) 0%, rgba(255, 167, 89, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Copper',
        lastPrise: null,
        prise: 220,
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
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
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
    {
        id: 4,
        ico: lvls._4,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(95, 89, 255, 0.11) 0%, rgba(106, 89, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Lapis',
        lastPrise: null,
        prise: 275,
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
        id: 5,
        ico: lvls._5,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 222, 89, 0.11) 0%, rgba(255, 167, 89, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Gold',
        lastPrise: null,
        prise: 400,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '3 ядра (4.9 гц)',
        ram: '5 GB',
        memory: '65 GB',
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
        id: 6,
        ico: lvls._6,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(137, 229, 255, 0.11) 0%, rgba(89, 211, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Diamond',
        lastPrise: null,
        prise: 600,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '4 ядра (4.9 гц)',
        ram: '6 GB',
        memory: '90 GB',
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
        id: 7,
        ico: lvls._7,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 255, 255, 0.11) 0%, rgba(255, 215, 150, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: true,
        name: 'Quartz',
        lastPrise: 1_000,
        prise: 750,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '4 ядра (4.9 гц)',
        ram: '8 GB',
        memory: '100 GB',
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
        id: 8,
        ico: lvls._8,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(255, 255, 255, 0.11) 0%, rgba(255, 215, 150, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: true,
        name: 'Netherite',
        lastPrise: null,
        prise: 1150,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '6 ядра (4.9 гц)',
        ram: '12 GB',
        memory: '150 GB',
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
        id: 9,
        ico: lvls._9,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(194, 89, 255, 0.11) 0%, rgba(164, 89, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Obsidian',
        lastPrise: null,
        prise: 1450,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '6 ядра (4.9 гц)',
        ram: '16 GB',
        memory: '180 GB',
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
        id: 10,
        ico: lvls._10,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(157, 255, 137, 0.11) 0%, rgba(89, 255, 109, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Emerald',
        lastPrise: null,
        prise: 1990,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '6 ядра (4.9 гц)',
        ram: '20 GB',
        memory: '240 GB',
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
        id: 11,
        ico: lvls._11,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(46.44% 84.43% at 45.24% -11.48%, rgba(225, 104, 255, 0.15) 0%, rgba(204, 0, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(181, 173, 255, 0.62) 15.02%, rgba(220, 191, 255, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: false,
        name: 'Amethyst',
        lastPrise: null,
        prise: 1990,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '8 ядра (4.9 гц)',
        ram: '24 GB',
        memory: '280 GB',
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
        id: 12,
        ico: lvls._12,
        games: [
            'minecraft',
            'garrys_mod',
            'rust',
        ],
        background: 'radial-gradient(31.27% 114.97% at 6.46% 3.66%, rgba(228, 173, 235, 0.11) 0%, rgba(250, 151, 255, 0.00) 100%), radial-gradient(84.97% 112.83% at 41.16% -71.07%, rgba(173, 255, 179, 0.20) 15.02%, rgba(191, 255, 191, 0.00) 100%), rgba(28, 32, 43, 0.15)',
        isPopular: true,
        name: 'Terracotta',
        lastPrise: 4_550,
        prise: 3500,
        workTime: '24/7',
        ps: 'На выбор',
        cores: '8 ядра (4.9 гц)',
        ram: '32 GB',
        memory: '360 GB',
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