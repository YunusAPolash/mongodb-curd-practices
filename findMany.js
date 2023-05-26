const { client } = require('./dbConfig');

const findData = async () =>{
    try {
        const databse = client.db('learnmongo');
        const books = databse.collection('books');
        const query = {};
        const cursor = await books.find(query); 

        if ((await books.countDocuments(query)) === 0) {
            console.log("No documents found!");
        }else{
            const allbooks = await cursor.toArray();
            allbooks.forEach(book => {
                console.log(book); 
            });
        }
         
        
    } catch (error) {
        console.log(error);
    }
    finally{
       await client.close();
    }
}

findData();