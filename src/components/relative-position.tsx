import React, { useLayoutEffect } from 'react';
import { useRelativePosition } from '../hooks';
import { RelativePositionProps } from '../types/relative-position';

type Props = RelativePositionProps & {
  children: React.ReactNode
};

export const RelativePosition: React.FC<Props> = ({ children, ...props }) => {
  const ref = useRelativePosition<HTMLDivElement>(props);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.position = 'absolute';
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};
