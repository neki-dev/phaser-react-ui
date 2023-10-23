import React, { useRef, useLayoutEffect } from 'react';
import { useTexture } from '../hooks';

type Props = {
  name: string
  clone?: boolean
};

export const Texture: React.FC<Props> = ({ name, clone }) => {
  const image = useTexture(name);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = clone ? image.cloneNode() : image;

    ref.current.appendChild(element);
  }, []);

  return <div ref={ref} data-texture-container />;
};
