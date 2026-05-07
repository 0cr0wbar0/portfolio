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
      .map((project) => {
        const tags = project.data.project_tags.split(" ");
        const tagList = tags
          .map((tag) => `<li class="tag ${tag.toLowerCase()}-tag">${tag}</li>`)
          .join("\n");

        return `
          <a class="project-link nb-button" href=".${project.url}">
            <img class="preview-img" src=${project.data.previewimg}>
            <h2>${project.data.title}</h2>
            <h4>
              ${project.data.desc}
            </h4>
            <p>
              ${this.readableDate(project.data.date)}
            </p>
            <ul class="tag-list">
              ${tagList}
            </ul>
          </a>
        `;
      })
      .join("\n");

    return `<nav class="navbar"><h1 class="title">${title}</h1></nav>
            <main class="project-box">${projects}</main>`;
  }
}
