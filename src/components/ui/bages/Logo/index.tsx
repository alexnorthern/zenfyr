import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { publicRoutes } from "@/configs/routes.config";
import { logo } from "@/assets/images/ico";
import cls from './index.module.scss';


const Logo: FC = () => {
    return (
        <Link className={cls.logo} href={publicRoutes.home}>
            <Image
                src={logo.src}
                width={95}
                height={32}
                alt='logo'
            />
        </Link>
    );
}

export { Logo };