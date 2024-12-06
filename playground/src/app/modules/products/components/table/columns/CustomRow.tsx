import { flexRender, Row } from "@tanstack/react-table"
import { Product } from "../../../core/_models"
import { FC } from "react"
import clsx from "clsx"

type Props = {
    row: Row<Product>
}

const CustomRow: FC<Props> = ({ row }) => (
    <tr>
        {row.getVisibleCells().map((cell) => {
            return (
                <td
                    key={cell.id}
                    className={clsx({ 'text-end min-w-100px': cell.column.id === 'actions' })}
                >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
            )
        })}
    </tr>
)

export { CustomRow }