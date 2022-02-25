// 参考: https://github.com/HelloRusk/blog
const fs = require('fs-extra');
const path = require('path');
const extractMdxMeta = require('extract-mdx-metadata');

const blogDir = path.join(__dirname, '../pages/blog/');
const diaryDir = path.join(__dirname, '../pages/diary/');
const targetBlogPath = path.join(__dirname, '../../metadata.blog.json');
const targetDiaryPath = path.join(__dirname, '../../metadata.diary.json');

// .mdxのmetadataを取得
const getMetaData = async (files, parDir) => {
  return Promise.all(
    files
      .filter((name) => name.endsWith('.mdx') || !name.includes('.'))
      .map(async (file) => {
        const filePath = path.join(parDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const meta = await extractMdxMeta(content);
        return meta;
      })
  );
};

// 日付で降順sort
const sortMeta = (metas) => {
  const sortedMetas = metas
    .map((meta) => {
      if (!meta.id) {
        console.error(`missing meta id : ${meta}`);
        process.exit(1);
      }
      if (!meta.title) {
        console.error(`missing meta title : ${meta}`);
        process.exit(1);
      }
      if (!meta.date) {
        console.error(`missing meta date : ${meta}`);
        process.exit(1);
      }
      return meta;
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  return sortedMetas;
};

(async () => {
  try {
    // blog
    const blogFiles = await fs.readdir(blogDir);
    const blogMetas = await getMetaData(blogFiles, blogDir);
    const sortedBlogMetas = sortMeta(blogMetas);
    await fs.ensureFile(targetBlogPath);
    await fs.writeJSON(targetBlogPath, sortedBlogMetas);
    // diary
    const diaryFiles = await fs.readdir(diaryDir);
    const diaryMetas = await getMetaData(diaryFiles, diaryDir);
    const sortedDiaryMetas = sortMeta(diaryMetas);
    await fs.ensureFile(targetDiaryPath);
    await fs.writeJSON(targetDiaryPath, sortedDiaryMetas);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
