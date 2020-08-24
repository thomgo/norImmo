const priceReference = {
  surface : 1000,
  bedrooms : 10000,
  material : {
    parpaing : 20,
    brique : 30,
    bois : 15,
  }
}

class Estimator {
  constructor(form, priceReference) {
    this.formData = new FormData(form);
    this.priceReference = priceReference;
    for(let value of new FormData(form)) {
      console.log(value);
    }
  }

  estim() {
    let result = 0
    result += this.priceReference.surface * parseInt(this.formData.get("surface"));
    result += this.priceReference.bedrooms * parseInt(this.formData.get("bedrooms"));
    result *= (1 + (this.priceReference.material[this.formData.get("material")]/100));
    return result;
  }
}

function estimate() {
  let estimator = new Estimator(document.getElementById('estimatorForm'), priceReference)
  let resultTag = document.getElementById("estimResult");
  resultTag.textContent = estimator.estim();
}
