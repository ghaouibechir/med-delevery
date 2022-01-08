
const db  = require('./index.js');
const {user} = require('./schemas.js');

const samplePosts =  {
name : 'amir',
phoneNumber:24444422 ,
email :'amir@gmail.com ',
adress:'mourouj 5',
username:'amiros' ,
password : 'amir123' 

  }
 



const insertMedecines = function() {
  user.create(samplePosts)
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