"use client";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from "@/utils/animations";

import { database } from '@/assets/images/ico';
import { Flex } from "@/components/ui/layouts/Flex";
import { Container } from "@/components/ui/layouts/Container";
import { Button } from "@/components/ui/forms/buttons/Button";
import cls from './index.module.scss';

const Header = forwardRef<HTMLDivElement>((props, ref) => {

    const scrollToSection = () => {
        if (ref && typeof ref !== "function" && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={cls.header}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <Container>
                    <Flex
                        className={cls.coll}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="32px"
                    >
                        <h1 className={cls.title}><span>Лучший</span> Игровой хостинг</h1>
                        <p className={cls.disc}>Давно искал идеальное решение для своих серверов? тебе к нам.</p>
                        <Button
                            ico={database.src}
                            onClick={scrollToSection}
                        >
                            Перейти к тарифам
                        </Button>
                    </Flex>
                </Container>
            </motion.div>
        </header>
    );
});

Header.displayName = 'Header';

export { Header };