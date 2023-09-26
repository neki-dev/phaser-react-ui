import { useMemo } from 'react';
import { useGame } from './use-game';
import { TextureProps } from '../types/texture';

export function useTexture({ key, frame }: TextureProps) {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(key);

    if (frame === undefined) {
      return texture.getSourceImage() as HTMLImageElement;
    }

    // @ts-ignore
    return texture.frames[frame].source.image as HTMLImageElement;
  }, [key, frame]);
}
