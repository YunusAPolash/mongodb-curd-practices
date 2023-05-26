const { client } = require('./dbConfig');

const deletedMany = async () =>{
    try {
        const databse = client.db('learnmongo');
        const books = databse.collection('books');
        const query = {author:"J.R.R. Tolkien"};
        const result = await books.deleteMany(query);
        if (result.deletedCount !== 0) {
            console.log("Deleted " + result.deletedCount + " documents");
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

deletedMany();