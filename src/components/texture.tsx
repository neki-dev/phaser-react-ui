/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { useTexture } from '../hooks';

type Props = {
  name: string
};

export const Texture: React.FC<Props> = ({ name }) => {
  const imageSrc = useTexture(name);

  return <img src={imageSrc} role="texture" alt={name} />;
};
