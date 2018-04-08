import { Product } from '../../products/models/Product';

export class Round {
  constructor({ id, barId, timestamp, products }) {
    this.id = id;
    this.barId = barId;
    this.timestamp = timestamp;
    this.products = getProductListFromConstructor(products);
    Object.seal(this);
  }
}

function getProductListFromConstructor(productsParam) {
  if (Array.isArray(productsParam)) {
    return productsParam.map((product) => {
      return new Product(product);
    });
  }
  return [];
}

Object.freeze(Round);
export default Round;
