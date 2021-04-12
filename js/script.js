var app = new Vue ({
  el: "#app",
  data: {
    movies: [],
    series: [],
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
        this.querySearch = "";
      })
    }
  }
});
