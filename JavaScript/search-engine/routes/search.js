var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = req.query.q;
  // console.log(query);
  const data = await axios.get(`https://serpapi.com/search.json?engine=google&q=${query}&api_key=ac11408f45f6cc606405608e7af2afc583d34a4cb02415427481b4176688c46b&gl=id`)
    .then((res) => res.data);
  console.log(data);
  res.render('search', { 
    title: 'TFKHDYT Search',
    query,
    data: data.organic_results
  });
});

module.exports = router;
