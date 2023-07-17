import React, { useEffect } from 'react';
import { useRelativePosition } from '../hooks';
import { RelativePositionProps } from '../types/relative-position';

type Props = RelativePositionProps & {
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
