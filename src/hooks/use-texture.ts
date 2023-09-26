import { useMemo } from 'react';
import { useGame } from './use-game';
import { TextureProps } from '../types/texture';

export function useTexture({ name, frame }: TextureProps) {
  const game = useGame();

  return useMemo(() => {
    const texture = game.textures.get(name);

    if (frame === undefined) {
      return texture.getSourceImage() as HTMLImageElement;
    }

    // @ts-ignore
    return texture.frames[frame].source.image as HTMLImageElement;
  }, [name, frame]);
}
