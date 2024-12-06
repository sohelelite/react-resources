import { HeaderContext } from "@tanstack/react-table"
import { Product } from "../../../core/_models"
import { FC, useMemo } from "react"
import { useQueryRequest } from "../../../../apps/user-management/users-list/core/QueryRequestProvider"
import { initialQueryState } from "../../../../../../_metronic/helpers"
import clsx from "clsx"

type Props = {
    className?: string
    title?: string
    tableProps: HeaderContext<Product, unknown>
}

const ProductCustomHeader: FC<Props> = ({ className, title, tableProps }) => {
    const id = tableProps.column.id
    const { state, updateState } = useQueryRequest()

    const isSelectedForSorting = useMemo(() => {
        return state.sort && state.sort === id
    }, [state, id])
    const order: 'asc' | 'desc' | undefined = useMemo(() => state.order, [state])

    const sortColumn = () => {
        // avoid sorting for these columns
        if (id === 'actions' || id === 'selection') {
            return
        }

        if (!isSelectedForSorting) {
            // enable sort asc
            updateState({ sort: id, order: 'asc', ...initialQueryState })
            return
        }

        if (isSelectedForSorting && order !== undefined) {
            if (order === 'asc') {
                // enable sort desc
                updateState({ sort: id, order: 'desc', ...initialQueryState })
                return
            }

            // disable sort
            updateState({ sort: undefined, order: undefined, ...initialQueryState })
        }
    }

    return (
        <td
            className={clsx(
                className,
                isSelectedForSorting && order !== undefined && `table-sort-${order}`
            )}
            style={{ cursor: 'pointer' }}
            onClick={sortColumn}
        >
            {title}
        </td>
    )
}

export { ProductCustomHeader }