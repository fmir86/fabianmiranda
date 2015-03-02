var canvas, ctx, confettiHandler, W, H;
var mp = 200;
var particles = [];
var colors = ["#32a2ba", "#32a2ba", "#d27045", "#e7c048", "#ce4293", "#84ba50"];

function showParticles(){
	console.log('showParticles');
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    W = 300;
    H = 250;
    canvas.width = W;
    canvas.height = H;

    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W,
			y: randomFromTo(-50,0),
			r: randomFromTo(5, 10),
			d: (Math.random() * mp) + 100,
            color: colors[randomFromTo(0,colors.length-1)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: (Math.random() * 0.07) + .05,
            tiltAngle: 0
        });
    }
    startConfetti();
}

function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;  // Green path
        ctx.moveTo(p.x + p.tilt + (p.r / 800), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 200));
        ctx.stroke();  // Draw it
    }
    update();
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

var TiltChangeCountdown = 5;
var angle = 0;
var tiltAngle = 0;

function update() {
    angle += 0.01;
    tiltAngle += 0.1;
    TiltChangeCountdown--;
    for (var i = 0; i < mp; i++) {
        
        var p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
        p.x += Math.sin(angle);
        p.tilt = (Math.sin(p.tiltAngle - (i / 3))) * 7;

        if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 5 > 0 || i % 2 == 0){
                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngle: p.tiltAngle, tiltAngleIncremental: p.tiltAngleIncremental };
            }
            else {
                if (Math.sin(angle) > 0) {
                    particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
                else {
                    particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
            }
        }
    }
}

function startConfetti() {
		console.log('startConfetti');

    W = 300;
    H = 250;
    canvas.width = W;
    canvas.height = H;
    confettiHandler = setInterval(draw, 12);
}

function stopConfetti() {
    clearTimeout(confettiHandler);
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}