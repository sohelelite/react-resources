import { KTCard } from "../../../_metronic/helpers"
import { Content } from "../../../_metronic/layout/components/content"
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar"
import { QueryRequestProvider } from "../apps/user-management/users-list/core/QueryRequestProvider"
import { ProductsTable } from "./components/table/ProductsTable"
import { ListViewProvider, useListView } from "./core/ListViewProvider"
import { QueryResponseProvider } from "./core/QueryResponseProvider"

const ProductsList = () => {
    const { itemIdForUpdate } = useListView()
    return (
        <>
            <KTCard>
                <ProductsTable />
            </KTCard>
        </>
    )
}

const ProductsListWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <ToolbarWrapper />
                <Content>
                    <ProductsList />
                </Content>
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export { ProductsListWrapper }