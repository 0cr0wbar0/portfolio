import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  const md = markdownIt().use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);
}
