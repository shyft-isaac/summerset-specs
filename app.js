// ./app.js
const vm = new Vue({
  el: '#app',
  data: {
    results: [
      {attribute: "Dimensions", value: "4'x4'x2'"},
      {attribute: "Color", value: "Brushed Metal"},
      {attribute: "Type", value: "Natural Gas"},
      {attribute: "Warranty", value: "3 Year"}
    ]
  },

mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Pezqb7yOBzIvUCjiTBzcTfOS1BfAR28n")
    .then(response => {this.results = response.data.results})
  }
});
