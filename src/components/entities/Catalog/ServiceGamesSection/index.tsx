"use client";
import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { games } from '@/data';
import { stagger } from '@/utils/animations';

import { Head } from '@/components/widgets/Head';
import { DashedLine } from '@/components/ui/lines/DashedLine';
import { Container } from '@/components/ui/layouts/Container';
import { ServiceGameCard } from '@/components/ui/card/ServiceGameCard';
import { EmptyCard } from '@/components/ui/card/EmptyCard';
import { Button } from '@/components/ui/forms/buttons/Button';
import cls from './index.module.scss';


const ServiceGamesSection: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = games.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <motion.section
      className={cls.serviceGamesSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <Container>
        <div className={cls.frame}>
          <Head
            title={
              <>
                Огромное количество тарифов <br /> для ваших любимых игр.
              </>
            }
            disc="Мы стараемся дать каждому  пользователю возможность ощутить преимущества премиального хостинга."
          />
          <DashedLine
            color={'#fff'}
            opacity={0.1}
            dashLength={14}
            gapLength={14}
            strokeWidth={1}
          />
          <div className={cls.wrapper}>
            <div className={cls.controll}>
              <div className={cls.filter}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M10 0.666667C10 0.489856 9.92976 0.320286 9.80474 0.195262C9.67971 0.0702379 9.51014 0 9.33333 0C9.15652 0 8.98695 0.0702379 8.86193 0.195262C8.7369 0.320286 8.66667 0.489856 8.66667 0.666667V1.33333H0.666667C0.489856 1.33333 0.320286 1.40357 0.195262 1.5286C0.0702379 1.65362 0 1.82319 0 2C0 2.17681 0.0702379 2.34638 0.195262 2.4714C0.320286 2.59643 0.489856 2.66667 0.666667 2.66667H8.66667V3.33333C8.66667 3.51014 8.7369 3.67971 8.86193 3.80474C8.98695 3.92976 9.15652 4 9.33333 4C9.51014 4 9.67971 3.92976 9.80474 3.80474C9.92976 3.67971 10 3.51014 10 3.33333V2.66667H11.3333C11.5101 2.66667 11.6797 2.59643 11.8047 2.4714C11.9298 2.34638 12 2.17681 12 2C12 1.82319 11.9298 1.65362 11.8047 1.5286C11.6797 1.40357 11.5101 1.33333 11.3333 1.33333H10V0.666667ZM0.666667 5.33333C0.489856 5.33333 0.320286 5.40357 0.195262 5.5286C0.0702379 5.65362 0 5.82319 0 6C0 6.17681 0.0702379 6.34638 0.195262 6.4714C0.320286 6.59643 0.489856 6.66667 0.666667 6.66667H2V7.33333C2 7.51014 2.07024 7.67971 2.19526 7.80474C2.32029 7.92976 2.48986 8 2.66667 8C2.84348 8 3.01305 7.92976 3.13807 7.80474C3.2631 7.67971 3.33333 7.51014 3.33333 7.33333V6.66667H11.3333C11.5101 6.66667 11.6797 6.59643 11.8047 6.4714C11.9298 6.34638 12 6.17681 12 6C12 5.82319 11.9298 5.65362 11.8047 5.5286C11.6797 5.40357 11.5101 5.33333 11.3333 5.33333H3.33333V4.66667C3.33333 4.48986 3.2631 4.32029 3.13807 4.19526C3.01305 4.07024 2.84348 4 2.66667 4C2.48986 4 2.32029 4.07024 2.19526 4.19526C2.07024 4.32029 2 4.48986 2 4.66667V5.33333H0.666667ZM0 10C0 9.82319 0.0702379 9.65362 0.195262 9.52859C0.320286 9.40357 0.489856 9.33333 0.666667 9.33333H8.66667V8.66667C8.66667 8.48986 8.7369 8.32029 8.86193 8.19526C8.98695 8.07024 9.15652 8 9.33333 8C9.51014 8 9.67971 8.07024 9.80474 8.19526C9.92976 8.32029 10 8.48986 10 8.66667V9.33333H11.3333C11.5101 9.33333 11.6797 9.40357 11.8047 9.52859C11.9298 9.65362 12 9.82319 12 10C12 10.1768 11.9298 10.3464 11.8047 10.4714C11.6797 10.5964 11.5101 10.6667 11.3333 10.6667H10V11.3333C10 11.5101 9.92976 11.6797 9.80474 11.8047C9.67971 11.9298 9.51014 12 9.33333 12C9.15652 12 8.98695 11.9298 8.86193 11.8047C8.7369 11.6797 8.66667 11.5101 8.66667 11.3333V10.6667H0.666667C0.489856 10.6667 0.320286 10.5964 0.195262 10.4714C0.0702379 10.3464 0 10.1768 0 10Z" fill="#D8FFEE"/>
</svg>
                <span>Фильтры</span>
              </div>
              <div className={cls.searchInput}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.33332 0.300049C3.0012 0.300049 0.299988 3.00126 0.299988 6.33338C0.299988 9.6655 3.0012 12.3667 6.33332 12.3667C7.74717 12.3667 9.04743 11.8804 10.076 11.0659L12.505 13.495C12.7784 13.7684 13.2216 13.7684 13.495 13.495C13.7684 13.2216 13.7684 12.7784 13.495 12.505L11.0659 10.0759C11.8804 9.04743 12.3667 7.7472 12.3667 6.33338C12.3667 3.00126 9.66544 0.300049 6.33332 0.300049ZM1.69999 6.33338C1.69999 3.77446 3.7744 1.70005 6.33332 1.70005C8.89224 1.70005 10.9667 3.77446 10.9667 6.33338C10.9667 8.8923 8.89224 10.9667 6.33332 10.9667C3.7744 10.9667 1.69999 8.8923 1.69999 6.33338Z" fill="#D8FFEE" />
                </svg>
                <input
                  placeholder='Поиск'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            {filteredData.length ? (
              <div className={cls.list}>
                {filteredData.map(game => (
                  <ServiceGameCard
                    key={game.id}
                    game={game}
                  />
                ))}
              </div>

            ) : (
              <EmptyCard
                title={<>По Вашему запросу <span>{searchQuery.length > 10 ? searchQuery.substring(0, 10) + "..." : searchQuery}</span> ничего не было найдено.</>}
                disc={'Попробуйте сбросить фильтер.'}
              >
                <Button
                  type="reset"
                  title='Сбросить фильтр'
                  onClick={() => setSearchQuery('')}
                >
                  Сбросить фильтр
                </Button>
              </EmptyCard>
            )}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { ServiceGamesSection };
