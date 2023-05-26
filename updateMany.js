const { client } = require('./dbConfig');

const updateMany = async () =>{
    try {
        const databse = client.db('learnmongo');
        const users = databse.collection('users');
        const filter = {currency:'BDT'};
       
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const updateDoc = {
            $set: {
                currency: "USD"
            },
        };
        const result = await users.updateMany(filter, updateDoc, options);
        console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    } catch (error) {
        console.log(error);
    }
    finally{
       await client.close();
    }
}

updateMany();