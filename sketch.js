let canvas;
let next;

let dots;
let signal;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	dots = select('#dots');
	dots.position(windowWidth / 4, windowHeight / 6);
	dots.style('font-family', 'courier');
	dots.style('color', 'white');
	dots.style('font-size', '2em');

	signal = select('#signal');
	signal.position(windowWidth / 3, windowHeight / 2);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);
}