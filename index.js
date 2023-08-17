const sections = document.querySelectorAll(".section");
const sidebarItems = document.querySelectorAll(".sidebar-item");

sections.forEach((section, index) => {
  section.addEventListener("scrollIntoView", () => {
    setActiveSidebarItem(index);
  });
});

sidebarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});

function setActiveSidebarItem(index) {
  sidebarItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
