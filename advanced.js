function getDateFormats() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  const first = `${y}-${m}-${d}`;

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const second = `${week[now.getDay()]}, ${month[now.getMonth()]} ${d}, ${y}`;
  return [first, second];
}

/* ========== UI glue ========== */
const [d1, d2] = getDateFormats();
document.getElementById("date1").textContent = d1;
document.getElementById("date2").textContent = d2;

/* ========== copy-to-clipboard micro-interaction ========== */
document.querySelectorAll(".date-slot").forEach((el) => {
  el.addEventListener("click", async () => {
    await navigator.clipboard.writeText(el.textContent);
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 800);
  });
});

/* ========== particle network background ========== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w = (canvas.width = innerWidth);
let h = (canvas.height = innerHeight);

const opts = {
  particleCount: Math.floor((w * h) / 18000),
  speed: 0.3,
  radius: 1.2,
  lineWidth: 0.3,
  lineDist: 120,
  hue: 180
};

const particles = [];
class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * opts.speed;
    this.vy = (Math.random() - 0.5) * opts.speed;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, opts.radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${opts.hue}, 100%, 70%)`;
    ctx.fill();
  }
}

function init() {
  particles.length = 0;
  for (let i = 0; i < opts.particleCount; i++) particles.push(new Particle());
}
init();

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach((p) => p.update());
  particles.forEach((p) => p.draw());

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < opts.lineDist) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `hsla(${opts.hue}, 100%, 70%, ${
          1 - dist / opts.lineDist
        })`;
        ctx.lineWidth = opts.lineWidth;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();

addEventListener("resize", () => {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  opts.particleCount = Math.floor((w * h) / 18000);
  init();
});
