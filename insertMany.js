const { client } = require('./dbConfig');

const insertManyData = async () =>{
    try {
        const databse = client.db('learnmongo');
        const books = databse.collection('books');
        const doc = [
            {
              title: "1984",
              author: "George Orwell",
              publicationYear: 1949,
              genre: "Dystopian Fiction",
              synopsis: "Set in a totalitarian society, '1984' explores themes of government surveillance, censorship, and the loss of individual freedom. It follows the story of Winston Smith, a man who rebels against the oppressive regime.",
              price: 12.99,
              rating: 4.5
            },
            {
              title: "To Kill a Mockingbird",
              author: "Harper Lee",
              publicationYear: 1960,
              genre: "Fiction",
              synopsis: "Set in the 1930s in a small town in Alabama, 'To Kill a Mockingbird' examines racial injustice through the eyes of Scout Finch. The novel delves into themes of morality, compassion, and the consequences of prejudice.",
              price: 9.99,
              rating: 4.8
            },
            {
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              publicationYear: 1925,
              genre: "Fiction",
              synopsis: "Set in the 1920s, 'The Great Gatsby' explores themes of wealth, love, and the American Dream. The story follows Jay Gatsby and his obsession with the past as he tries to win back the love of Daisy Buchanan.",
              price: 14.99,
              rating: 4.2
            },
            {
              title: "Pride and Prejudice",
              author: "Jane Austen",
              publicationYear: 1813,
              genre: "Romance",
              synopsis: "Set in the 19th century, 'Pride and Prejudice' is a classic romance novel that revolves around the themes of love, marriage, and societal expectations. It follows the story of Elizabeth Bennet as she navigates her relationships and confronts her own prejudices.",
              price: 10.99,
              rating: 4.7
            },
            {
              title: "The Hobbit",
              author: "J.R.R. Tolkien",
              publicationYear: 1937,
              genre: "Fantasy",
              synopsis: "As a prequel to 'The Lord of the Rings,' 'The Hobbit' follows Bilbo Baggins, a hobbit who embarks on an unexpected adventure with a group of dwarves and the wizard Gandalf. It explores themes of bravery, friendship, and the pursuit of treasure.",
              price: 11.99,
              rating: 4.6
            }
          ];

          const result = await books.insertMany(doc); 
          console.log(`total ${result.insertedCount} data added successfully`);

    } catch (error) {
        console.log(error)
    }finally{
        await client.close()
    }
}
insertManyData();