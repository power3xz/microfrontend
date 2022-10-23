import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");
mountProducts(document.querySelector("#dev-products-container"));
mountCart(document.querySelector("#dev-cart-container"));
