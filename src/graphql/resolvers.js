import { productsDao as productController } from '../daos/index.js'

export const resolvers = {
  Query: {
    getAllProducts: () => {
      return productController.getAll()
    },
  },
  Mutation: {
    addProduct: async (_, { input }) => {
      return productController.create(input)
    },
    deleteProduct: async (_, { id }) => {
      return productController.delete(id)
    },
    updateProduct: async (_, { id, input }) => {
      return productController.update(id, input)
    },
  },
};
