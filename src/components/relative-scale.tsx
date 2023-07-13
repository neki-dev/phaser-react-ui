import React, { useEffect } from 'react';
import { useRelativeScale } from '../hooks';

type Props = {
  target: number
  min?: number
  max?: number
  children: React.ReactNode
};

export const RelativeScale: React.FC<Props> = ({
  target, min, max, children,
}) => {
  const ref = useRelativeScale<HTMLDivElement>({ target, min, max });

  useEffect(() => {
    ref.current.style.position = 'absolute';
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
