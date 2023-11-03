import React, { useLayoutEffect } from 'react';
import { useRelativeScale } from '../hooks';
import { RelativeScaleProps } from '../types/relative-scale';

type Props = RelativeScaleProps & {
  children: React.ReactNode
};

export const RelativeScale: React.FC<Props> = ({ children, ...props }) => {
  const ref = useRelativeScale<HTMLDivElement>(props);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.position = 'absolute';
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};
