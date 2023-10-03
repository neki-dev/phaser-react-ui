import { useGame } from './use-game';

export function useMobilePlatform() {
  const game = useGame();

  return !game.device.os.desktop;
}
