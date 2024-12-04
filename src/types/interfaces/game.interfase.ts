import { StaticImageData } from "next/image";

export interface Game {
    id: string;
    ico: StaticImageData;
    pic: StaticImageData;
    name: string;
    disc: string;
}