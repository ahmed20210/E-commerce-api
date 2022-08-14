// document
// Products API
const document = [
  {
    api: "product",
    method: "GET",
    description: "Get all products",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/:id",
    method: "GET",
    description: "Get product by id",
    return: "Product",
    body: null,
  },
  {
    api: "product/category/:category",
    method: "GET",
    description: "Get products by category",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/subcategory/:subcategory",
    method: "GET",
    description: "Get products by subcategory",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/search/:search",
    method: "GET",
    description: "Get products by search",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/sort/:sort",
    method: "GET",
    description: "Get products by sort",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/search/:search",
    method: "GET",
    description: "Get products by search name",
    return: "Array of products",
    body: null,
  },
  {
    api: "product/reviews/:id/add",
    method: "POST",
    description: "add review to product",
    body: {
      review: "string",
      rating: "number between 1 and 5",
    },
    id: "product id",
    return: "review object that created",
  },
  {
    api: "product/reviews/:id/delete",
    method: "DELETE",
    description: "delete review from product",
    body: null,
    id: "product id",
    return: "review deleted",
  },
  {
    api: "product/reviews/:id/update",
    method: "PUT",
    description: "update review from product",
    body: {
      review: "string",
      rating: "number between 1 and 5",
    },
    id: "product id",
    return: "review object that updated",
  },
  {
    api: "product/reviews/:id",
    method: "GET",
    description: "Get review of current user",
    body: null,
    id: "product id",
    return: "review object",
  },

  {
    api: "signup",
    method: "POS <span> <span>T",
    description: "Sign up",
    body: {
      name: "string",
      email: "string in the form of email",
      password:
        "string including at least one number and one uppercase and lowercase letter and one special caracter, and at least 8 or more characters",
    },
    return: "User created",
  },
  {
    api: "login",
    method: "POST",
    description: "Login",
    body: {
      email: "user email",
      password: "user password",
    },
    return: "token of user id will be saved in cookie",
  },
  {
    api: "logout",
    method: "GET",
    description: "Logout",
    body: null,
    return: "User logged out and cookie deleted",
  },
  {
    api: "cart/add",
    method: "POST",
    description: "Add product to cart",
    body: {
      productId: "product id",
    },
    return: "array of products in cart",
  },
  {
    api: "cart/delete",
    method: "POST",
    description: "Delete product from cart",
    body: {
      productId: "product id",
    },
    return: "array of products in cart",
  },
  {
    api: "cart/increase",
    method: "POST",
    description:
      "Increase product quantity in cart that is already in the cart",
    body: {
      productId: "product id",
      quantity: "number",
    },
    note0: "if quantity is not specified, it will increase the quantity by 1",
    return: "array of products in cart",
  },
  {
    api: "cart/decrease",
    method: "POST",
    description:
      "Decrease product quantity in cart that is already in the cart",
    body: {
      productId: "product id",
      quantity: "number",
    },
    return: "array of products in cart",
  },
  {
    api: "cart/remove",
    method: "POST",
    description: "Remove all products from cart",
    body: null,
    return: "array of products in cart",
  },
  {
    api: "cart/",
    method: "GET",
    description: "Get cart",
    body: null,
    return: "array of products in cart",
  },
  {
    api: "orders/",
    method: "GET",
    description: "Get all orders",
    body: null,
    return: "array of orders",
  },
  {
    api: "orders/:id",
    method: "GET",
    description: "Get order by id",
    body: null,
    id: "order id",
    return: "order",
  },
  {
    api: "orders/",
    method: "POST",
    description: "Create order",
    body: {
      to: "string that will be location of the order",
      phone: "number",
      payment: "string that will be payment method of the order",
    },
    note0: "cart will be empty after order is created",
    note1: "order will be removed from cart after 3d of created order",
    return: "order",
  },
  {
    api: "orders/:id",
    method: "DELETE",
    description: "Delete order",
    body: null,
    id: "order id",
    return: "array of orders",
  },
  {
    api: "wishlist/:id/add",
    method: "POST",
    description: "Add product to wishlist",
    body: null,
    id: "product id",
    return: "array of products in wishlist",
  },
  {
    api: "wishlist/:id/remove",
    method: "POST",
    description: "Delete product from wishlist",
    body: null,
    id: "product id",
    return: "array of products in wishlist",
  },
  {
    api: "wishlist/",
    method: "GET",
    description: "Get wishlist",
    body: null,
    return: "array of products in wishlist",
  },
  {
    api: "categories/",
    method: "GET",
    description: "Get all categories",
    body: null,
    return: "array of categories",
  },
  // subcategories API
  {
    api: "subcategories/",
    method: "GET",
    description: "Get all subcategories",
    body: null,
    return: "array of subcategories",
  },
  // protected API
];
const protectedAPIsThatRequireLogin = [
  "/cart",
  "/reviews",
  "/orders",
  "/wishlist",
];

module.exports = { document, protectedAPIsThatRequireLogin };

