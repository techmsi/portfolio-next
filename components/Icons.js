import React from 'react';
import { MdLayersClear } from 'react-icons/md';
import {
  DiPhotoshop,
  DiIllustrator,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiNodejs,
  DiPhp,
  DiPython,
  DiDrupal,
  DiJavascript1,
} from 'react-icons/di';
import { Gi3DStairs } from 'react-icons/gi';

import { SiAdobeindesign } from 'react-icons/si';

const Icons = {
  all: <MdLayersClear />,
  css: <DiCss3 />,
  drupal: <DiDrupal />,
  html: <DiHtml5 />,
  illustrator: <DiIllustrator />,
  indesign: <SiAdobeindesign />,
  javascript: <DiJavascript1 />,
  node: <DiNodejs />,
  photoshop: <DiPhotoshop />,
  php: <DiPhp />,
  python: <DiPython />,
  react: <DiReact />,
  sass: <DiSass />,
  sketchup: <Gi3DStairs />,
};
export const filterList = Object.keys(Icons);
export const Icon = ({ value }) => (
  <i className={`icon ${value}`} title={value}>
    {(value && Icons[value]) || Icons['all']}
  </i>
);
const allIcons = Object.entries(Icons);

const Technologies = () => (
  <div className="tech">
    {allIcons.map(([value]) => (
      <Icon key={value} value={value} />
    ))}
  </div>
);

export default Technologies;
