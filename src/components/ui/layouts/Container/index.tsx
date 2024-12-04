import { FC, ReactNode } from 'react';
import cls from './index.module.scss';

interface ContainerProps {
  children: ReactNode;
  noM?: boolean;
}

const Container: FC<ContainerProps> = ({ children, noM }) => {
  return (
    <div 
      className={cls.container}
      data-no-margin={noM}
    >
      {children}
    </div>
  );
};

export { Container };