import { StaticImageData } from "next/image";

export interface Tariff {
    id: number;
    ico: StaticImageData;
    games: Array<string>;
    background: string;
    isPopular: boolean;
    name: string;
    lastPrise: null | number;
    prise: number;
    workTime: string;
    ps: string;
    cores: string;
    ram: string;
    memory: string;
    extra: Array<{
        ico: string;
        text: string;
    }>;
}