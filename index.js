const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: 5,
  y: 5,
  vx: 5,
  vy: 2,
  radius: 3,
  color: 'rgb(209,255,221)',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
    ctx.fillStyle = 'rgba(20, 20, 20, 0.6)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

function draw() {
  clear()
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  const raf = window.requestAnimationFrame(draw);
  
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

}

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();