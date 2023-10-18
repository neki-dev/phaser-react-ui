import { useMemo } from 'react';
import { useGame } from './use-game';

/**
 * Get texture source image.
 *
 * @param key - Texture key
 */
export function useTexture(key: string) {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(key);

    return texture.getSourceImage() as HTMLImageElement;
  }, [key]);
}
