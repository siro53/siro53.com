import { readdirSync } from 'fs';
import path from 'path';

const postDir = path.join(process.cwd(), 'src/posts/articles/');

export const getAllMDXPaths = () => {
  const allMDXPaths = readdirSync(postDir).map((path) => path.split(/\.mdx/)[0]);
  return allMDXPaths;
};
