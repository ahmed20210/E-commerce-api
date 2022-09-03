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
            "endDate": "2022-07-23T13:36:54.210Z"
        },
        "_id": "62dbf9762dd27153fa116536",
        "name": "Teriyaki Sauce",
        "price": 3640,
        "quantity": 1868,
        "image": "https://i.im.ge/2022/06/18/rBOju1.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "category": "Laptop",
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
            "startDate": "2022-07-23T13:36:54.211Z",
            "endDate": "2022-07-23T13:36:54.211Z"
        },
        "_id": "62dbf9762dd27153fa116537",
        "name": "Cinnamon Rolls",
        "price": 4730,
        "quantity": 4337,
        "image": "https://i.im.ge/2022/06/18/rBO5fP.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "category": "Smartphone",
        "subcategory": [
            "Featured"
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
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z"
        },
        "_id": "62dbf9762dd27153fa116538",
        "name": "Mousse - Banana Chocolate",
        "price": 2767,
        "quantity": 2187,
        "image": "https://i.im.ge/2022/06/18/rBO0Np.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "category": "Food",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [
                {
                    "_id": "62ebaf5575ddadeff1882adb",
                    "review": "good",
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
            "rating": 4,
            "numberOfReviews": 2
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z"
        },
        "_id": "62dbf9762dd27153fa116539",
        "name": "Oysters - Smoked",
        "price": 6396,
        "quantity": 2581,
        "image": "https://i.im.ge/2022/06/18/rBOidq.png",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
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
            "startDate": "2022-07-23T13:36:54.213Z",
            "endDate": "2022-07-23T13:36:54.213Z"
        },
        "_id": "62dbf9762dd27153fa11653a",
        "name": "Dill Weed - Dry",
        "price": 5142,
        "quantity": 877,
        "image": "https://i.im.ge/2022/06/18/rBOUJC.png",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [
                {
                    "_id": "62fb768231bf6e5007deb2fd",
                    "review": "",
                    "rating": 3,
                    "name": "am",
                    "__v": 0
                }
            ],
            "rating": 3,
            "numberOfReviews": 1
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.213Z",
            "endDate": "2022-07-23T13:36:54.213Z"
        },
        "_id": "62dbf9762dd27153fa11653b",
        "name": "Tomato Paste",
        "price": 3601,
        "quantity": 968,
        "image": "https://i.im.ge/2022/06/18/rBOLE4.png",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "category": "Accessories",
        "subcategory": [
            "Best Seller"
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
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z"
        },
        "_id": "62dbf9762dd27153fa11653c",
        "name": "Pie Shell - 9",
        "price": 685,
        "quantity": 1131,
        "image": "https://i.im.ge/2022/06/18/rBOIID.png",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "category": "Accessories",
        "subcategory": [
            "Best Seller"
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
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z"
        },
        "_id": "62dbf9762dd27153fa11653d",
        "name": "Bread - Bistro White",
        "price": 4617,
        "quantity": 771,
        "image": "https://i.im.ge/2022/06/18/rBODMY.png",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictums.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
      ]`,
      body: null,
      request: `
      axios.get("/product").then((res) => {
        return res.data;
        });
        `,
    },
    {
      api: "/product/:id",
      method: "GET",
      description: "Get product by id",
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
        "startDate": "2022-07-23T13:36:54.214Z",
        "endDate": "2022-07-23T13:36:54.214Z"
    },
    "_id": "62dbf9762dd27153fa11653d",
    "name": "Bread - Bistro White",
    "price": 4617,
    "quantity": 771,
    "image": "https://i.im.ge/2022/06/18/rBODMY.png",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "category": "Accessories",
    "subcategory": [
        "Top Rated"
    ],
    "__v": 0
}
      ]`,
      body: null,
      request: `
      axios.get("/product/62dbf9762dd27153fa11653d").then((res) => {
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
            "endDate": "2022-07-23T13:36:54.237Z"
        },
        "_id": "62dbf9762dd27153fa1165c6",
        "name": "Onion Powder",
        "price": 8889,
        "quantity": 1923,
        "image": "https://i.im.ge/2022/06/18/rBOp98.png",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus",
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
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.237Z",
            "endDate": "2022-07-23T13:36:54.237Z"
        },
        "_id": "62dbf9762dd27153fa1165c7",
        "name": "Miso - Soy Bean Paste",
        "price": 9374,
        "quantity": 2758,
        "image": "https://i.im.ge/2022/06/18/rBOHFX.png",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "category": "Laptop",
        "subcategory": [
            "Featured"
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
            "endDate": "2022-07-23T13:36:54.239Z"
        },
        "_id": "62dbf9762dd27153fa1165c8",
        "name": "Beer - Camerons Auburn",
        "price": 8846,
        "quantity": 4269,
        "image": "https://i.im.ge/2022/06/18/rBOkk9.jpg",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "category": "Laptop",
        "subcategory": [
            "Featured"
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
            "endDate": "2022-07-23T13:36:54.239Z"
        },
        "_id": "62dbf9762dd27153fa1165c9",
        "name": "Mousse - Banana Chocolate",
        "price": 4049,
        "quantity": 3303,
        "image": "https://i.im.ge/2022/06/18/rBOfPK.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui",
        "category": "Laptop",
        "subcategory": [
            "Featured"
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
            "endDate": "2022-07-23T13:36:54.239Z"
        },
        "_id": "62dbf9762dd27153fa1165ca",
        "name": "Pineapple - Golden",
        "price": 3838,
        "quantity": 3260,
        "image": "https://i.im.ge/2022/06/18/rBOVqF.jpg",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
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
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.240Z",
            "endDate": "2022-07-23T13:36:54.240Z"
        },
        "_id": "62dbf9762dd27153fa1165cb",
        "name": "Squid - U 5",
        "price": 9065,
        "quantity": 3042,
        "image": "https://i.im.ge/2022/06/18/rBOZn6.png",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "category": "Laptop",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    }
      ]`,
      body: null,
      request: `
      axios.get("/product/category/Laptop").then((res) => {
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
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z"
        },
        "_id": "62dbf9762dd27153fa116538",
        "name": "Mousse - Banana Chocolate",
        "price": 2767,
        "quantity": 2187,
        "image": "https://i.im.ge/2022/06/18/rBO0Np.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
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
            "startDate": "2022-07-23T13:36:54.213Z",
            "endDate": "2022-07-23T13:36:54.213Z"
        },
        "_id": "62dbf9762dd27153fa11653a",
        "name": "Dill Weed - Dry",
        "price": 5142,
        "quantity": 877,
        "image": "https://i.im.ge/2022/06/18/rBOUJC.png",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
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
            "startDate": "2022-07-23T13:36:54.214Z",
            "endDate": "2022-07-23T13:36:54.214Z"
        },
        "_id": "62dbf9762dd27153fa11653d",
        "name": "Bread - Bistro White",
        "price": 4617,
        "quantity": 771,
        "image": "https://i.im.ge/2022/06/18/rBODMY.png",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 0
    },
    {
        "rate": {
            "reviews": [
                {
                    "_id": "62ebb0cc75ddadeff1882afa",
                    "review": "good",
                    "rating": 4,
                    "name": "ziad",
                    "__v": 0
                }
            ],
            "rating": 4,
            "numberOfReviews": 1
        },
        "Sale": {
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.215Z",
            "endDate": "2022-07-23T13:36:54.215Z"
        },
        "_id": "62dbf9762dd27153fa116540",
        "name": "Chicken - Diced, Cooked",
        "price": 2996,
        "quantity": 4574,
        "image": "https://i.im.ge/2022/06/18/rBOqr8.jpg",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
        "category": "Accessories",
        "subcategory": [
            "Top Rated"
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
            "value": 0,
            "available": false,
            "startDate": "2022-07-23T13:36:54.217Z",
            "endDate": "2022-07-23T13:36:54.217Z"
        },
        "_id": "62dbf9762dd27153fa116547",
        "name": "Water - Spring Water 500ml",
        "price": 1766,
        "quantity": 4546,
        "image": "https://i.im.ge/2022/06/18/rBOlMS.jpg",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
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
            "startDate": "2022-07-23T13:36:54.218Z",
            "endDate": "2022-07-23T13:36:54.218Z"
        },
        "_id": "62dbf9762dd27153fa116552",
        "name": "Wooden Mop Handle",
        "price": 4946,
        "quantity": 4885,
        "image": "https://i.im.ge/2022/06/17/rBuzaF.jpg",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "category": "Health&GYM",
        "subcategory": [
            "Top Rated"
        ],
        "__v": 1
    },
      ]`,
      body: null,
      request: `
      axios.get("/product/subcategory/Top Rated").then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/search/:search",
      method: "GET",
      description: "Get products by search",
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
            "startDate": "2022-07-23T13:36:54.212Z",
            "endDate": "2022-07-23T13:36:54.212Z"
        },
        "_id": "62dbf9762dd27153fa116538",
        "name": "Mousse - Banana Chocolate",
        "price": 2767,
        "quantity": 2187,
        "image": "https://i.im.ge/2022/06/18/rBO0Np.png",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
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
            "endDate": "2022-07-23T13:36:54.239Z"
        },
        "_id": "62dbf9762dd27153fa1165c9",
        "name": "Mousse - Banana Chocolate",
        "price": 4049,
        "quantity": 3303,
        "image": "https://i.im.ge/2022/06/18/rBOfPK.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
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
      axios.get("/product/search/Banana Chocolate").then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/sort/:sort",
      method: "GET",
      description: "Get products by sort",
      return:
        "Array of all the products sorted by what you choose price or name .....",
      body: null,
      request: `
      axios.get("/product/sort/price").then((res) => {
        return res.data
        })`,
    },
  ],
  reviews: [
    {
      api: "/product/reviews/:id/add",
      method: "POST",
      description: "add review to product",
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
      axios.post("/product/reviews/5f9f1b9b9b9b9b9b9b9b9b9b/add", {
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
      description: "delete review from product",
      body: null,
      id: "product id",
      return: "review deleted",
      request: `
      axios.delete("/product/reviews/5f9f1b9b9b9b9b9b9b9b9b9b/delete",{},{
        withCredentials: true,
      }
      ).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/product/reviews/:id/update",
      method: "PUT",
      description: "update review from product",
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
      axios.put("/product/reviews/5f9f1b9b9b9b9b9b9b9b9b9b/update", {
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
      description: "Get review of current user",
      body: null,
      params: ":id => product id",
      return: `[
    {
        "_id": "631351fd433cae23360c24b5",
        "product": "62dbf9762dd27153fa116538",
        "review": "this is a review",
        "rating": 5,
        "name": "user name",
    }
]`,
      request: `
      axios.get("/product/reviews/5f9f1b9b9b9b9b9b9b9b9b9b",{
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
        password:
          "string including at least one number and one uppercase and lowercase letter and one special caracter, and at least 8 or more characters",
      },
      return: "User created",
      request: `
      axios.post("/signup", {
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
      axios.post("/login", {
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
      axios.get("/logout",{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
  ],
  cart: [
    {
      api: "/cart/add",
      method: "POST",
      description: "Add product to cart",
      body: {
        productId: "product id",
      },
      return: "Added to cart",
      request: `
      axios.post("/cart/add", {
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
      axios.post("/cart/delete", {
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
      description:
        "Increase 1 to product quantity in the cart and product must be already in the cart",
      body: {
        productId: "product id",
        quantity: "number",
      },
      return: "Increased",
      request: `
      axios.post("/cart/increase", {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
        quantity: 2,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/decrease",
      method: "POST",
      description:
        "Decrease product quantity in cart that is already in the cart",
      body: {
        productId: "product id",
        quantity: "number",
      },
      return: "Decreased",
      request: `
      axios.post("/cart/decrease", {
        productId: "5f9f1b9b9b9b9b9b9b9b9b9b",
        quantity: 2,
      },{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/cart/remove",
      method: "POST",
      description: "Remove all products from cart",
      body: null,
      return: "Removed all from cart",
      request: `
      axios.post("/cart/remove",{},{
        withCredentials: true,
          },
      ).then((res) => {
        return res.data
      })`,
    },
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
      axios.get("/cart",{
        withCredentials: true,
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
      description: "Get all orders",
      body: null,
      return: `{
    "_id": "62ed21ed9b84b26cae39d533",
    "orders": []
}`,
      request: `
      axios.get("/orders").then((res) => {
        return res.data
      })`,
    },
    {
      api: "/orders/:id",
      method: "GET",
      description: "Get order by id",
      body: null,
      params: ":id => order id",
      return: `{
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
}`,
      request: `
      axios.get("/orders/5f9f1b9b9b9b9b9b9b9b9b9b",{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "/orders/",
      method: "POST",
      description: "Create order",
      body: {
        to: "string that will be location of the order",
        phone: "number",
        payment: "string that will be payment method of the order",
        notes: "string that will be notes of the order and it is optional",
      },
      return: `[
    {
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
      axios.post("/orders/", {
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
      axios.delete("/orders/5f9f1b9b9b9b9b9b9b9b9b9b").then((res) => {
        return res.data
      })`,
    },
  ],
  whitelist: [
    {
      api: "/whitelist/:id/add",
      method: "POST",
      description: "Add product to whitelist",
      body: null,
      params: ":id => product id",
      return: "add success",
      request: `
      axios.post("/whitelist/5f9f1b9b9b9b9b9b9b9b9b9b/add").then((res) => {
        return res.data
      })`,
    },
    {
      api: "/whitelist/:id/remove",
      method: "POST",
      description: "Delete product from whitelist",
      body: null,
      params: ":id => product id",
      return: "remove success",
      request: `
      axios.post("/whitelist/5f9f1b9b9b9b9b9b9b9b9b9b/remove",{
        withCredentials: true,
      }).then((res) => {
        return res.data
      })`,
    },
    {
      api: "whitelist/",
      method: "GET",
      description: "Get whitelist",
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
            "startDate": "2022-07-23T13:36:54.218Z",
            "endDate": "2022-07-23T13:36:54.218Z"
        },
        "_id": "62dbf9762dd27153fa11654f",
        "name": "Wine - Merlot Vina Carmen",
        "price": 6211,
        "quantity": 3442,
        "image": "https://i.im.ge/2022/06/17/rBuJ1X.jpg",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
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
            "endDate": "2022-07-23T13:36:54.212Z"
        },
        "_id": "62dbf9762dd27153fa116539",
        "name": "Oysters - Smoked",
        "price": 6396,
        "quantity": 2581,
        "image": "https://i.im.ge/2022/06/18/rBOidq.png",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus",
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
            "endDate": "2022-07-23T13:36:54.210Z"
        },
        "_id": "62dbf9762dd27153fa116536",
        "name": "Teriyaki Sauce",
        "price": 3640,
        "quantity": 1868,
        "image": "https://i.im.ge/2022/06/18/rBOju1.png",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
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
            "endDate": "2022-07-23T13:36:54.216Z"
        },
        "_id": "62dbf9762dd27153fa116543",
        "name": "Pasta - Orecchiette",
        "price": 9337,
        "quantity": 1101,
        "image": "https://i.im.ge/2022/06/18/rBO1SK.png",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "category": "Accessories",
        "subcategory": [
            "New Arrival"
        ],
        "__v": 0
    }
]`,
      request: `
      axios.get("/whitelist/").then((res) => {
      return res.data
      })`,
    },
  ],
  categories: [
    {
      api: "categories/",
      method: "GET",
      description: "Get all categories",
      body: null,
      return: `[
    "Fashion",
    "Smartphone",
    "Laptop",
    "Camera",
    "Watches",
    "Electronics",
    "TV",
    "Accessories",
    "Food",
    "Health&GYM",
    "Shoes",
    "Jewellery",
    "Motors",
    "Bags",
    "Home"
]`,
      request: `
      axios.get("/categories/").then((res) => {
        return res.data
      })`,
    },
    // subcategories API
    {
      api: "subcategories/",
      method: "GET",
      description: "Get all subcategories",
      body: null,
      return: `[
    "Best Seller",
    "New Arrival",
    "Top Rated",
    "Featured",
    "On Sale",
    "Trending",
    "Hot Deals"
]`,
      request: `
      axios.get("/subcategories/").then((res) => {
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
