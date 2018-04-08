import { Product } from '../../products/models/Product';

export class Bar {
  constructor({ id, name, lat, long, distance, products, imageUrl }) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.distance = distance;
    this.products = getProductListFromConstructor(products);
    this.imageUrl = imageUrl;
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

Object.freeze(Bar);
export default Bar;
