var app = new Vue ({
  el: "#app",
  data: {
    movies: [],
    series: [],
    flags: [
      "ar","cn","da","de","en","es","fr","he","hi","it","ja","ko","pt","ru","sv"
    ],
    querySearch: ""
  },
  methods: {
    //Funzione di ricerca film
    searchMovie: function() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "534c5b1725a1e639774c1339a24d9b79",
          query: this.querySearch,
          language: "it-IT"
        }
      })
      .then((response) => {
        this.movies = response.data.results;
        for (var i = 0; i < this.movies.length; i++) {
          this.movies[i].vote_average = parseInt(this.movies[i].vote_average/2);
        }
        this.querySearch = "";
      })
    },
    //Funzione di ricerca serie tv
    searchSeries: function() {
      axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "534c5b1725a1e639774c1339a24d9b79",
          query: this.querySearch,
          language: "it-IT"
        }
      })
      .then((response) => {
        this.series = response.data.results;
        for (var i = 0; i < this.series.length; i++) {
          this.series[i].vote_average = parseInt(this.series[i].vote_average/2);
        }
        this.querySearch = "";
      })
    }
  }
});
