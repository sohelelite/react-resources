import axios, { AxiosResponse } from "axios"
import { Product, ProductsQueryResponse } from "./_models"
import { ID, Response } from "../../../../_metronic/helpers"

const API_URL: any = import.meta.env.VITE_FAKE_API_URL
const PRODUCT_URL = `${API_URL}/products`

const getProducts = (query: string): Promise<ProductsQueryResponse> => {
    return axios
        .get(`${PRODUCT_URL}?${query}`)
        .then((d: AxiosResponse<ProductsQueryResponse>) => d.data)
}

const getProductById = (id: ID): Promise<Product | undefined> => {
    return axios
        .get(`${PRODUCT_URL}/${id}`)
        .then((response: AxiosResponse<Response<Product>>) => response.data)
        .then((response: Response<Product>) => response.data)
}

const createProduct = (product: Product): Promise<Product | undefined> => {
    return axios
        .post(`${PRODUCT_URL}`, product)
        .then((response: AxiosResponse<Response<Product>>) => response.data)
        .then((response: Response<Product>) => response.data)
}

const updateProduct = (product: Product): Promise<Product | undefined> => {
    return axios
        .put(`${PRODUCT_URL}/${product.id}`, product)
        .then((response: AxiosResponse<Response<Product>>) => response.data)
        .then((response: Response<Product>) => response.data)
}

const deleteProduct = (productId: ID): Promise<void> => {
    return axios.delete(`${PRODUCT_URL}/${productId}`).then(() => { })
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}