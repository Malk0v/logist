const left = document.querySelector(".mountain.left");
const right = document.querySelector(".mountain.right");
const road = document.querySelector(".road polygon");
const fog = document.querySelector(".fog");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
  target = Math.min(window.scrollY / 400, 1);
});

function animate() {
  current += (target - current) * 0.08;

  left.style.transform = `translateX(${-200 * current}px)`;
  right.style.transform = `translateX(${200 * current}px)`;

  road.style.transform = `scaleY(${current})`;
  fog.style.opacity = current * 0.4;

  requestAnimationFrame(animate);
}

animate();
