import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

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

  const md = markdownIt().use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);
}
