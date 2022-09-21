export const typeDef = `

type Query {
    getAllProducts: [Product]
}

type Mutation {
    addProduct(input: ProductInput): Product
    deleteProduct(id: ID!): Product
    updateProduct(id: ID!, input: ProductInput): Product
}


type Product {
    _id: ID
    name: String
    description: String
    code: String
    thumbnail: String
    price: Float
    stock: Int
}

input ProductInput {
    name: String
    description: String
    code: String
    thumbnail: String
    price: Float
    stock: Int
}

`