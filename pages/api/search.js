const posts = require('./pageIndexes.json');

export default (req, res) => {
  const { q = '' } = req.query;
  const findTerm = ({ name }) => name.indexOf(q.toLowerCase()) !== -1;
  const results = posts.filter(findTerm) || 'none';
  console.log(`Found ${results.length} results for q=${q}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send({ results });
  res.end();
};
