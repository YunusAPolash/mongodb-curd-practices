const { client } = require('./dbConfig');

const findData = async () =>{
    try {
        const databse = client.db('learnmongo');
        const users = databse.collection('users');
        const query = {email:'yunus.a.polash@gmail.com'};
        const result = await users.findOne(query); 
        console.log(result)
    } catch (error) {
        console.log(error);
    }
    finally{
       await client.close();
    }
}

findData();