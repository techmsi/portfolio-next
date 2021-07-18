import Link from 'next/link';
const SearchResultsList = ({ results = [] }) => (
  <nav className="menu">
    {results.map(({ name, title }) => (
      <Link
        key={`search-result-${name}`}
        href="/works/[name].md"
        as={`/works/${name}`}
      >
        <a>{title}.</a>
      </Link>
    ))}
  </nav>
);

export default SearchResultsList;
