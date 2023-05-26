const { client } = require('./dbConfig');

const insertOne = async () =>{
    try {
        const databse = client.db('learnmongo');
        const users = databse.collection('users');
        const doc = {
            name: "Hossain",
            email: "hossain@gmail.com",
            phone: "01303260849",
            username: "hossain",
            country: "BD",
            currency: "BDT"
        };
        const result = await users.insertOne(doc); 
        console.log(`A document was inserted with the id: ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    }
    finally{
       await client.close();
    }
}

insertOne();