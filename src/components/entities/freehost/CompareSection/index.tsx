import { FC } from 'react';
import { motion } from 'framer-motion';

import { tariffsFreehost } from '@/data';
import { fadeIn } from '@/utils/animations';

import { Head } from '@/components/widgets/Head';
import { Container } from '@/components/ui/layouts/Container';
import { DashedLine } from '@/components/ui/lines/DashedLine';
import cls from './index.module.scss';

const CompareSection: FC = () => {
  return (
    <motion.section
      className={cls.compareSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <Container>
        <div className={cls.frame}>
          <Head
            title="А как оно на деле?"
            disc="Давайте наглядно сравним тарифы и вы убедитесь в наших словах."
          />
          <DashedLine
            color={'#fff'}
            opacity={0.1}
            dashLength={14}
            gapLength={14}
            strokeWidth={1}
          />
          <div className={cls.tableWrapper}>
            <div className={cls.table}>
              <div className={cls.tableHeader}>
                {['Тариф', 'График работы', 'Слоты', 'Процессор', 'ОЗУ и Диск', 'Защита от DDoS'].map((header, idx) => (
                  <div key={idx} className={cls.headerCell}>{header}</div>
                ))}
              </div>
              <div className={cls.tableBody}>
                <div className={cls.tableRow}>
                  <div className={cls.cell}>Бесплатный хостинг А</div>
                  <div className={cls.cell}>12/5</div>
                  <div className={cls.cell}>Не более 5</div>
                  <div className={cls.cell}>1 Ядро</div>
                  <div className={cls.cell}>2 GB RAM, 1 GB Disk</div>
                  <div className={cls.cell}>Нет</div>
                </div>
                {tariffsFreehost.map(({ name, workTime, extra, cores, ram, memory }, idx) => (
                  <div key={idx} className={cls.tableRow}>
                    <div className={cls.cell}>{`Zenfyr ${name}`}</div>
                    <div className={cls.cell}>{workTime}</div>
                    <div className={cls.cell}>{extra[0].text}</div>
                    <div className={cls.cell}>{cores}</div>
                    <div className={cls.cell}>{`${ram} RAM, ${memory} Disk`}</div>
                    <div className={cls.cell}>Да</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { CompareSection };
