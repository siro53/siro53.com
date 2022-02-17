import { readdirSync } from 'fs';
import path from 'path';

const postDir = path.join(process.cwd(), 'posts/articles/');

export const getAllMDXPaths = () => {
  const allMDXPaths = readdirSync(postDir).map((path) => path.split(/\.mdx/)[0]);
  return allMDXPaths;
};

export const getAllMDXs = async () => {
  const allMDXPaths = readdirSync(postDir);
  const allMDXs = allMDXPaths.map((path) => {});
};

export const getMDX = (id: string) => {
  const allMDXPaths = readdirSync(postDir);
};
