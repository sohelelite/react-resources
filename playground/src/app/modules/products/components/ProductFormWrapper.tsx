import { useQuery } from "@tanstack/react-query"
import { isNotEmpty, QUERIES } from "../../../../_metronic/helpers"
import { useListView } from "../core/ListViewProvider"
import { getProductById } from "../core/_requests"
import { ProductForm } from "./ProductForm"

const ProductFormWrapper = () => {
    const { itemIdForUpdate } = useListView()
    const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
    const {
        isLoading,
        data: product,
        error
    } = useQuery({
        queryKey: [`${QUERIES.PRODUCTS_LIST}-user-${itemIdForUpdate}`],
        queryFn: () => getProductById(itemIdForUpdate),
        enabled: enabledQuery
    })

    if (!itemIdForUpdate) {
        return <ProductForm isProductLoading={isLoading} product={{ id: undefined }} />
    }

    if (!isLoading && !error && product) {
        return <ProductForm isProductLoading={isLoading} product={product} />
    }

    return null
}

export { ProductFormWrapper }