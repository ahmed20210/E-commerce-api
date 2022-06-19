
// document
// Products API
const document = {
 "product" : [
    {
    api: "/product",
    method: "GET",
    description: "Get all products",
    return: "Array of products",
},
  {
    api: "/:id",
    method: "GET",
    description: "Get product by id",
    return: "Product",
},
  {
    api: "/category/:category",
    method: "GET",
    description: "Get products by category",
    return: "Array of products",
},
  {
    api: "/subcategory/:subcategory",
    method: "GET",
    description: "Get products by subcategory",
    return: "Array of products",
},
  {
    api: "/search/:search",
    method: "GET",
    description: "Get products by search",
    return: "Array of products",
},
{
    api: "/sort/:sort",
    method: "GET",
    description: "Get products by sort",
    return: "Array of products",
},
{
    api: "/search/:search",
    method: "GET",
    description: "Get products by search name",
    return: "Array of products",
}
],
// Reviews API
"products/reviews" : [
{
    api:"/:id/add",
    method:"POST",
    description:"add review to product",
    body:{
        "review":"string",
        "rating":"number between 1 and 5",
    },
    id: "product id",
    return:"review object that created",
},
{
    api:"/:id/delete",
    method:"DELETE",
    description:"delete review from product",
    body:null,
    id: "product id",
    return:"review deleted",
},
{
    api:"/:id/update",
    method:"PUT",
    description:"update review from product",
    body:{
        "review":"string",
        "rating":"number between 1 and 5"
    },
    id: "product id",
    return:"review object that updated",
},
{
    api:"/:id",
    method:"GET",
    description:"Get review of current user",
    body:null,
    id: "product id",
    return:"review object",
},
],
// Users API
"" : [
    {
        api: "/signup",
        method: "POST",
        description: "Sign up",
        body: {
            "name": "string",
            "email": "string in the form of email",
            "password": "string including at least one number and one uppercase and lowercase letter and one special caracter, and at least 8 or more characters",
    },
    return: "User created",
},
{
    api: "/login",
    method: "POST",
    description: "Login",
    body: {
        "email": "user email",
        "password":"user password",
},
    return: "token of user id will be saved in cookie",
},
{
    api: "/logout",
    method: "GET",
    description: "Logout",
    body: null,
    return: "User logged out and cookie deleted",
}
],
// Cart API
"cart" : [
    {
        api: "/add",
        method: "POST",
        description: "Add product to cart",
        body: {
            "productId": "product id",
    },
    return: "array of products in cart",
},
{
    api: "/delete",
    method: "POST",
    description: "Delete product from cart",
    body: {
        "productId": "product id",
},
    return: "array of products in cart",
},
{
    api: "/increase",
    method: "POST",
    description: "Increase product quantity in cart that is already in the cart",
    body: {
        "productId": "product id",
        "quantity": "number",
},
note: "if quantity is not specified, it will increase the quantity by 1",
    return: "array of products in cart",
},
{
    api: "/decrease",
    method: "POST",
    description: "Decrease product quantity in cart that is already in the cart",
    body: {
        "productId": "product id",
        "quantity": "number",
},
return: "array of products in cart",
},
{
    api: "/remove",
    method: "POST",
    description: "Remove all products from cart",
    body: null,
    return: "array of products in cart",
},
{
    api: "/",
    method: "GET",
    description: "Get cart",
    body: null,
    return: "array of products in cart",
}
],
// Order API
"orders" :[
    {
        api: "/",
        method: "GET",
        description: "Get all orders",
        body: null,
        return: "array of orders",
    },
    {
        api: "/:id",
        method: "GET",
        description: "Get order by id",
        body: null,
        id: "order id",
        return: "order",
    },
    {
        api: "/",
        method: "POST",
        description: "Create order",
        body: {
            to:"string that will be location of the order",
            phone:"number",
            payment:"string that will be payment method of the order",
        },
        note0: "cart will be empty after order is created",
        note1: "order will be removed from cart after 3d of created order",
        return: "order",
    },
    {
        api: "/:id",
        method: "DELETE",
        description: "Delete order",
        body: null,
        id: "order id",
        return: "array of orders",
    }
],
// Wishlist API
"wishlist" :[
    {
        api: "/:id/add",
        method: "POST",
        description: "Add product to wishlist",
        body: null,
        id: "product id",
        return: "array of products in wishlist",
    },
    {
        api: "/:id/remove",
        method: "POST",
        description: "Delete product from wishlist",
        body: null,
        id: "product id",
        return: "array of products in wishlist",
    },
    {
        api: "/",
        method: "GET",
        description: "Get wishlist",
        body: null,
        return: "array of products in wishlist",
    }
],
// categories API
 "categories" :[{
    api: "/",
    method: "GET",
    description: "Get all categories",
    body: null,
    return: "array of categories",
}
],
// subcategories API
    "subcategories" : [{
    api: "/",
    method: "GET",
    description: "Get all subcategories",
    body: null,
    return: "array of subcategories",
}
],
// protected API
protectedAPIsThatRequireLogin: ["/cart", "/reviews","/orders", "/wishlist"]



}
module.exports = document;