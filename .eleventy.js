
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  //eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/cms');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.setLibrary('md', markdownLib)
  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_components',
    }
  }
};
