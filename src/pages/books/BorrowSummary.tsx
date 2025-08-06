import { useGetBorrowBookQuery } from "@/redux/api/baseApi";
import type { ISummary } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";



const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowBookQuery(undefined)

    return (
        <div className="bg-amber-100 mt-8 p-2 rounded-md m-3 md:m-0 text-green-600">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-green-900">Book Title</TableHead>
                        <TableHead className="text-green-900">ISBN</TableHead>
                        <TableHead className="text-center text-green-900">Total Quantity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!isLoading && data.data.map((book: ISummary) => (
                        <TableRow className="font-mono" key={book.book.isbn}>
                            <TableCell className="">{book.book.title}</TableCell>
                            <TableCell>{book.book.isbn}</TableCell>
                            <TableCell className="text-center">{book.totalQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    );
};

export default BorrowSummary;