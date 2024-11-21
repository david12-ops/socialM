import { gql } from "graphql-tag";

export const GET_SUPP = gql`
    query SuppData{
        suplierData{
            result
        }
    }
`

export const BINGO = gql`
    mutation Bingo ($widthPack:Int!, $weightPack:Int!){
        BingoSupPac (width: $widthPack, weight: $weightPack){
            Weight
            Width
        }
    }
` 