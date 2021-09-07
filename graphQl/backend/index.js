const { ApolloServer, gql } = require('apollo-server');
const { mainCards,animals,categories } = require('./db')

const typeDefs = gql`
type MainCard{
    title:String!
    image:String!
   
}
type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category
}

type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
}

    type Query {
    
    mainCards:[MainCard]
    animals:[Animal!]
    category(slug: String!): Category
    }
`


// const mainCards = [
//     {
//         title: "tiger",
//         image: "stephen grider"
//     },
//     {
//         title: "lion",
//         image: "Maximallian swezger"
//     }
// ]

const resolvers = {
    Query: {
        mainCards: () => mainCards,
        animals: () => animals

    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})