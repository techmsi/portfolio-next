import Image from 'next/image';
import Link from 'next/link';

import { Icon } from './Icons';

export const TechList = ({ title = null, software = [] }) => (
  <span className="techList">
    {title && <h3>{title}</h3>}
    {software.map((value) => (
      <Icon key={value} value={value.toLowerCase()} />
    ))}
  </span>
);
const WorkImage = ({ thumbnail }) => (
  <Image
    className="workImage"
    src={thumbnail.src}
    alt={thumbnail.alt}
    width={thumbnail.width}
    height={thumbnail.height}
    layout="intrinsic"
  />
);
export const Works = ({ works }) => (
  <section className="showcase">
    {works.map(({ name, title, software, img }) => (
      <div key={`work-${name}`} className="work-card">
        <WorkImage thumbnail={img.thumbnail} />
        <h2>{title}</h2>
        <TechList software={software} />
        <Link
          key={`work-item-${name}`}
          href="/works/[name].md"
          as={`/works/${name}`}
        >
          <a>Details</a>
        </Link>
      </div>
    ))}
  </section>
);
