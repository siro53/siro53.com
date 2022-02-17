/** @type {import('next').NextConfig} */

const rehypePrism = require('@mapbox/rehype-prism');
const rehypeKatex = require('rehype-katex');
const remarkMath = require('remark-math');

const withMDX = require('@next/mdx')({
  extension: /\.(mdx)?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

const createMDXImport = require('./core/utils/scripts/main').createMDXImportList;
createMDXImport();

const nextConfig = {
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
};

module.exports = withMDX(nextConfig);
