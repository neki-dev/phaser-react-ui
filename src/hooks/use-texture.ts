import { useMemo } from 'react';
import { useGame } from './use-game';
import { HTMLTextureElement } from '../types/texture';

/**
 * Get texture source image.
 *
 * @param key - Texture key
 */
export function useTexture(key: string) {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(key);
    const image = texture.getSourceImage() as HTMLTextureElement;

    return URL.createObjectURL(image.originBlob);
  }, [key]);
}
