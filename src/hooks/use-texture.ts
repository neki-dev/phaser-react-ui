import { useMemo } from 'react';
import { useGame } from './use-game';

export function useTexture(name: string) {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(name);

    return texture.getSourceImage() as HTMLImageElement;
  }, [name]);
}
