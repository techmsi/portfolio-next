const fs = require('fs');
const path = require('path');

const { data } = require('../.dev/works.json');
const pages = path.resolve('.', 'pages');
const works = path.join(pages, 'works');

const filenames = {
  data: path.join(works, 'works.json'),
  menu: path.join(works, 'index.mdx'),
  api: path.join(pages, 'api', 'pageIndexes.json'),
};
const getExcerpt = (description) =>
  description.split(' ').slice(0, 8).join(' ');
const getName = (title) => title.toLowerCase().replace(/ /g, '-');
const getImgFields = (img, title) => {
  const sizeOf = require('image-size');
  const src = `/images/${img.src}.png`;
  const thumbnail = `/images/thumbs/${img.src}.png`;

  const mainSize = sizeOf(path.join('public', src));
  const thumbSize = sizeOf(path.join('public', thumbnail));

  return {
    main: { src, width: mainSize.width, height: mainSize.height, alt: title },
    thumbnail: {
      src: thumbnail,
      width: thumbSize.width,
      height: thumbSize.height,
      alt: title,
    },
  };
};

const getMd = ({ title, img, org, categoryId: cid, ...md }) => {
  const name = getName(title);
  const link = `[${title}](/works/${name})`;
  const organization = org ? `<h3>Organization Details</h3>${org}` : '';
  const { src, width, height, alt } = img.main;

  const tpl = `---

title: ${title}
excerpt: ${md.excerpt}
slug: ${name}
---

import Image from 'next/image';
import { TechList } from '../../components/Works';


    [< Back to all](/works)
    ## ${title}
    

  <div className="work-detail" data-id="${md.id}" data-disabled="${md.disabled}"
  data-featured="${md.featured}" data-category="${cid}" >
    ${md.description}
    ${organization}
    <Image className="workImage" src={'${src}'} alt='${alt}' width={${width}} height={${height}} layout="intrinsic" />
    <TechList title="Technologies" software={[${md.software
      .map((s) => `"${s}"`)
      .join(',')}]} />
  </div>

   
    
`;
  return { name, link, tpl, software: md.software };
};

function writeDataOnce() {
  const dataJson = data.map(({ img, title, description, software, ...md }) => ({
    ...md,
    title,
    description,
    software: software.split(','),
    excerpt: getExcerpt(description),
    name: getName(title),
    img: getImgFields(img, title),
  }));

  fs.writeFileSync(filenames.data, JSON.stringify(dataJson, null, 2), 'utf-8');
}

function writeMdFiles() {
  const mds = data.map(getMd);

  mds.forEach(({ name, tpl }) => {
    const filename = path.join(works, `${name}.mdx`);
    fs.writeFileSync(filename, tpl);
  });
}

function writeWorksIndex() {
  const mds = require(`${filenames.data}`);
  const pagesList = mds.map(({ name, title, software }) => ({
    name,
    title,
    software,
  }));

  fs.writeFileSync(filenames.api, JSON.stringify(pagesList, null, 2), 'utf-8');
}

function setup() {
  // writeDataOnce();
  writeWorksIndex();
  writeMdFiles();
}

setup();
