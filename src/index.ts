
import { Application } from 'pixi.js'
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import { Input } from '@pixi/ui'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	width: window.innerWidth,
	height: window.innerHeight,
});

// var widthTemp = 1280;
// var heightTemp = 720;
// var baseWidth = Math.floor(window.innerWidth);
// var baseHeight = Math.floor(window.innerHeight);
// var aspectRatio = baseWidth/baseHeight;

console.log('first', app.renderer.view.style)
// var renderer = PIXI.autoDetectRenderer(width*aspectRatio, height, {backgroundColor: 0xFFFFFF});
// document.body.appendChild(renderer.view);// create an new instance of a pixi stage with a grey backgroundvar stage = new PIXI.Container(); // I WANT TO CENTER THIS CONTAINER

// const clampy: Sprite = Sprite.from("clampy.png");

// clampy.anchor.set(0.5);

// clampy.x = app.screen.width / 2;
// clampy.y = app.screen.height / 2;

// app.stage.addChild(clampy);

// app.renderer = PIXI.autoDetectRenderer(widthTemp, heightTemp);
// app.view.style = 'absolute';
// app.view.style.position = 'absolute';
// app.view.style.left = Math.floor((baseWidth-width)/2)+'px';
// app.view.style.top = '0px';
// document.appendChild(app.view);

PIXI.Assets.load([
	'image/forest_background.jpg',
	'dragon/dragon.json',
	'spineboy/spineboy.json',
]).then(onAssetsLoaded);

function onAssetsLoaded(data: any) {
	console.log('data', data)

	// background
	const background = PIXI.Sprite.from("image/forest_background.jpg");
	console.log('background', background.width, background.height)
	const container = new PIXI.Container();
	container.sortableChildren = true;
	container.addChild(background)
	app.stage.addChild(container);

	// scale stage container to match the background size
	background.width = app.screen.width;
	background.height = app.screen.height;


	// EXPERIMENT CONTAINER
	const experimentContainer = new PIXI.Container();
	app.stage.addChild(experimentContainer);

	// make a box
	const box = new PIXI.Graphics()

	box.lineStyle(4, 0xFF3300, 1);
	// create rectangle with size 300x600, centered at (0, 0)
	box.drawRect(-100, -100, 350, 400);
	// box.drawRect(-200, -300, 400, 500); // rectangle with size 200x200, centered at (0, 0)
	box.endFill();
	experimentContainer.addChild(box);

	// center the container within the application
	experimentContainer.position.set(app.renderer.width / 2, app.renderer.height / 2);

	const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const LoginText = new PIXI.Text('Login', style);
LoginText.zIndex = 2;
LoginText.x = -75;
LoginText.y = -85;
LoginText.interactive = true;
LoginText.on('pointerdown', () => {
	console.log('LoginText clicked')
});

const RegisterText = new PIXI.Text('Register', style);
RegisterText.zIndex = 2;
RegisterText.x = 30;
RegisterText.y = -85;
RegisterText.interactive = true;
RegisterText.on('pointerdown', () => {
	console.log('RegisterText clicked')
});


experimentContainer.addChild(LoginText);
experimentContainer.addChild(RegisterText);

	// EXPERIMENT CONTAINER

	{		/* <Spineboy /> */	}
	const spineboy = PIXI.Assets.cache.get("spineboy/spineboy.json").spineData;
	const SpineboyAnimation = new Spine(spineboy);

	// set the position
	SpineboyAnimation.x = app.screen.width / 5;
	SpineboyAnimation.y = app.screen.height;

	SpineboyAnimation.scale.set(1);

	// set up the mixes!
	SpineboyAnimation.stateData.setMix("walk", "jump", 0.2);
	SpineboyAnimation.stateData.setMix("jump", "walk", 0.4);

	// play animation
	SpineboyAnimation.state.setAnimation(0, "walk", true);
	// app.stage.addChild(SpineboyAnimation);
	container.addChild(SpineboyAnimation);
	{		/* <Spineboy /> */	}

	{		/* Name Input */	}
	let nameInput: any, passwordInput: any;

	const nameInputComponent = new Input({
		bg: new PIXI.Graphics()
				.beginFill( 0xDCB000 )
				.drawRoundedRect(0, 0, 280, 55, 11 + 5)
				.beginFill( 0xF1D583 )
				.drawRoundedRect(5, 5, 280 - (5 * 2), 55 - (5 * 2), 11),
		textStyle: {
				// ...defaultTextStyle,
				fill: 0x000000,
				fontSize: 22,
				},
		padding: [11, 11],
		maxLength: 20,
		align: 'center',
		placeholder: 'Enter your name',
		value: nameInput,
		});

	const passwordInputComponent = new Input({
		bg: new PIXI.Graphics()
				.beginFill( 0xDCB000 )
				.drawRoundedRect(0, 0, 280, 55, 11 + 5)
				.beginFill( 0xF1D583 )
				.drawRoundedRect(5, 5, 280 - (5 * 2), 55 - (5 * 2), 11),
		textStyle: {
				// ...defaultTextStyle,
				fill: 0x000000,
				fontSize: 22,
				},
		padding: [11, 11],
		maxLength: 20,
		align: 'center',
		placeholder: 'Enter your Password',
		value: passwordInput,
		});

	// nameInput = new TextInput({
	// 	input: {
	// 		fontSize: "36px",
	// 		padding: "12px",
	// 		width: "500px",
	// 		color: "#26272E",
	// 	},
	// 	box: generateBox,
	// });
	nameInputComponent.position.set(-50 ,50);
	// nameInputComponent.x = experimentContainer.width / 2 - nameInputComponent.width / 2 ;
	// nameInputComponent.y = experimentContainer.height / 2 ;
	nameInputComponent.zIndex = 2;
	// nameInputComponent.pivot.x = nameInput?.width / 2 || 0;
	// nameInputComponent.pivot.y = nameInput?.height / 2;

	nameInputComponent.onChange.connect((e) => {
		console.log('onAssetsLoaded ~ nameInputComponent onChange:', e)
	});

	// passwordInput = new TextInput({
	// 	input: {
	// 		fontSize: "36px",
	// 		padding: "12px",
	// 		width: "500px",
	// 		color: "#26272E",
	// 	},
	// 	box: generateBox,
	// });

	passwordInputComponent.zIndex = 2
	passwordInputComponent.x = window.innerWidth / 2 - passwordInputComponent.width / 2;
	passwordInputComponent.y = window.innerHeight / 2 + 50;
	// passwordInputComponent.pivot.x = passwordInput.width / 2;
	// passwordInputComponent.pivot.y = passwordInput.height / 2;

	passwordInputComponent.onChange.connect((e) => {
		console.log('onAssetsLoaded ~ passwordInputComponent onChange:', e)
	});

	

	// app.stage.addChild(nameInputComponent);
	// app.stage.addChild(passwordInputComponent);
	experimentContainer.addChild(nameInputComponent);
	experimentContainer.addChild(passwordInputComponent);

	// app.stage.addChild(nameInput);
	// // app.stage.addChild(passwordInput);
	// container.addChild(nameInput);
	// container.addChild(passwordInput);
	{		/* Name Input */	}

	// instantiate the spine animation
	const dragonAsset = PIXI.Assets.cache.get("dragon/dragon.json").spineData;
	const dragon = new Spine(dragonAsset);
	console.log('onAssetsLoaded ~ dragon:', dragon)
	dragon.skeleton.setToSetupPose();
	dragon.update(0);
	dragon.autoUpdate = false;

	// create a container for the spine animation and add the animation to it
	const dragonCage = new PIXI.Container();
	dragonCage.addChild(dragon);

	// measure the spine animation and position it inside its container to align it to the origin
	const localRect = dragon.getLocalBounds();
	dragon.position.set(-localRect.x, -localRect.y);

	// now we can scale, position and rotate the container as any other display object
	const scale = Math.min(
		(app.screen.width * 0.7) / dragonCage.width,
		(app.screen.height * 0.7) / dragonCage.height
	);
	dragonCage.scale.set(scale, scale);
	dragonCage.position.set(
		(app.screen.width - dragonCage.width),
		(app.screen.height - dragonCage.height)
	);

	// add the container to the stage
	app.stage.addChild(dragonCage);

	// once position and scaled, set the animation to play
	dragon.state.setAnimation(0, "flying", true);

	app.ticker.add(() => {
		// update the spine animation, only needed if dragon.autoupdate is set to false
		dragon.update(app.ticker.deltaMS / 1000); // IN SECONDS!
	});
}
