import gql from "graphql-tag";

// queries for logged in users
// query to get logged in user's info (needs the token)

export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;