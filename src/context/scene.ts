import type Phaser from 'phaser';
import { createContext } from 'react';

export const SceneContext = createContext<Phaser.Scene | null>(null);
export const SceneProvider = SceneContext.Provider;
