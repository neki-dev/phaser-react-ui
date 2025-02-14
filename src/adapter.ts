import Phaser from 'phaser';
import type { HTMLTextureElement } from './types/texture';

const defaultFunction = Phaser.Loader.File.createObjectURL;

Phaser.Loader.File.createObjectURL = function createObjectURL(
  image: HTMLTextureElement,
  blob: Blob,
  defaultType: string,
) {
  // eslint-disable-next-line no-param-reassign
  image.originBlob = blob;
  defaultFunction.call(this, image, blob, defaultType);
};
