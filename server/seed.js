const db = require('./database-mongodb/index.js');
const {order} = require ("./database-mongodb/schemas.js")


const orders=[
    {
    pharmacyId:"61e157d6c533611a4fa86901" ,
    userId:"61defffe1eeb5e7305406168" ,
    medecineId:["61d8db6189dce74b62e598f9", "61d8db6189dce74b62e598fe", "61d8db6189dce74b62e598fb"],
    totalPrice:30,
    prescription:"false",
    response:"",
    confirmation:false, 
}
];
const insertOrder = function (){
    order.create(orders)
    .then(()=>{
        console.log("Database seeded successfully")
    })
    .catch((error) => {
        console.log("error seeding the database: ", error);
      })
      .finally(() => {
        db.close();
      });
};

insertOrder();