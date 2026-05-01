export default class MainPage {
  data() {
    return {
      layout: "main_layout.html",
      title: "Finn Holland's Portfolio",
      eleventyImport: {
        collections: ["projects"]
      }
    };
  }

  render({ title, collections }) {
    let projects = collections.projects
      .map(
        (project) =>
          `
          <a class="project-link nb-button" href="${project.url}">
            <h2>${project.data.title}</h2>
            <h4>
              ${project.data.desc}
            </h4>
            <p>
              ${project.data.created}
            </p>
          </a>
        `
      )
      .join("\n");

    return `<nav class="navbar"><h1 class="title">${title}</h1></nav>
            <main class="project-box">${projects}</main>`;
  }
}
