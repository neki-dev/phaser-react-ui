import { useMemo } from 'react';
import { useGame } from './use-game';
import type { HTMLTextureElement } from '../types/texture';

/**
 * Get texture source image.
 *
 * @param key - Texture key
 */
export function useTexture(key: string): string | null {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(key);
    const image = texture.getSourceImage() as HTMLTextureElement;

    return image.originBlob
      ? URL.createObjectURL(image.originBlob)
      : null;
  }, [key]);
}
