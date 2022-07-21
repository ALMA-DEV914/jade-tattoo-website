const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
 type Booking {
    _id: ID
    bookingText: String
    createdAt: String
    username: String
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    photo:String
    friendCount: Int
    thoughts: [Thought]
    bookings:[Booking]
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }
    type Query {
      me: User
      users: [User]
      user(username: String!): User
      thoughts(username: String): [Thought]
      bookings(username: String): [Booking]
      thought(_id: ID!): Thought
      booking(_id: ID): Booking
      }

      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addThought(thoughtText: String!): Thought
        addBooking(bookingText: String!): Booking
        addReaction(thoughtId: ID!, reactionBody: String!): Thought
        addFriend(friendId: ID!): User
      }
  
`;

// export the typeDefs
module.exports = typeDefs;