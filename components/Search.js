import { useCallback, useRef, useState } from 'react';
import SearchResultsList from './SearchResultsList';

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) =>
    `/api/search?q=${encodeURIComponent(query)}`;

  const fetchPosts = (query) => {
    if (query.length > 1) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  };
  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    fetchPosts(query);
  }, []);

  return (
    <>
      <input
        className="search"
        ref={searchRef}
        onChange={onChange}
        placeholder="Search posts"
        type="text"
        value={query}
      />

      <SearchResultsList results={results} />
    </>
  );
}
