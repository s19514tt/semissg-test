export default function () {
  const contentDiv = document.createElement("div");
  contentDiv.id = "content";
  contentDiv.innerHTML = `<div class=article><h2>About Us</h2><p>This is a dummy about us page.</div>`;
  return contentDiv;
}
