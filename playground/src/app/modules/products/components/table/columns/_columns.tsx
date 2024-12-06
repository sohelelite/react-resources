import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../../core/_models";
import { ProductCustomHeader } from "./ProductCustomHeader";
import { ProductActionCell } from "./ProductActionsCell";

const productsColumns: ColumnDef<Product>[] = [
    {
        header: (props) => <ProductCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
        id: 'name',
        accessorKey: 'title'
    },
    {
        header: (props) => <ProductCustomHeader tableProps={props} title="Price" className="min-w-125px" />,
        id: 'price',
        accessorKey: 'price'
    },
    {
        header: (props) => <ProductCustomHeader tableProps={props} title="Category" className="min-w-125px" />,
        id: 'category',
        accessorKey: 'category'
    },
    {
        header: (props) => <ProductCustomHeader tableProps={props} title="Action" className="min-w-125px" />,
        id: 'actions',
        cell: (info) => <ProductActionCell id={info.row.original.id} />
    }
]

export { productsColumns }