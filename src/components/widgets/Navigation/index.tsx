"use client";
import { FC, useState, useRef, useEffect, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { games } from '@/data';
import { authRoutes, generateDynamicRoute, publicRoutes } from '@/configs/routes.config';

import { Logo } from '@/components/ui/bages/Logo';
import { Container } from '@/components/ui/layouts/Container';
import { Button } from '@/components/ui/forms/buttons/Button';

import * as ico from '@/assets/images/ico';
import cls from './index.module.scss';


interface DropdownItem {
    name: string;
    id?: string;
    onClick?: () => void;
}

interface NavigationItem {
    type: 'link' | 'dropdown';
    name: string;
    id?: string;
    dropdownItems?: DropdownItem[];
}

const Dropdown: FC<{ 
    items: DropdownItem[]; 
    isOpen: boolean; 
}> = memo(({ items, isOpen }) => {
    if (!isOpen) return null;

    return (
        <ul className={cls.dropdown}>
            {items.map((item, index) => (
                <li key={index} className={cls.dropdownItem}>
                    {item.id ? (
                        <Link href={generateDynamicRoute.gameHost(item.id)}>{item.name}</Link>
                    ) : (
                        <span onClick={item.onClick}>{item.name}</span>
                    )}
                </li>
            ))}
        </ul>
    );
});

const Navigation: FC = () => {
    const router = useRouter();
    const { push } = router;

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const navigationRef = useRef<HTMLUListElement>(null);

    const navigationItems: NavigationItem[] = [
        {
            type: 'dropdown',
            name: 'Игровые сервера',
            dropdownItems: games
        },
        {
            type: 'link',
            id: publicRoutes.freehost,
            name: 'Бесплатный хостинг',
        },
        {
            type: 'link',
            id: publicRoutes.catalog,
            name: 'VPS & WEB',
        },
        {
            type: 'link',
            name: 'FAQ',
            id: publicRoutes.faq,
        },
        {
            type: 'dropdown',
            name: 'Другое',
            dropdownItems: [
                { name: 'О компании', id: publicRoutes.about },
                { name: 'Контакты', id: publicRoutes.contacts },
            ]
        }
    ];

    const toggleDropdown = useCallback((key: string) => {
        setOpenDropdown(prev => prev === key ? null : key);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navigationRef.current && 
                !navigationRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={cls.navigation}>
            <Container>
                <div className={cls.row}>
                    <Logo />
                    <ul ref={navigationRef} className={cls.list}>
                        {navigationItems.map((item) => (
                            <li 
                                key={item.name}
                                className={`
                                    ${cls.item} 
                                    ${item.type === 'dropdown' ? cls.hasDrop : ''} 
                                    ${openDropdown === item.name ? cls.active : ''}
                                `}
                                onClick={() => item.type === 'dropdown' && toggleDropdown(item.name)}
                            >
                                {item.type === 'link' ? (
                                    <Link href={item.id || ''}>{item.name}</Link>
                                ) : (
                                    <>
                                        <span>{item.name}</span>
                                        <Image 
                                            width={16}
                                            height={16}
                                            src={ico.chevronDown.src}
                                            alt='arrow'
                                            className={cls.dropdownIcon}
                                        />
                                        {item.dropdownItems && (
                                            <Dropdown 
                                                items={item.dropdownItems} 
                                                isOpen={openDropdown === item.name} 
                                            />
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button 
                        className={cls.signin} 
                        ico={ico.login.src}
                        type='button'
                        title='Войти'
                        onClick={() => push(authRoutes.login)}
                        >
                        Войти
                    </Button>
                    <div className={cls.mob}>
                        <button onClick={() => setOpenMenu(prev => !prev)}>
                            <Image
                                src={openMenu ? ico.minus.src : ico.burger.src}
                                width={16}
                                height={16}
                                alt='menu'
                            />
                        </button>
                        <div className={cls.offset}>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

Dropdown.displayName = 'Dropdown';
Navigation.displayName = 'Navigation';

export { Navigation };