import { ID, Response } from "../../../../_metronic/helpers"

export type Product = {
    id?: ID,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: {
        rate?: number
        count?: number
    }
}

export type ProductsQueryResponse = Response<Array<Product>>

export const initialProducts: Product = {
    title: 'Product Name',
    price: 0,
    description: 'Product Description',
    category: 'Category'
}