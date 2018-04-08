export class Product {
  constructor({ id, name, imageUrl, price = 0, qty = 0 }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.qty = qty;
    Object.seal(this);
  }
}

Object.freeze(Product);
export default Product;
