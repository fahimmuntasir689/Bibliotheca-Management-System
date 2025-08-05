import { useGetBorrowBookQuery } from "@/redux/api/baseApi";
import type { ISummary } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";



const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowBookQuery(undefined)

    return (
        <div className="bg-amber-100 mt-8 rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Book Title</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead className="text-center">Total Quantity</TableHead>
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