import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItDiv from "markdown-it-div";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  const md = markdownIt();
  md.use(markdownItAttrs);
  md.use(markdownItDiv);
  eleventyConfig.setLibrary("md", md);
}
