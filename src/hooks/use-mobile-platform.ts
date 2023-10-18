import { useGame } from './use-game';

/**
 * Check if platform is mobile.
 */
export function useMobilePlatform() {
  const game = useGame();

  return !game.device.os.desktop;
}
