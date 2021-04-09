var app = new Vue ({
  el: "#app",
  data: {
    movies: [
      // {
      //       original_language: "en",
      //       original_title: "The Godfather: Part II",
      //       overview: "Il film tratta della giovinezza e dei primi passi nel mondo del crimine di Vito Corleone, e delle difficoltà cinquant'anni più tardi di suo figlio, Michael, a mantenere in piedi l'impero Corleone. Il tutto tra vicende di emigrazione, tradimenti familiari, inchieste governative e affari.",
      //       poster_path: "/x3tDZOQn1jxaoVd3RJLECX6QGvd.jpg",
      //       title: "Il padrino - Parte II",
      //       vote_average: 8.6,
      //   },
    ],
    querySearch: ""
  },
  methods: {
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
      })
    }
  }
});
