import { Container, Sprite, TextStyle, Text, Graphics, Assets } from "pixi.js";
import { Spine } from "pixi-spine";
import { IScene, Manager } from "../Manager";
import { SignupScene } from "./SignupScene";
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
      Manager.changeScene(new SignupScene());
    });

    this.addChild(button.view);

    // EXPERIMENT CONTAINER
    const experimentContainer = new Container();
    this.addChild(experimentContainer);

    // make a box
    const box = new Graphics();

    box.lineStyle(4, 0xff3300, 1);
    // create rectangle with size 300x600, centered at (0, 0)
    box.drawRect(-100, -100, 350, 400);
    // box.drawRect(-200, -300, 400, 500); // rectangle with size 200x200, centered at (0, 0)
    box.endFill();
    experimentContainer.addChild(box);

    // center the container within the application
    experimentContainer.position.set(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    const style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 28,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: "round",
    });

    const LoginText = new Text("Login", style);
    LoginText.zIndex = 2;
    LoginText.x = -75;
    LoginText.y = -85;
    // @ts-ignore
    LoginText.interactive = true;
    // @ts-ignore
    LoginText.on("pointerdown", () => {
      console.log("LoginText clicked");
    });

    const RegisterText = new Text("Register", style);
    RegisterText.zIndex = 2;
    RegisterText.x = 30;
    RegisterText.y = -85;
    // @ts-ignore
    RegisterText.interactive = true;
    // @ts-ignore
    RegisterText.on("pointerdown", () => {
      console.log("RegisterText clicked");
    });

    experimentContainer.addChild(LoginText);
    experimentContainer.addChild(RegisterText);

    const spineboy = Assets.cache.get("spineboy/spineboy.json").spineData;
    const SpineboyAnimation = new Spine(spineboy);

    // set the position
    SpineboyAnimation.x = Manager.width / 5;
    SpineboyAnimation.y = Manager.height;

    SpineboyAnimation.scale.set(1);

    // set up the mixes!
    SpineboyAnimation.stateData.setMix("walk", "jump", 0.2);
    SpineboyAnimation.stateData.setMix("jump", "walk", 0.4);

    // play animation
    SpineboyAnimation.state.setAnimation(0, "walk", true);
    // app.stage.addChild(SpineboyAnimation);
    // this.addChild(SpineboyAnimation);

    // this.clampyVelocity = 5;
  }
  // @ts-ignore
  update(framesPassed: number): void {
    // throw new Error("Method not implemented.");
    // console.log("framesPassed", framesPassed);
  }
}
