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
import { LoginScene } from "./LoginScene";
import { Button } from "@pixi/ui";

export class HomeScene extends Container implements IScene {
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
    const text = new Text("Logout", { fontSize: 32 });

    text.anchor.set(0.5);
    text.x = buttonView.width / 2;
    text.y = buttonView.height / 2;

    buttonView.addChild(text);

    // Component usage !!!
    const button = new Button(buttonView);

    button.onPress.connect(() => {
      console.log("Button pressed!");
      Manager.changeScene(new LoginScene());
    });

    this.addChild(button.view);

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

    const graphicBtnView = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg = Sprite.from("Clampy");

    graphicBtnView.addChild(graphicBtnImg);

    // Component usage !!!
    const GraphicBtn = new Button(graphicBtnView);

    graphicBtnImg.anchor.set(0.5);
    graphicBtnImg.scale.set(0.1);
    graphicBtnImg.x = GraphicBtn.view.width / 2 - graphicBtnImg.width / 2 + 10;
    graphicBtnImg.y = GraphicBtn.view.height / 2 - graphicBtnImg.height / 2 + 8;

    GraphicBtn.view.scale.set(0.5);
    GraphicBtn.view.interactive = true;

    GraphicBtn.onPress.connect(() => {
      console.log("GraphicBtn1 pressed!");
    });

    // place at the bottom of the screen
    GraphicBtn.view.position.set(
      Manager.width / 2 - boxWidth / 2 + 50 - GraphicBtn.view.width / 2,
      Manager.height - GraphicBtn.view.height - 80
    );

    console.log("experimentContainer w", experimentContainer.width);
    console.log("manager width", Manager.width);
    // from the left side of the screen to box
    console.log("from left to 0 box", Manager.width / 2 / 2);
    console.log("manager / 2", Manager.width / 2);

    box.addChild(GraphicBtn.view);

    const graphicBtnView1 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg1 = Sprite.from("Clampy");

    graphicBtnView1.addChild(graphicBtnImg1);
    const BtnClone1 = new Button(graphicBtnView1);

    graphicBtnImg1.anchor.set(0.5);
    graphicBtnImg1.scale.set(0.1);
    graphicBtnImg1.x = BtnClone1.view.width / 2 - graphicBtnImg1.width / 2 + 10;
    graphicBtnImg1.y =
      BtnClone1.view.height / 2 - graphicBtnImg1.height / 2 + 8;

    BtnClone1.view.scale.set(0.5);
    BtnClone1.view.interactive = true;

    BtnClone1.onPress.connect(() => {
      console.log("GraphicBtn2 pressed!");
    });

    BtnClone1.view.position.set(
      Manager.width / 2 - boxWidth / 2 + 100 - BtnClone1.view.width / 2,
      Manager.height - BtnClone1.view.height - 80
    );
    box.addChild(BtnClone1.view);

    const graphicBtnView2 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg2 = Sprite.from("Clampy");
    graphicBtnView2.addChild(graphicBtnImg2);
    const BtnClone2 = new Button(graphicBtnView2);
    graphicBtnImg2.anchor.set(0.5);
    graphicBtnImg2.scale.set(0.1);
    graphicBtnImg2.x = BtnClone2.view.width / 2 - graphicBtnImg2.width / 2 + 10;
    graphicBtnImg2.y =
      BtnClone2.view.height / 2 - graphicBtnImg2.height / 2 + 8;
    BtnClone2.view.scale.set(0.5);
    BtnClone2.view.interactive = true;
    BtnClone2.onPress.connect(() => {
      console.log("GraphicBtn3 pressed!");
    });
    BtnClone2.view.position.set(
      Manager.width / 2 + boxWidth / 2 - 100 - GraphicBtn.view.width / 2,
      Manager.height - BtnClone2.view.height - 80
    );
    box.addChild(BtnClone2.view);

    const graphicBtnView3 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg3 = Sprite.from("Clampy");
    graphicBtnView3.addChild(graphicBtnImg3);
    const BtnClone3 = new Button(graphicBtnView3);
    graphicBtnImg3.anchor.set(0.5);
    graphicBtnImg3.scale.set(0.1);
    graphicBtnImg3.x = BtnClone3.view.width / 2 - graphicBtnImg3.width / 2 + 10;
    graphicBtnImg3.y =
      BtnClone3.view.height / 2 - graphicBtnImg3.height / 2 + 8;
    BtnClone3.view.scale.set(0.5);
    BtnClone3.view.interactive = true;
    BtnClone3.onPress.connect(() => {
      console.log("GraphicBtn4 pressed!");
    });
    BtnClone3.view.position.set(
      Manager.width / 2 + boxWidth / 2 - 50 - BtnClone3.view.width / 2,
      Manager.height - BtnClone3.view.height - 80
    );
    box.addChild(BtnClone3.view);

    // New line
    const graphicBtnView4 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg4 = Sprite.from("Clampy");
    graphicBtnView4.addChild(graphicBtnImg4);
    const BtnClone4 = new Button(graphicBtnView4);
    graphicBtnImg4.anchor.set(0.5);
    graphicBtnImg4.scale.set(0.1);
    graphicBtnImg4.x = BtnClone4.view.width / 2 - graphicBtnImg4.width / 2 + 10;
    graphicBtnImg4.y =
      BtnClone4.view.height / 2 - graphicBtnImg4.height / 2 + 8;
    BtnClone4.view.scale.set(0.5);
    BtnClone4.view.interactive = true;
    BtnClone4.onPress.connect(() => {
      console.log("GraphicBtn pressed!");
    });
    BtnClone4.view.position.set(
      Manager.width / 2 - boxWidth / 2 + 50 - BtnClone4.view.width / 2,
      Manager.height - BtnClone4.view.height - 20
    );
    box.addChild(BtnClone4.view);

    const graphicBtnView5 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg5 = Sprite.from("Clampy");
    graphicBtnView5.addChild(graphicBtnImg5);
    const BtnClone5 = new Button(graphicBtnView5);
    graphicBtnImg5.anchor.set(0.5);
    graphicBtnImg5.scale.set(0.1);
    graphicBtnImg5.x = BtnClone5.view.width / 2 - graphicBtnImg5.width / 2 + 10;
    graphicBtnImg5.y =
      BtnClone5.view.height / 2 - graphicBtnImg5.height / 2 + 8;
    BtnClone5.view.scale.set(0.5);
    BtnClone5.view.interactive = true;
    BtnClone5.onPress.connect(() => {
      console.log("GraphicBtn5 pressed!");
    });
    BtnClone5.view.position.set(
      Manager.width / 2 - boxWidth / 2 + 100 - BtnClone5.view.width / 2,
      Manager.height - BtnClone5.view.height - 20
    );
    box.addChild(BtnClone5.view);

    const graphicBtnView6 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg6 = Sprite.from("Clampy");
    graphicBtnView6.addChild(graphicBtnImg6);
    const BtnClone6 = new Button(graphicBtnView6);
    graphicBtnImg6.anchor.set(0.5);
    graphicBtnImg6.scale.set(0.1);
    graphicBtnImg6.x = BtnClone6.view.width / 2 - graphicBtnImg6.width / 2 + 10;
    graphicBtnImg6.y =
      BtnClone6.view.height / 2 - graphicBtnImg6.height / 2 + 8;
    BtnClone6.view.scale.set(1);
    BtnClone6.view.interactive = true;
    BtnClone6.onPress.connect(() => {
      console.log("GraphicBtn6 pressed!");
    });
    BtnClone6.view.position.set(
      Manager.width / 2 - BtnClone6.view.width / 2,
      Manager.height - BtnClone6.view.height - 20
    );
    box.addChild(BtnClone6.view);

    const graphicBtnView7 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg7 = Sprite.from("Clampy");
    graphicBtnView7.addChild(graphicBtnImg7);
    const BtnClone7 = new Button(graphicBtnView7);
    graphicBtnImg7.anchor.set(0.5);
    graphicBtnImg7.scale.set(0.1);
    graphicBtnImg7.x = BtnClone7.view.width / 2 - graphicBtnImg7.width / 2 + 10;
    graphicBtnImg7.y =
      BtnClone7.view.height / 2 - graphicBtnImg7.height / 2 + 8;
    BtnClone7.view.scale.set(0.5);
    BtnClone7.view.interactive = true;
    BtnClone7.onPress.connect(() => {
      console.log("GraphicBtn7 pressed!");
    });
    BtnClone7.view.position.set(
      Manager.width / 2 + boxWidth / 2 - 100 - BtnClone7.view.width / 2,
      Manager.height - BtnClone7.view.height - 20
    );
    box.addChild(BtnClone7.view);

    const graphicBtnView8 = new Graphics()
      .beginFill(0xffffff)
      // circle
      .drawRoundedRect(0, 0, 75, 75, 75);
    const graphicBtnImg8 = Sprite.from("Clampy");
    graphicBtnView8.addChild(graphicBtnImg8);
    const BtnClone8 = new Button(graphicBtnView8);
    graphicBtnImg8.anchor.set(0.5);
    graphicBtnImg8.scale.set(0.1);
    graphicBtnImg8.x = BtnClone8.view.width / 2 - graphicBtnImg8.width / 2 + 10;
    graphicBtnImg8.y =
      BtnClone8.view.height / 2 - graphicBtnImg8.height / 2 + 8;
    BtnClone8.view.scale.set(0.5);
    BtnClone8.view.interactive = true;
    BtnClone8.onPress.connect(() => {
      console.log("GraphicBtn8 pressed!");
    });
    BtnClone8.view.position.set(
      Manager.width / 2 + boxWidth / 2 - 50 - BtnClone8.view.width / 2,
      Manager.height - BtnClone8.view.height - 20
    );
    box.addChild(BtnClone8.view);

    this.addChild(experimentContainer);
  }
  // @ts-ignore
  update(framesPassed: number): void {
    // throw new Error("Method not implemented.");
    // console.log("framesPassed", framesPassed);
  }
}
