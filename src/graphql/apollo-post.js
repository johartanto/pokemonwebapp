import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_POKEMON = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    abilities{
      ability{
        name
      }
    }
    moves{
      move{
        name
      }
    }
    sprites {
      front_default
    }
    name
    types {
      type{
        name
      }
    }
  }
}
`