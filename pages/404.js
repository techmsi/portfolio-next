import { BiMessageSquareError } from 'react-icons/bi';

function Custom404() {
  return (
    <div className="error-page">
      <h1>
        <BiMessageSquareError /> Oops. Seems we couldn't find this page.
      </h1>
    </div>
  );
}

export default Custom404;
