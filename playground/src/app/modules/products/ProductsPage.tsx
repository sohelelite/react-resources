import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { PageLink, PageTitle } from "../../../_metronic/layout/core"
import { ProductsListWrapper } from "./ProductsList"

const productBreadcrumbs: Array<PageLink> = [
    {
        title: 'Products',
        path: '/apps/products',
        isSeparator: false,
        isActive: false
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false
    }
]

const ProductsPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path="list"
                    element={
                        <>
                            <PageTitle breadcrumbs={productBreadcrumbs}>Products</PageTitle>
                            <ProductsListWrapper />
                        </>
                    } />
            </Route>
            <Route index element={<Navigate to='/apps/products' />} />
        </Routes>
    )
}

export default ProductsPage