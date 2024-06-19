import * as cartServices from './src/services/cart.mjs';
import createItem from "./src/services/item.mjs";

const myCart = [];
const myWhishList = [];

console.log('Welcome to the your shopee Cart!');

const item1 = await createItem('hotwheels ferrar', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.removeItem(myCart, item2);

await cartServices.displayCart(myCart);

// await cartServices.deleteItem(myCart, item1.name);
// await cartServices.deleteItem(myCart, item2.name);

console.log('Shopee cart total: ');
await cartServices.calculateTotal(myCart);

// console.log(item1.subtotal());
// console.log(item2.subtotal());