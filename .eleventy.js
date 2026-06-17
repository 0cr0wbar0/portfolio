import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItDiv from "markdown-it-div";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Manual numeric date reformatting
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  // Sorting collection of projects by date
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("projects/*.md")
      .sort((a, b) => b.date - a.date);
  });

  const md = markdownIt();
  md.use(markdownItAttrs);
  md.use(markdownItDiv);
  eleventyConfig.setLibrary("md", md);
}
