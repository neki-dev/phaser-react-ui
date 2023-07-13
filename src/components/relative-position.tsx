import React, { useEffect } from 'react';
import { useRelativePosition } from '../hooks';

type Props = {
  x: number
  y: number
  children: React.ReactNode
};

export const RelativePosition: React.FC<Props> = ({
  x, y, children,
}) => {
  const ref = useRelativePosition<HTMLDivElement>({ x, y });

  useEffect(() => {
    ref.current.style.position = 'absolute';
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
