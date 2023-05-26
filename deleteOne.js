const { client } = require('./dbConfig');

const deleteOne = async () =>{
    try {
        const databse = client.db('learnmongo');
        const books = databse.collection('books');
        const query = {author:"George Orwell"};
        const result = await books.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          } 
        
    } catch (error) {
        console.log(error);
    }
    finally{
       await client.close();
    }
}

deleteOne();