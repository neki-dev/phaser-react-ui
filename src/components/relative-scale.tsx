import React, { useEffect } from 'react';
import { useRelativeScale } from '../hooks';
import { RelativeScaleProps } from '../types/relative-scale';

type Props = RelativeScaleProps & {
  children: React.ReactNode
};

export const RelativeScale: React.FC<Props> = ({
  target, min, max, round, children,
}) => {
  const ref = useRelativeScale<HTMLDivElement>({
    target, min, max, round,
  });

  useEffect(() => {
    ref.current.style.position = 'absolute';
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
