import { writeFile, writeFileSync } from 'fs';
import { join } from 'path';
import { getAllMDXPaths } from './myMDX';
import * as Log from 'next/dist/build/output/log';
import { promisify } from 'util';

export const createMDXImportList = () => {
  const allMDXPaths = getAllMDXPaths();
  const targetPath = `${join(process.cwd(), 'src/posts')}/mdx-list.ts`;
  const allImports = allMDXPaths.map((path) => `'${path}': dynamic(() => import('./articles/${path}.mdx'))`).join(',');

  const content = `
    import React from 'react';
    import dynamic from 'next/dynamic';
    // This file is auto-generated.
    export const MDXPosts : { [key: string]: React.ComponentType } = {
        ${allImports}
    }
  `;

  const formattedContent = require('prettier').format(content, {
    printWidth: 120,
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    endOfLine: 'lf',
  });

  promisify(writeFile)(targetPath, formattedContent);

  Log.info(`\u001b[32m[createMDXImportList]: Successfully created import for ${allMDXPaths.length} files.`);
  Log.info(`\u001b[32m[createMDXImportList]: See ${targetPath} for details.`);
};
