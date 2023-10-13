import React, { useRef, useLayoutEffect } from 'react';
import { useTexture } from '../hooks';

type Props = {
  name: string
};

export const Texture: React.FC<Props> = ({ name }) => {
  const image = useTexture(name);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ref.current.appendChild(image);
  }, []);

  return <div ref={ref} data-texture-container />;
};
