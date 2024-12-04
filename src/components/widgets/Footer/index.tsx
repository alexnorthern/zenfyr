import { FC } from "react";

import Link from "next/link";

import { extra, information } from "@/data";
import { Container } from "@/components/ui/layouts/Container";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { Logo } from "@/components/ui/bages/Logo";

import cls from './index.module.scss';


const LinkGroup: FC<{
    title: string;
    links: { name: string; href: string }[]
}> = ({ title, links }) => (
    <div className={cls.group}>
        <h4 className={cls.title}>{title}</h4>
        <ul className={cls.list}>
            {links.map((item, idx) => (
                <li key={idx} className={cls.item}>
                    <Link href={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

const InformationItem: FC<{ name: string; value: string }> = ({ name, value }) => (
    <li className={cls.item}>
        <small>{name}:</small>
        <p>{value}</p>
    </li>
);

const Footer: FC = () => {
    return (
        <footer className={cls.footer}>
            <Container>
                <div className={cls.row}>
                    <div className={cls.frame}>
                        <div className={cls.main}>
                            <Logo />
                            <p data-id={1} className={cls.copywrite}>zenfyr. 2024. all rights reserved</p>
                            <div className={cls.extras}>
                                <LinkGroup title="Общее" links={extra.common} />
                                <LinkGroup title="Игровой хостинг" links={extra.game_hosting} />
                                <LinkGroup title="Документы" links={extra.docs} />
                            </div>
                        </div>
                        <DashedLine
                            color={'#fff'}
                            opacity={0.1}
                            dashLength={14}
                            gapLength={14}
                            strokeWidth={1}
                        />
                        <div className={cls.main}>
                            <p className={cls.contacts}>
                                <b>Связь:</b>
                                <span>abuse@zenfyr.com</span>
                            </p>
                            <p data-id={2} className={cls.copywrite}>zenfyr. 2024. all rights reserved</p>
                        </div>
                    </div>
                    <div className={cls.frame}>
                        <h4 className={`${cls.title} ${cls.center}`}>Информация</h4>
                        <ul className={cls.list}>
                            {information.map((item, idx) => (
                                <InformationItem
                                    key={idx}
                                    name={item.name}
                                    value={item.value}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export { Footer };