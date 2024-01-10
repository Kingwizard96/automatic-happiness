// Define the necessary Query and Mutation types

const typeDefs = `
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookInput: BookInput!): User
        removeBook(bookId: ID!): User
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    input BookInput {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }
  
`;

module.exports = typeDefs;