'use client';
import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { stagger } from '@/utils/animations';

import { slides } from '@/assets/images/pic/your-control';
import chevron_right from '@/assets/images/ico/base/chevron_right.svg';
import chevron_left from '@/assets/images/ico/base/chevron_left.svg';
import { Container } from '@/components/ui/layouts/Container';
import { Head } from '@/components/widgets/Head';
import { DashedLine } from '@/components/ui/lines/DashedLine';

import cls from './index.module.scss';


const YourControlSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleSlides, setVisibleSlides] = useState<number>(3);
  const totalItems = slides?.length || 0;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleSlides(1.5); 
      } else if (window.innerWidth <= 1024) {
        setVisibleSlides(2.5); 
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, totalItems - Math.floor(visibleSlides));
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const isLastSlide = currentIndex >= Math.max(0, totalItems - Math.floor(visibleSlides));

  return (
    <motion.section 
      className={cls.yourControlSection}
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
                Удобное управление вашими
                <br /> серверами — YourControl.
              </>
            }
            disc="Мы создали невероятно удобную панель для управления и настройки ваших игровых серверов."
          />
          <DashedLine
            color={'#fff'}
            opacity={0.1}
            dashLength={14}
            gapLength={14}
            strokeWidth={1}
          />
          <div className={cls.wrapperContainer}>
            <button
              title='назад'
              type="button"
              className={cls.prev}
              disabled={currentIndex === 0}
              onClick={handlePrev}
            >
              <Image
                src={chevron_right.src}
                width={32}
                height={32}
                alt="arrow right"
              />
            </button>
            <div className={cls.overflow}>
              <div
                className={cls.wrapper}
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                }}
              >
                {slides &&
                  slides.map((slide, idx) => (
                    <div 
                      key={idx} 
                      className={cls.slide}
                      style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                    >
                      <Image
                        src={slide.src}
                        width={411}
                        height={215}
                        alt="slide"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <button
              type="button"
              title="вперед"
              className={cls.next}
              disabled={isLastSlide}
              onClick={handleNext}
            >
              <Image
                src={chevron_left.src}
                width={32}
                height={32}
                alt="arrow right"
              />
            </button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { YourControlSection };
