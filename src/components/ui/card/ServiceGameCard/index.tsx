import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { generateDynamicRoute } from '@/configs/routes.config';

import { Game } from '@/types/interfaces';

import cls from './index.module.scss';

interface ServiceGameCardProps {
  game: Game;
}

const ServiceGameCard: FC<ServiceGameCardProps> = ({ game }) => {
  return (
    <Link href={generateDynamicRoute.gameHost(game.id)} className={cls.serviceGameCard}>
      <div className={cls.imageWrapper}>
        <Image
          src={game.pic.src}
          width={game.pic.width}
          height={game.pic.height}
          alt={game.name}
        />
      </div>
      <span>{game.name}</span>
    </Link>
  );
};

export { ServiceGameCard };
