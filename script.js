const title = document.querySelector(".title");
const doc = document.documentElement;

document.addEventListener("scroll", e => {
  const y = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  title.style.transform = `translate3d(0, ${y / 2}px, 0)`;
});
