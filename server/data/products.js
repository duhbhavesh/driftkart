const faker = require('faker');

faker.seed(123);
const products = [...Array(50)].map((item) => ({
   name: faker.commerce.productName(),
   image: faker.random.image(),
   price: faker.commerce.price(),
   brand: faker.lorem.word(),
   inStock: faker.random.boolean(),
   fastDelivery: faker.random.boolean(),
   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));

module.exports = products;
