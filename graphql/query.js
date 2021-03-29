import gql from 'graphql-tag';

export const messageQuery = gql`
query messagequery {
    messages {
      greetings
      id
    }
  }
`