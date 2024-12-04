"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { publicRoutes } from '@/configs/routes.config';
import { fadeIn } from '@/utils/animations';

import { Container } from "@/components/ui/layouts/Container";
import { Button } from '@/components/ui/forms/buttons/Button';
import { Promo } from '@/components/widgets/Promo';
import cls from './index.module.scss';

const PromoSection: FC = () => {
    const router = useRouter();
    const { push } = router;

    return (
        <motion.section 
            className={cls.promoSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <Container>
                <Promo 
                    title={<>Скидка <span>20%</span> по промокоду <span>4START</span></>}
                    disc='С такой скидкой наши тарифы просто сок. Берите, вы точно останетесь довольны.'
                >
                    <Button
                        onClick={() => push(publicRoutes.catalog)}>
                        Перейти к списку тарифов
                    </Button>
                </Promo>
            </Container>
        </motion.section>
    );
}

export { PromoSection };