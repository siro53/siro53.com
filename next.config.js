/** @type {import('next').NextConfig} */

const rehypePrism = require('@mapbox/rehype-prism');
const rehypeKatex = require('rehype-katex');
const remarkMath = require('remark-math');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

const nextConfig = {
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
};

module.exports = withMDX(nextConfig);
