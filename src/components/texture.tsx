import React, { useRef, useLayoutEffect } from 'react';
import { useTexture } from '../hooks';
import { TextureProps } from '../types/texture';

type Props = TextureProps;

export const Texture: React.FC<Props> = (props) => {
  const image = useTexture(props);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ref.current.appendChild(image);
  }, []);

  return <div ref={ref} data-texture-container />;
};
