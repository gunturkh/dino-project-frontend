import { Container, Sprite, Text, Graphics, Assets } from "pixi.js";
import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js";
import { IScene, Manager } from "../Manager";
// import { Button } from "@pixi/ui";
import { HomeScene } from "./HomeScene";
import { Input } from "@pixi/ui";
import { buttonLoginStyle, forgotPasswordstyle, style } from "../style";
import { RegisterScene } from "./RegisterScene";

export class LoginScene extends Container implements IScene {
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

    // EXPERIMENT CONTAINER
    const experimentContainer = new Container();
    this.addChild(experimentContainer);

    const spineboy = Assets.cache.get("spineboy/spineboy.json").spineData;
    const SpineboyAnimation = new Spine(spineboy);

    // set the position
    SpineboyAnimation.x = -50;
    SpineboyAnimation.y = 400;

    SpineboyAnimation.scale.set(0.3);

    // set up the mixes!
    SpineboyAnimation.stateData.setMix("walk", "jump", 0.2);
    SpineboyAnimation.stateData.setMix("jump", "walk", 0.4);

    // play animation
    SpineboyAnimation.state.setAnimation(0, "walk", true);
    spineboy.zIndex = 0;

    const dragonAsset = PIXI.Assets.cache.get("dragon/dragon.json").spineData;
    const dragon = new Spine(dragonAsset);
    console.log("onAssetsLoaded ~ dragon:", dragon);
    dragon.skeleton.setToSetupPose();
    dragon.update(0);
    dragon.autoUpdate = true;

    // create a container for the spine animation and add the animation to it
    const dragonCage = new PIXI.Container();
    dragonCage.addChild(dragon);

    // measure the spine animation and position it inside its container to align it to the origin
    const localRect = dragon.getLocalBounds();
    dragon.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    const scale = 0.15;
    dragonCage.scale.set(scale);
    dragonCage.position.set(120, 310);
    dragon.state.setAnimation(0, "flying", true);

    experimentContainer.addChild(SpineboyAnimation);
    experimentContainer.addChild(dragonCage);

    // make a box
    const box = new Graphics();
    const boxWidth = 350;
    const boxHeight = 500;

    box.lineStyle(4, 0xffbb00, 1);
    // create rectangle with size 300x600, centered at (0, 0)
    box.drawRect(-100, -100, boxWidth, boxHeight);
    // box.drawRect(Manager.width / 2 - boxWidth / 2, 0, boxWidth, 500);
    // box.drawRect(-200, -300, 400, 500); // rectangle with size 200x200, centered at (0, 0)
    box.endFill();
    experimentContainer.addChild(box);

    // center the container within the application
    experimentContainer.position.set(
      window.innerWidth / 2 - boxWidth / 2 + 100,
      window.innerHeight / 2 - 150
    );

    const buttonView = new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(20, 200, 100, 50, 15);

    const buttonLoginText = new Text("Login", buttonLoginStyle);
    buttonLoginText.anchor.set(0.5, 0.5);
    buttonLoginText.zIndex = 2;
    buttonLoginText.x = buttonView.width / 2 + 20;
    buttonLoginText.y = buttonView.height / 2 + 320;
    // @ts-ignore
    buttonLoginText.interactive = true;
    // @ts-ignore
    buttonLoginText.on("pointerdown", () => {
      console.log("LoginText clicked");
      Manager.changeScene(new HomeScene());
    });

    // text.anchor.set(0.5, 0.5);
    // text.x = buttonView.width / 2 + 20;
    // text.y = buttonView.height / 2 + 200;

    buttonView.addChild(buttonLoginText);

    // Component usage !!!
    // const button = new Button(buttonView);

    // button.onPress.connect(() => {
    //   console.log("Button pressed!");
    //   Manager.changeScene(new HomeScene());
    // });

    experimentContainer.addChild(buttonLoginText);

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
      Manager.changeScene(new RegisterScene());
    });

    const ForgotPasswordText = new Text(
      "Forgot password?",
      forgotPasswordstyle
    );
    ForgotPasswordText.zIndex = 2;
    ForgotPasswordText.x = 80;
    ForgotPasswordText.y = 150;
    // @ts-ignore
    ForgotPasswordText.interactive = true;
    // @ts-ignore
    ForgotPasswordText.on("pointerdown", () => {
      console.log("Forgot password clicked");
    });

    let nameInput: any, passwordInput: any;

    const nameInputComponent = new Input({
      bg: new PIXI.Graphics()
        .beginFill(0xdcb000)
        .drawRoundedRect(0, 0, 280, 55, 11 + 5)
        .beginFill(0xf1d583)
        .drawRoundedRect(5, 5, 280 - 5 * 2, 55 - 5 * 2, 11),
      textStyle: {
        // ...defaultTextStyle,
        fill: 0x000000,
        fontSize: 22,
      },
      padding: [11, 11],
      maxLength: 20,
      align: "center",
      placeholder: "Enter your name",
      value: nameInput,
    });
    nameInputComponent.position.set(-60, 10);
    nameInputComponent.zIndex = 2;
    nameInputComponent.onChange.connect((e) => {
      console.log("onAssetsLoaded ~ nameInputComponent onChange:", e);
    });

    nameInputComponent.onChange.connect((e) => {
      console.log("onAssetsLoaded ~ nameInputComponent onChange:", e);
    });

    const passwordInputComponent = new Input({
      bg: new PIXI.Graphics()
        .beginFill(0xdcb000)
        .drawRoundedRect(0, 0, 280, 55, 11 + 5)
        .beginFill(0xf1d583)
        .drawRoundedRect(5, 5, 280 - 5 * 2, 55 - 5 * 2, 11),
      textStyle: {
        // ...defaultTextStyle,
        fill: 0x000000,
        fontSize: 22,
      },
      padding: [11, 11],
      maxLength: 20,
      align: "center",
      placeholder: "Enter your Password",
      value: passwordInput,
    });
    passwordInputComponent.position.set(-60, 80);
    passwordInputComponent.zIndex = 2;
    passwordInputComponent.onChange.connect((e) => {
      console.log("onAssetsLoaded ~ passwordInputComponent onChange:", e);
    });

    experimentContainer.addChild(nameInputComponent);
    experimentContainer.addChild(passwordInputComponent);
    experimentContainer.addChild(LoginText);
    experimentContainer.addChild(RegisterText);
    experimentContainer.addChild(ForgotPasswordText);

    // app.stage.addChild(SpineboyAnimation);
    // this.addChild(SpineboyAnimation);

    // this.clampyVelocity = 5;
  }
  // @ts-ignore
  update(framesPassed: number): void {
    // throw new Error("Method not implemented.");
    // console.log("framesPassed", framesPassed);
  }
  // public update(framesPassed: number): void {
  //   // Lets move clampy!
  //   this.clampy.x += this.clampyVelocity * framesPassed;

  //   if (this.clampy.x > Manager.width) {
  //     this.clampy.x = Manager.width;
  //     this.clampyVelocity = -this.clampyVelocity;
  //   }

  //   if (this.clampy.x < 0) {
  //     this.clampy.x = 0;
  //     this.clampyVelocity = -this.clampyVelocity;
  //   }
  // }
}
