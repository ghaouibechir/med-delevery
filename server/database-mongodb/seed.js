const db = require("./index.js");
const { order } = require("./schemas.js");

const samplePosts ={
  userId:'bechir'
} 
  



const insertMedecines = function () {
  order
    .create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertMedecines();
