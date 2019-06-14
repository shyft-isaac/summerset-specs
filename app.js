// ./app.js
const vm = new Vue({
  el: '#app',
  data: {
    results: [
    {
        "name": "Sizzler 40\" Built-in Grill",
        "sku": "SIZ40",
        "attributes": {
            "overall-dimensions": "20\" (H) x 39 1/2\" (W) x 25\" (D)",
            "box-dimensions": "22\" (H) x 42 1/2\" (W) x 27\" (D)",
            "fuel-type": "Natural Gas, Propane",
            "finish": "#443 Stainless Steel Construction",
            "hood-features": "Double-lined Hood",
            "grate-thickness": "8mm Cooking Grates",
            "burner-type": "Stainless Steel Tube Burners",
            "ignition-features": "Flame Thrower Ignition, Manual Flash Tube Ignition",
            "briquette-system": "Easy-clean Briquette System",
            "main-burner-btus": "12,000 BTUs (each burner)",
            "back-burner-btus": "15,000 (infrared burner)",
            "temperature-gauge": "3\" Built-in Temperature Gauge",
            "total-cooking-surface": "985 (square inches)"
        },
        "cutouts": "38\"(W) x 8-1/2\"(H) x 20-3/4\"(D)",
        "spec_sheet": "https://www.summersetgrills.com/wp-content/uploads/2018/01/sizzler-40-built-in-grill-contractor-sheet.pdf"
    }
]
  },

// mounted() {
//     axios.get("https://api.summersetgrills.com/wp-json/summerset/product/SIZ40")
//     .then(response => {this.results = response.data.results})
//   }
});
