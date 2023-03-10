import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "DinoAssets",
      assets: {
        Spineboy: "spineboy/spineboy.json",
        Dragon: "dragon/dragon.json",
        ForestBg: "image/forest_background.jpg",
        Clampy: "clampy.png",
      },
    },
    // {
    //     name : "another bundle",
    //     assets:
    //     {
    //         "whistle" : "./whistle.mp3",
    //     }
    // },
  ],
};
