"use client";
import { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cls from './index.module.scss';

interface PingMeterProps {
  minPing: number;
  maxPing: number;
}

const PingMeter: FC<PingMeterProps> = ({ minPing, maxPing }) => {
  const [status, setStatus] = useState<'idle' | 'measuring' | 'complete'>('idle');
  const [pingValue, setPingValue] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && status === 'idle') {
          setStatus('measuring');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [status]);

  useEffect(() => {
    if (status === 'measuring') {
      const measurePing = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const simulatedPing = Math.floor(Math.random() * (maxPing - minPing + 1)) + minPing;
        setPingValue(simulatedPing);
        setStatus('complete');
      };

      measurePing();
    }
  }, [status, minPing, maxPing]);

  return (
    <div className={cls.pingMeter} ref={ref}>
      {status === 'measuring' ? (
        <div className={cls.measuringContainer}>
          <motion.div
            className={cls.spinner}
            animate={{
              rotate: 360,
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />
          <div className={cls.awaiting}>Измеряем...</div>
        </div>
      ) : status === 'complete' ? (
        <div className={cls.valueContainer}>
          <span className={cls.unit}>Ваш пинг на нашем сервере</span>
          <p className={cls.value}>{pingValue} ms</p>
        </div>
      ) : null}
    </div>
  );
};

export { PingMeter };
