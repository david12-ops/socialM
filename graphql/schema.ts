import { gql } from 'graphql-tag';

export const typeDefs = gql`

    type Query {
        suplierData: QuerySuppData!
    }

    type Mutation {
        BingoSupPac(
            width: Int!
            weight: Int!
        ): MutBing
    }

    type QuerySuppData {
        result:String
    }

    type MutBing{
        Weight:Int, 
        Width:Int
    }

    scalar JSON

`;