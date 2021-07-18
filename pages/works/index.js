import workData from './works.json';
import { Works } from '../../components/Works';

export async function getStaticProps() {
  return {
    props: {
      works: workData,
    },
  };
}
const Showcase = ({ works = [] }) => (
  <>
    <h1 className="showcase-title">
      A collection of <em>{works.length}</em> notable works
    </h1>
    <Works works={works} />
  </>
);
export default Showcase;
