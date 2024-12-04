"use client";
import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/animations";

import { Head } from "@/components/widgets/Head";
import { Container } from "@/components/ui/layouts/Container";
import { DashedLine } from "@/components/ui/lines/DashedLine";
import { FaqSection, FAQTypes } from "../../FAQ/FaqSection";

import cls from './index.module.scss';


const AnswersSection: FC = () => {
    return (
        <motion.section
            className={cls.answersSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <Container>
                <div className={cls.frame}>
                    <Head
                        title={<>Ответы на почти все вопросы<br/> которые вас интересуют.</>}
                        disc='Если мы не смогли дать вам ответ на ваш вопрос, пожалуйста, обратитесь в тех.поддержку.'
                    />
                    <DashedLine
                        color={'#fff'}
                        opacity={0.1}
                        dashLength={14}
                        gapLength={14}
                        strokeWidth={1}
                    />
                    <FaqSection 
                        allowedTypes={[FAQTypes.subscriptions]}
                    />
                </div>
            </Container>
        </motion.section>
    );
}

export { AnswersSection };