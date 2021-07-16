import React from 'react';
import { MdLayersClear } from 'react-icons/md';
import {
  DiPhotoshop,
  DiIllustrator,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
} from 'react-icons/di';

export const filterList = [
  null,
  'sass',
  'html',
  'css',
  'react',
  'photoshop',
  'illustrator',
];
const Icons = {
  all: <MdLayersClear />,
  sass: <DiSass />,
  html: <DiHtml5 />,
  css: <DiCss3 />,
  react: <DiReact />,
  photoshop: <DiPhotoshop />,
  illustrator: <DiIllustrator />,
};
export const Icon = ({ value }) => (
  <i className={value}>{(value && Icons[value]) || Icons['all']}</i>
);
const allIcons = Object.entries(Icons);

const Technologies = () => (
  <div className="tech">
    {allIcons.map(([value, key]) => (
      <Icon key={key} value={value} />
    ))}
  </div>
);

export default Technologies;
