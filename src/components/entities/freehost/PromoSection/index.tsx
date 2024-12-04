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
                    title={<>Нужно железо покруче?</>}
                    disc='Выбирайте любой тариф в каталоге и оформляйте 24 часа тестового периода бесплатно.'
                >
                    <Button
                        onClick={() => push(publicRoutes.catalog)}>
                        Перейти в каталог
                    </Button>
                </Promo>
            </Container>
        </motion.section>
    );
}

export { PromoSection };