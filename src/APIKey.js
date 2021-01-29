var unirest = require("unirest");

var req = unirest(
  "GET",
  "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception"
);

req.headers({
  "x-rapidapi-key": "420475526dmsh58e2402dd2404a5p1532b6jsn76a3ce10d672",
  "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
