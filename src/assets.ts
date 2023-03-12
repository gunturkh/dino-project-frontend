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
        Teapot:
          "https://raw.githubusercontent.com/jnsmalm/pixi3d-examples/master/assets/teapot/teapot.gltf",
        Deer: "image/3d/deer.gltf",
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
