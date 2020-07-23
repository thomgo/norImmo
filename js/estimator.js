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
    this.priceReference = priceReference
  }

  estim() {
    for(let value of this.formData) {
      console.log(value);
    }
  }
}

function estimate() {
  let estimator = new Estimator(document.getElementById('estimatorForm'), priceReference)
  estimator.estim();
}
