import { createColumnHelper, getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import data from '../assets/stockData.json'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { useState } from 'react'

export default function Section4() {
    type Stock = {
        '#': number,
        symbol: string,
        LTP: number,
        '%change': number,
        open: number,
        High: number,
        Low: number,
        'Qty.': number,
        PClose: number,
        'Diff.': number
    }
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const columnHelper = createColumnHelper<Stock>()
    const columns: ColumnDef<Stock, any>[] = [
        columnHelper.accessor(row => row['#'], { id: '#', header: '#', cell: info => info.getValue() }),
        columnHelper.accessor('symbol', { header: 'Symbol' }),
        columnHelper.accessor('LTP', { header: 'LTP' }),
        columnHelper.accessor(row => row['%change'], {
            id: '%change',
            header: '%Change',
            cell: info => {
            const val = info.getValue();
            const isPositive = val > 0;

            const colorClass = isPositive
                ? "text-[#22C55E] font-medium"   // green for up
                : "text-[#FF3A33] font-medium";  // red for down

            return (
                <span className={`flex items-center gap-1 ${colorClass}`}>
                {isPositive ? <FaCaretUp /> : <FaCaretDown />}
                {val}%
                </span>
            );
            }
        }),
        columnHelper.accessor('open', { header: 'Open' }),
        columnHelper.accessor('High', { header: 'High' }),
        columnHelper.accessor('Low', { header: 'Low' }),
        columnHelper.accessor(row => row['Qty.'], { id: 'Qty.', header: 'Qty.' }),
        columnHelper.accessor('PClose', { header: 'PClose' }),
        columnHelper.accessor(row => row['Diff.'], { 
            id: 'Diff.', 
            header: 'Diff.',
            cell: info => {
                const val = info.getValue() as number
                return (
                    <span className={val > 0 ? 'text-[#22C55E] font-medium' : 'text-[#FF3A33] font-medium'}>
                        {val}%
                    </span>
                )
            }
         }),
    ]

    const table = useReactTable<Stock>({
        data: data.stocks as Stock[],
        columns,
        state: {pagination},
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    })

    return (
        <div className="overflow-auto mx-12 mt-6">
            <table className="min-w-full text-left">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-2 py-2 font-semibold border-t border-[#D9D9D980] inter">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        const changeValue = row.original["%change"];
                        const bgColor =
                        changeValue > 0 ? "bg-[#E9F9EF]" : "bg-[#FDECEC]"; 
                        return (
                        <tr
                            key={row.id}
                            className={`border-t border-[#D9D9D980] ${bgColor}`}
                        >
                            {row.getVisibleCells().map(cell => (
                            <td
                                key={cell.id}
                                className="px-2 py-3 text-sm w-max inter font-medium"
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                            ))}
                        </tr>
                        );
                    })}
                </tbody>

            </table>
            <div>
                Showing{" "}
                {table.getState().pagination.pageIndex * table.getState(). pagination.pageSize + 1}
                -
                {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                    table.getState().pagination.pageSize,
                    data.stocks.length
                )}{" "}
                of {data.stocks.length} results
            </div>
        </div>
    )
}