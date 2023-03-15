import {
  Container,
  Sprite,
  Text,
  Graphics,

  // TextStyle, Assets
} from "pixi.js";
// import {
//   Model,
//   LightingEnvironment,
//   Light,
//   Mesh3D,
//   ShadowCastingLight,
//   ShadowQuality,
//   CameraOrbitControl,
//   Color
// } from "pixi3d";
// import { Spine } from "pixi-spine";
import { IScene, Manager } from "../Manager";
// import { LoginScene } from "./LoginScene";
import { Button } from "@pixi/ui";

export class ProfileScene extends Container implements IScene {
  private background: Sprite;
  // private username: string;
  // private password: string;
  constructor() {
    super();

    // Inside assets.ts we have a line that says `"Clampy from assets.ts!": "./clampy.png",`
    this.background = Sprite.from("ForestBg");
    this.background.width = Manager.width;
    this.background.height = Manager.height;

    // TODO: need to add this to something that use background
    this.background.anchor.set(0.5); //center of image
    //is mapped to
    this.background.position.set(Manager.width / 2, Manager.height / 2); //center of screen

    this.background.scale.set(
      // this.background.texture.width / window.innerWidth,
      1,
      0.5
    );

    this.addChild(this.background);

    const buttonView = new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(0, 0, 100, 50, 15);
    const text = new Text("Back", { fontSize: 32 });

    text.anchor.set(0.5);
    text.x = buttonView.width / 2;
    text.y = buttonView.height / 2;

    buttonView.addChild(text);

    // Component usage !!!
    const button = new Button(buttonView);

    button.onPress.connect(() => {
      console.log("Button pressed!");
    });

    this.addChild(button.view);

    const buttonList = ['Referral Link', 'Transaction Password', 'Withdrawal Verification', 'Mobile', 'Email', 'Follow Us', 'Customer Service', 'My Social Media Account', 'Game Guide']

    //profile

    buttonList.forEach((buttonItem, buttonIndex) => {
      const buttonProfile = new Graphics()
        .beginFill(0xffffff)
        .drawRoundedRect(0, 0, 300, 40, 10);
      const textButtonProfile = new Text(buttonItem, { fontSize: 16 });

      textButtonProfile.anchor.set(0.5);
      textButtonProfile.x = buttonProfile.width / 2;
      textButtonProfile.y = buttonProfile.height / 2;

      buttonProfile.addChild(textButtonProfile);

      // Component usage !!!
      const ButtonProfile = new Button(buttonProfile);

      ButtonProfile.onPress.connect(() => {
        // Manager.changeScene(new LoginScene());
        window.alert('referral')
      });

      ButtonProfile.view.position.set(
        Manager.width / 2 - 150,
        150 + ButtonProfile.view.height + (buttonIndex * 50)
      )

      this.addChild(ButtonProfile.view);
    })
    //

    // EXPERIMENT CONTAINER
    const experimentContainer = new Container();

    const boxWidth = 340;

    // make a box
    const box = new Graphics();
    box.lineStyle(0.0001, 0x0000, 0);
    // box.lineStyle(1, 0x0000, 1); // use for debugging to show container border
    // create rectangle with size 300x600, centered at the half of the screen
    box.drawRect(Manager.width / 2 - boxWidth / 2, 0, boxWidth, Manager.height);

    box.endFill();
    experimentContainer.addChild(box);

    experimentContainer.height = Manager.height;

    const profileView = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 100, 100, 100);
    const profileImg = Sprite.from("Clampy");

    profileView.addChild(profileImg);

    // Component usage !!!
    const ProfileView = new Button(profileView);

    profileImg.anchor.set(0.5);
    profileImg.scale.set(0.1);
    profileImg.x = ProfileView.view.width / 2 - profileImg.width / 2 + 10;
    profileImg.y = ProfileView.view.height / 2 - profileImg.height / 2 + 8;

    ProfileView.view.scale.set(0.5);
    ProfileView.view.interactive = true;

    ProfileView.onPress.connect(() => {
      console.log("GraphicBtn1 pressed!");
    });

    // place at the bottom of the screen
    ProfileView.view.position.set(
      Manager.width / 2 - ProfileView.view.width / 2,
      80
    );

    console.log("experimentContainer w", experimentContainer.width);
    console.log("manager width", Manager.width);
    // from the left side of the screen to box
    console.log("from left to 0 box", Manager.width / 2 / 2);
    console.log("manager / 2", Manager.width / 2);

    box.addChild(ProfileView.view);
    this.addChild(experimentContainer);
  }
  // @ts-ignore
  update(framesPassed: number): void {
    // throw new Error("Method not implemented.");
    // console.log("framesPassed", framesPassed);
  }
}
