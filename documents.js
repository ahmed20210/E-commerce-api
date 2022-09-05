// document
// Products API
const document = {
  products: [
    {
      api: "/product",
      method: "GET",
      description: "Get all products",
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.210Z",
            "endDate": "2022-07-23T13:36:54.210Z",
            "pricebefore": 1151
        },
        "_id": "62dbf9762dd27153fa116536",
        "name": "Teriyaki Sauce",
        "price": 1151,
        "quantity": 1868,
        "image": "https://i.im.ge/2022/06/18/rBOju1.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 70,
            "available": true,
            "startDate": "2022-07-23T13:36:54.211Z",
            "endDate": "2022-07-23T13:36:54.211Z",
            "pricebefore": 1711
        },
        "_id": "62dbf9762dd27153fa116537",
        "name": "Cinnamon Rolls",
        "price": 514,
        "quantity": 4337,
        "image": "https://i.im.ge/2022/06/18/rBO5fP.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet.",
        "category": "Accessories",
        "subcategory": [
            "Featured",
            "On Sale"
        ],
        "__v": 3
    },
    {
        "rate": {
            "reviews": [
                {
                    "_id": "631351fd433cae23360c24b5",
                    "review": "this is a review",
                    "rating": 5,
                    "name": "am",
                    "__v": 0
                }
            ],
            "rating": 5,
            "numberOfReviews": 1
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z",
            "pricebefore": 368
        },
        "_id": "62dbf9762dd27153fa116538",
        "name": "Mousse - Banana Chocolate",
        "price": 368,
        "quantity": 2187,
        "image": "https://i.im.ge/2022/06/18/rBO0Np.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 1
    },
    {
        "rate": {
            "reviews": [
                {
                    "_id": "62ebaf5575ddadeff1882adb",
                    "review": "tgj",
                    "rating": 4,
                    "name": "ziad",
                    "__v": 0
                },
                {
                    "_id": "62ed04de24867ad76bbf53b5",
                    "review": "good",
                    "rating": 4,
                    "name": "AhmedMostafa",
                    "__v": 0
                }
            ],
            "rating": 1,
            "numberOfReviews": 8
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z",
            "pricebefore": 377
        },
        "_id": "62dbf9762dd27153fa116539",
        "name": "Oysters - Smoked",
        "price": 377,
        "quantity": 2581,
        "image": "https://i.im.ge/2022/06/18/rBOidq.png",
        "description": "Duis consequat dui nec nisi volutpat eleifend.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 8
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 61,
            "available": true,
            "startDate": "2022-07-23T13:36:54.213Z",
            "endDate": "2022-07-23T13:36:54.213Z",
            "pricebefore": 1327
        },
        "_id": "62dbf9762dd27153fa11653a",
        "name": "Dill Weed - Dry",
        "price": 518,
        "quantity": 877,
        "image": "https://i.im.ge/2022/06/18/rBOUJC.png",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated",
            "On Sale"
        ],
        "__v": 1
    }
]`,
      body: null,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product")
        .then((res) => {
        return res.data;
        });
        `,
    },
    {
      api: "/product/:id",
      method: "GET",
      description: "Get product by id",
      return: `{
    "rate": {
        "reviews": [],
        "rating": 0,
        "numberOfReviews": 0
    },
    "Sale": {
        "value": 0,
        "available": false,
        "startDate": "2022-07-23T13:36:54.214Z",
        "endDate": "2022-07-23T13:36:54.214Z",
        "pricebefore": 4617
    },
    "_id": "62dbf9762dd27153fa11653d",
    "name": "Bread - Bistro White",
    "price": 4617,
    "quantity": 771,
    "image": "https://i.im.ge/2022/06/18/rBODMY.png",
    "description": "Suspendisse potenti. In eleifend quam a odio.",
    "category": "Accessories",
    "subcategory": [
        "Top Rated"
    ],
    "__v": 0
}`,
      body: null,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/62dbf97627153fa11653d")
        .then((res) => {
        return res.data;
        }
        );`,
    },
    {
      api: "product/category/:category",
      method: "GET",
      description: "Get products by category",
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.237Z",
            "endDate": "2022-07-23T13:36:54.237Z",
            "pricebefore": 1052
        },
        "_id": "62dbf9762dd27153fa1165c6",
        "name": "Onion Powder",
        "price": 1052,
        "quantity": 1923,
        "image": "https://i.im.ge/2022/06/18/rBOp98.png",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Laptop",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 65,
            "available": true,
            "startDate": "2022-07-23T13:36:54.237Z",
            "endDate": "2022-07-23T13:36:54.237Z",
            "pricebefore": 278
        },
        "_id": "62dbf9762dd27153fa1165c7",
        "name": "Miso - Soy Bean Paste",
        "price": 98,
        "quantity": 2758,
        "image": "https://i.im.ge/2022/06/18/rBOHFX.png",
        "description": "Praesent id massa id nisl venenatis lacinia.",
        "category": "Laptop",
        "subcategory": [
            "Featured",
            "On Sale"
        ],
        "__v": 1
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 13,
            "available": true,
            "startDate": "2022-07-23T13:36:54.239Z",
            "endDate": "2022-07-23T13:36:54.239Z",
            "pricebefore": 1058
        },
        "_id": "62dbf9762dd27153fa1165c8",
        "name": "Beer - Camerons Auburn",
        "price": 921,
        "quantity": 4269,
        "image": "https://i.im.ge/2022/06/18/rBOkk9.jpg",
        "description": "Vestibulum quam sapien, varius ut, blandit non.",
        "category": "Laptop",
        "subcategory": [
            "Featured",
            "On Sale"
        ],
        "__v": 1
    }
]`,
      body: null,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/category/Laptop")
      .then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/subcategory/:subcategory",
      method: "GET",
      description: "Get products by subcategory",
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 6,
            "available": true,
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z",
            "pricebefore": 1638
        },
        "_id": "62dbf9762dd27153fa11653e",
        "name": "Sage - Ground",
        "price": 1540,
        "quantity": 4048,
        "image": "https://i.im.ge/2022/06/18/rBOa8M.png",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum.",
        "category": "Accessories",
        "subcategory": [
            "Best Seller",
            "Hot Deals",
            "On Sale"
        ],
        "__v": 5
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.219Z",
            "endDate": "2022-07-23T13:36:54.219Z",
            "pricebefore": 584
        },
        "_id": "62dbf9762dd27153fa116553",
        "name": "Flour - Strong",
        "price": 584,
        "quantity": 960,
        "image": "https://i.im.ge/2022/06/17/rBufB6.jpg",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Health&GYM",
        "subcategory": [
            "Top Rated",
            "Trending",
            "Hot Deals"
        ],
        "__v": 2
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.221Z",
            "endDate": "2022-07-23T13:36:54.221Z",
            "pricebefore": 605
        },
        "_id": "62dbf9762dd27153fa116562",
        "name": "Chips - Doritos",
        "price": 605,
        "quantity": 4296,
        "image": "https://i.im.ge/2022/06/17/rBuhUD.jpg",
        "description": "Curabitur in libero ut massa volutpat convallis.",
        "category": "Shoes",
        "subcategory": [
            "New Arrival",
            "Hot Deals"
        ],
        "__v": 1
    }
]`,
      body: null,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/subcategory/Top Rated")
        .then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/search/:search",
      method: "GET",
      description: "Get products by search",
      return: `[{
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z",
            "pricebefore": 2767
        },
        "_id": "62dbf9762dd27153fa116538",
        "name": "Mousse - Banana Chocolate",
        "price": 2767,
        "quantity": 2187,
        "image": "https://i.im.ge/2022/06/18/rBO0Np.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.239Z",
            "endDate": "2022-07-23T13:36:54.239Z",
            "pricebefore":4049
        },
        "_id": "62dbf9762dd27153fa1165c9",
        "name": "Mousse - Banana Chocolate",
        "price": 4049,
        "quantity": 3303,
        "image": "https://i.im.ge/2022/06/18/rBOfPK.png",
        "description": "Maecenas leo odio, condimentum id.",
        "category": "Laptop",
        "subcategory": [
            "Featured"
        ],
        "__v": 0
    }
]`,
      body: null,
      params: ":search => should be product name or just part of it",
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/search/Banana Chocolate")
        .then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/sort/:sort",
      method: "GET",
      description: "sort product list",
      return:
        "Array of all the products sorted by what you choose price or name .....",
      body: null,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/sort/price")
      .then((res) => {
        return res.data
        })`,
    },
    {
      api: "/product/limit/:list/:limit",
      method: "GET",
      description: "Get limited number of products",
      body: null,
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 6,
            "available": true,
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z",
            "pricebefore": 1638
        },
        "_id": "62dbf9762dd27153fa11653e",
        "name": "Sage - Ground",
        "price": 1540,
        "quantity": 4048,
        "image": "https://i.im.ge/2022/06/18/rBOa8M.png",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum.",
        "category": "Accessories",
        "subcategory": [
            "Best Seller",
            "Hot Deals",
            "On Sale"
        ],
        "__v": 5
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.219Z",
            "endDate": "2022-07-23T13:36:54.219Z",
            "pricebefore": 584
        },
        "_id": "62dbf9762dd27153fa116553",
        "name": "Flour - Strong",
        "price": 584,
        "quantity": 960,
        "image": "https://i.im.ge/2022/06/17/rBufB6.jpg",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Health&GYM",
        "subcategory": [
            "Top Rated",
            "Trending",
            "Hot Deals"
        ],
        "__v": 2
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.221Z",
            "endDate": "2022-07-23T13:36:54.221Z",
            "pricebefore": 605
        },
        "_id": "62dbf9762dd27153fa116562",
        "name": "Chips - Doritos",
        "price": 605,
        "quantity": 4296,
        "image": "https://i.im.ge/2022/06/17/rBuhUD.jpg",
        "description": "Curabitur in libero ut massa volutpat convallis.",
        "category": "Shoes",
        "subcategory": [
            "New Arrival",
            "Hot Deals"
        ],
        "__v": 1
    }
]`,
      params: `:list => number of page / :limit => number of products in each page`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/limit/1/3")
      .then((res) => {
        return res.data
        })`,
    },
    {
      api: "/product/category/:category/:list/:limit",
      method: "GET",
      description: "Get limited number of category",
      body: null,
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.237Z",
            "endDate": "2022-07-23T13:36:54.237Z",
            "pricebefore": 1052
        },
        "_id": "62dbf9762dd27153fa1165c6",
        "name": "Onion Powder",
        "price": 1052,
        "quantity": 1923,
        "image": "https://i.im.ge/2022/06/18/rBOp98.png",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Laptop",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 65,
            "available": true,
            "startDate": "2022-07-23T13:36:54.237Z",
            "endDate": "2022-07-23T13:36:54.237Z",
            "pricebefore": 278
        },
        "_id": "62dbf9762dd27153fa1165c7",
        "name": "Miso - Soy Bean Paste",
        "price": 98,
        "quantity": 2758,
        "image": "https://i.im.ge/2022/06/18/rBOHFX.png",
        "description": "Praesent id massa id nisl venenatis lacinia.",
        "category": "Laptop",
        "subcategory": [
            "Featured",
            "On Sale"
        ],
        "__v": 1
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 13,
            "available": true,
            "startDate": "2022-07-23T13:36:54.239Z",
            "endDate": "2022-07-23T13:36:54.239Z",
            "pricebefore": 1058
        },
        "_id": "62dbf9762dd27153fa1165c8",
        "name": "Beer - Camerons Auburn",
        "price": 921,
        "quantity": 4269,
        "image": "https://i.im.ge/2022/06/18/rBOkk9.jpg",
        "description": "Vestibulum quam sapien, varius ut, blandit non.",
        "category": "Laptop",
        "subcategory": [
            "Featured",
            "On Sale"
        ],
        "__v": 1
    }
]`,
      params: `:list => number of page / :limit => number of products in each page`,
      request: `
        axios.get(
          "https://e-commerce-backend-2022.herokuapp.com/product/category/Laptop/1/3")
        .then((res) => {
          return res.data
          })`,
    },

    {
      api: "/product/subcategory/:subcategory/:list/:limit",
      method: "GET",
      description: "Get limited number of subcategory",
      body: null,
      return: `[
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 6,
            "available": true,
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z",
            "pricebefore": 1638
        },
        "_id": "62dbf9762dd27153fa11653e",
        "name": "Sage - Ground",
        "price": 1540,
        "quantity": 4048,
        "image": "https://i.im.ge/2022/06/18/rBOa8M.png",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum.",
        "category": "Accessories",
        "subcategory": [
            "Best Seller",
            "Hot Deals",
            "On Sale"
        ],
        "__v": 5
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.219Z",
            "endDate": "2022-07-23T13:36:54.219Z",
            "pricebefore": 584
        },
        "_id": "62dbf9762dd27153fa116553",
        "name": "Flour - Strong",
        "price": 584,
        "quantity": 960,
        "image": "https://i.im.ge/2022/06/17/rBufB6.jpg",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "category": "Health&GYM",
        "subcategory": [
            "Top Rated",
            "Trending",
            "Hot Deals"
        ],
        "__v": 2
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.221Z",
            "endDate": "2022-07-23T13:36:54.221Z",
            "pricebefore": 605
        },
        "_id": "62dbf9762dd27153fa116562",
        "name": "Chips - Doritos",
        "price": 605,
        "quantity": 4296,
        "image": "https://i.im.ge/2022/06/17/rBuhUD.jpg",
        "description": "Curabitur in libero ut massa volutpat convallis.",
        "category": "Shoes",
        "subcategory": [
            "New Arrival",
            "Hot Deals"
        ],
        "__v": 1
    }
]`,
      params: `:list => number of page / :limit => number of products in each page`,
      request: `
        axios.get(
          "https://e-commerce-backend-2022.herokuapp.com/product/subcategory/Best Seller/1/3")
        .then((res) => {
          return res.data
          })`,
    },
  ],
  reviews: [
    {
      api: "/product/reviews/:id/add",
      method: "POST",
      description: "add review",
      body: {
        review: "string",
        rating: "number between 1 and 5",
      },
      params: ":id => product id",

      return: `{
    "review": "this is a review",
    "rating": 5,
    "name": "user name"
}`,
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/product/reviews/5f9f1b9b9b9b9bb9b9b/add",
         {
        review: "this is a review",
        rating: 5,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/reviews/:id/delete",
      method: "DELETE",
      description: "delete review",
      body: null,
      id: "product id",
      return: "review deleted",
      request: `
      axios.delete(
        "https://e-commerce-backend-2022.herokuapp.com/product/reviews/5f9f1b9b9b9b9b9b9b9b/delete",
        {},{
        withCredentials: true,
      }
      ).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/reviews/:id/update",
      method: "PUT",
      description: "update review",
      body: {
        review: "string",
        rating: "number between 1 and 5",
      },
      id: "product id",
      return: `{
    "review": "this is updated review",
    "rating": 4,
    "name": "user name"
}`,
      request: `
      axios.put(
        "https://e-commerce-backend-2022.herokuapp.com/product/reviews/5f9f1b9b9b9bb9b9b9b/update",
         {
        review: "this is updated review",
        rating: 4,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/reviews/:id",
      method: "GET",
      description: "Get user's review",
      body: null,
      params: ":id => product id",
      return: `[{
        "_id": "631351fd433cae23360c24b5",
        "product": "62dbf9762dd27153fa116538",
        "review": "this is a review",
        "rating": 5,
        "name": "user name",
    }
]`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/product/reviews/5f9f1b9b9b9b9b9b9b",
        {
        withCredentials: true,
      }).then((res) => {
       return res.data
      })`,
    },
  ],
  users: [
    {
      api: "/signup",
      method: "POST",
      description: "Sign up",
      body: {
        name: "string",
        email: "string in the form of email",
        password: `should be string and include at least :
            one number
            one uppercase
            lowercase letter
            one special caracter, 
            and at least 8 or more characters`,
      },
      return: "User created",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/signup",
         {
        name: "user name",
        email: "user email",
        password: "user password",
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/login",
      method: "POST",
      description: "Login",
      body: {
        email: "user email",
        password: "user password",
      },
      return: `"User logged in" and a token will be stored in the cookies`,
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/login",
         {
        email: "user email",
        password: "user password",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/logout",
      method: "GET",
      description: "Logout",
      body: null,
      return: `"User logged out" and the token will be removed from the cookies`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/logout",
        {
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
  ],
  cart: [
    {
      api: "/cart",
      method: "GET",
      description: "Get cart",
      body: null,
      return: `{
        "_id": "62ed21ed9b84b26cae39d532",
    "products": [
        {
            "product": {
                "_id": "62dbf9762dd27153fa116544",
                "name": "Coffee - Irish Cream",
                "price": 1302,
                "image": "https://i.im.ge/2022/06/18/rBOFJF.jpg"
            },
            "quantity": 1,
            "price": 1302,
            "_id": "63016e9ab8ab3caea9931a36"
        }
    ],
    "total": 1302
}`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/cart",
        {
        withCredentials: true,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/add",
      method: "POST",
      description: "Add product to cart",
      body: {
        productId: "product id",
      },
      return: "Added to cart",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/add",
         {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/delete",
      method: "POST",
      description: "Delete product from cart",
      body: {
        productId: "product id",
      },
      return: "array of products in cart",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/delete", 
        {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/increase",
      method: "POST",
      description: "icrease quantity by 1",
      body: {
        productId: "product id",
      },
      return: "Increased",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/increase", 
        {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/decrease",
      method: "POST",
      description: "Decrease quantity by 1",
      body: {
        productId: "product id",
      },
      return: "Decreased",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/decrease", 
        {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/remove",
      method: "POST",
      description: "clear cart",
      body: null,
      return: "Removed all from cart",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/remove",
        {},{
        withCredentials: true,
          },
      ).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/change",
      method: "POST",
      description: "change quantity",
      body: {
        productId: "product id",
        quantity: "number",
      },
      return: "changed",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/cart/change",
         {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
        quantity: 2,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
  ],
  orders: [
    {
      api: "/orders",
      method: "GET",
      description: "Get orders list",
      body: null,
      return: `{
    "_id": "62ed21ed9b84b26cae39d533",
    "orders": []
}`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/orders")
        .then((res) => {
        return res.data
      })`,
    },
    {
      api: "/orders/:id",
      method: "GET",
      description: "Get single order",
      body: null,
      params: ":id => order id",
      return: `{   "products": [ {
            "product": "62dbf9762dd27153fa116538",
            "quantity": 1,
            "price": 2767,
            "_id": "6313731c447c3c5c258aeeab"
        }
    ],
    "to": "location",
    "phone": 123456789,
    "total": 2767,
    "date": "2022-09-03T15:31:14.636Z",
    "payment": "Cash On Delivery",
    "notes": "",
    "_id": "63137342447c3c5c258aeeb2"
}`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/orders/5f9f1b9b9b9bb9b9b",
        {
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/orders/",
      method: "POST",
      description: "complete order",
      body: {
        to: "string that will be location of the order",
        phone: "number",
        payment: "string that will be payment method of the order",
        notes: "string that will be notes of the order and it is optional",
      },
      return: `[{
        "products": [
            {
                "product": "62dbf9762dd27153fa116538",
                "quantity": 1,
                "price": 2767,
                "_id": "6313731c447c3c5c258aeeab"
            }
        ],
        "to": "location",
        "phone": 123456789,
        "total": 2767,
        "date": "2022-09-03T15:31:14.636Z",
        "payment": "Cash On Delivery",
        "notes": "",
        "_id": "63137342447c3c5c258aeeb2"
    }
]`,
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/orders/",
         {
        to: "location",
        phone: 123456789,
        payment: "Cash On Delivery",
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/orders/:id",
      method: "DELETE",
      description: "Delete order",
      body: null,
      params: ":id => order id",
      return: `Order Cancelled`,
      request: `
      axios.delete(
        "https://e-commerce-backend-2022.herokuapp.com/orders/5f9f1b9b9b9b9b9b9b9b9b9b")
        .then((res) => {
        return res.data
      })`,
    },
  ],
  whitelist: [
    {
      api: "whitelist/",
      method: "GET",
      description: "Get whitelist",
      body: null,
      return: `[{
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.218Z",
            "endDate": "2022-07-23T13:36:54.218Z",
            "pricebefore":6211
        },
        "_id": "62dbf9762dd27153fa11654f",
        "name": "Wine - Merlot Vina Carmen",
        "price": 6211,
        "quantity": 3442,
        "image": "https://i.im.ge/2022/06/17/rBuJ1X.jpg",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere.",
        "category": "Health&GYM",
        "subcategory": [
            "Best Seller"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [
            ],
            "rating": 1,
            "numberOfReviews": 8
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z",
            "pricebefore":6396
        },
        "_id": "62dbf9762dd27153fa116539",
        "name": "Oysters - Smoked",
        "price": 6396,
        "quantity": 2581,
        "image": "https://i.im.ge/2022/06/18/rBOidq.png",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 8
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.210Z",
            "endDate": "2022-07-23T13:36:54.210Z",
            "pricebefore":3640
        },
        "_id": "62dbf9762dd27153fa116536",
        "name": "Teriyaki Sauce",
        "price": 3640,
        "quantity": 1868,
        "image": "https://i.im.ge/2022/06/18/rBOju1.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [],
            "rating": 0,
            "numberOfReviews": 0
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.216Z",
            "endDate": "2022-07-23T13:36:54.216Z",
            "pricebefore":9337
        },
        "_id": "62dbf9762dd27153fa116543",
        "name": "Pasta - Orecchiette",
        "price": 9337,
        "quantity": 1101,
        "image": "https://i.im.ge/2022/06/18/rBO1SK.png",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 0
    }
]`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/whitelist/")
      .then((res) => {
      return res.data
      })`,
    },
    {
      api: "/whitelist/:id/add",
      method: "POST",
      description: "Add to whitelist",
      body: null,
      params: ":id => product id",
      return: "add success",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/whitelist/5f9f1b9b9b9b9b9b9b9b9b9b/add")
        .then((res) => {
        return res.data
      })`,
    },
    {
      api: "/whitelist/:id/remove",
      method: "POST",
      description: "Delete from whitelist",
      body: null,
      params: ":id => product id",
      return: "remove success",
      request: `
      axios.post(
        "https://e-commerce-backend-2022.herokuapp.com/whitelist/5f9f1b9b9b9b9bb9b9b/remove",
        {
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
  ],
  categories: [
    {
      api: "categories/",
      method: "GET",
      description: "Get categories",
      body: null,
      return: `[ "Fashion","Smartphone","Laptop", "Camera", "Watches", "Electronics", "TV", "Accessories", "Food", "Health&GYM", "Shoes", "Jewellery", "Motors", "Bags", "Home"]`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/categories/")
      .then((res) => {
        return res.data
      })`,
    },
    // subcategories API
    {
      api: "subcategories/",
      method: "GET",
      description: "Get subcategories",
      body: null,
      return: `["Best Seller","New Arrival","Top Rated","Featured","On Sale","Trending","Hot Deals"]`,
      request: `
      axios.get(
        "https://e-commerce-backend-2022.herokuapp.com/subcategories/")
      .then((res) => {
        return res.data
      })`,
    },
  ],
};
// protected API

const protectedAPIsThatRequireLogin = [
  "/cart",
  "/reviews",
  "/orders",
  "/whitelist",
];

module.exports = { document, protectedAPIsThatRequireLogin };
