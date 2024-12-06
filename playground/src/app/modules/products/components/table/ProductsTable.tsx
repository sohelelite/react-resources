import { useMemo } from "react"
import { useQueryResponseData, useQueryResponseLoading } from "../../core/QueryResponseProvider"
import { productsColumns } from "./columns/_columns"
import { getCoreRowModel, Row, useReactTable } from "@tanstack/react-table"
import { KTCardBody } from "../../../../../_metronic/helpers"
import { CustomHeaderColumn } from "../../../apps/user-management/users-list/table/columns/CustomHeaderColumn"
import { Product } from "../../core/_models"
import { CustomRow } from "./columns/CustomRow"
import { ProductsListPagination } from "../ProductsListPagination"
import { UsersListLoading } from "../../../apps/user-management/users-list/components/loading/UsersListLoading"

const ProductsTable = () => {
    const products = useQueryResponseData()
    const isLoading = useQueryResponseLoading()
    const data = useMemo(() => products, [products])
    const columns = useMemo(() => productsColumns, [])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (

        <KTCardBody className='py-4'>
            <div className='table-responsive'>
                <table
                    id='tblProducts'
                    className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
                >
                    <thead>
                        {table.getHeaderGroups().map((columnGroup) => (
                            <tr key={columnGroup.id} className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                                {columnGroup.headers.map((header) => (
                                    <CustomHeaderColumn key={header.id} header={header} />
                                ))}
                            </tr>)
                        )}
                    </thead>
                    <tbody className='text-gray-600 fw-bold'>
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row: Row<Product>) => {
                                return <CustomRow key={row.id} row={row} />
                            })
                        ) : (
                            <tr>
                                <td colSpan={7}>
                                    <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                                        No matching records found
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ProductsListPagination />
            {isLoading && <UsersListLoading />}
        </KTCardBody>
    )
}

export { ProductsTable }
