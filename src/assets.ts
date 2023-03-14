import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
  bundles: [
    {
      name: "DinoAssets",
      assets: [
        {
          name: "Spineboy",
          srcs: "spineboy/spineboy.json",
        },
        {
          name: "Dragon",
          srcs: "dragon/dragon.json",
        },
        {
          name: "ForestBg",
          srcs: "image/forest_background.jpg",
        },
        {
          name: "Clampy",
          srcs: "clampy.png",
        },
        {
          name: "Teapot",
          srcs: "https://raw.githubusercontent.com/jnsmalm/pixi3d-examples/master/assets/teapot/teapot.gltf",
        },
        {
          name: "Deer",
          srcs: "3d/Deer.gltf",
        },
        {
          name: "diffuse.cubemap",
          srcs: "chromatic/diffuse.cubemap",
        },
        {
          name: "specular.cubemap",
          srcs: "chromatic/specular.cubemap",
        },
      ],
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
