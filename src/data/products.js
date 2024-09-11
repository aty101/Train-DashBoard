const dashboardData = {
    categories: [
      {
        id: 1,
        name: "Shirts",
        items: [
          {
            id: 101,
            name: "Classic White Shirt",
            price: 25.99,
            stock: 100,
            description: "A classic white shirt with a comfortable fit.",
            sizes: ["S", "M", "L", "XL"],
            colors: ["White", "Blue", "Black"],
            image: "url_to_image_1",
          },
          {
            id: 102,
            name: "Striped Casual Shirt",
            price: 29.99,
            stock: 50,
            description: "A casual shirt with stripes, perfect for everyday wear.",
            sizes: ["M", "L"],
            colors: ["Red", "Green"],
            image: "url_to_image_2",
          },
        ],
      },
      {
        id: 2,
        name: "Pants",
        items: [
          {
            id: 201,
            name: "Slim Fit Jeans",
            price: 49.99,
            stock: 75,
            description: "Slim fit jeans made from high-quality denim.",
            sizes: [28, 30, 32, 34, 36],
            colors: ["Blue", "Black"],
            image: "url_to_image_3",
          },
          {
            id: 202,
            name: "Chino Pants",
            price: 39.99,
            stock: 60,
            description: "Stylish chino pants available in various colors.",
            sizes: [30, 32, 34, 36],
            colors: ["Khaki", "Navy", "Olive"],
            image: "url_to_image_4",
          },
        ],
      },
      {
        id: 3,
        name: "Sneakers",
        items: [
          {
            id: 301,
            name: "Running Sneakers",
            price: 59.99,
            stock: 80,
            description: "Lightweight running sneakers with superior grip.",
            sizes: [7, 8, 9, 10, 11],
            colors: ["White", "Black", "Gray"],
            image: "url_to_image_5",
          },
          {
            id: 302,
            name: "High-Top Sneakers",
            price: 69.99,
            stock: 45,
            description: "High-top sneakers with a trendy design.",
            sizes: [8, 9, 10, 11],
            colors: ["Red", "Black"],
            image: "url_to_image_6",
          },
        ],
      },
    ],
  };
  
  export default dashboardData;
  