// app.js
const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/projects": "/pages/projects.html",
  "/contact": "/pages/contact.html",
};

const app = document.getElementById("app");

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const path = location.pathname;
  const html = await fetch(routes[path] || routes["/"]).then(res => res.text());
  app.innerHTML = html;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});


