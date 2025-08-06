import { useDeleteBookMutation, useGetBookByNameQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


const Books = () => {
    const { data, isLoading } = useGetBookByNameQuery(undefined)
    const [deleteBook] = useDeleteBookMutation()

    const handleDeleteBook = async (id) => {

        await deleteBook(id)

    }

    return (
        <>
            <div className="bg-amber-100 m-6 sm:p-4 rounded-md md:m-0 p-2 text-green-800">
                <Table>
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="text-green-600">Title</TableHead>
                            <TableHead className="text-green-600">Author</TableHead>
                            <TableHead className="text-green-600">Genre</TableHead>
                            <TableHead className="text-green-600">ISBN</TableHead>
                            <TableHead className="text-green-600">Copies</TableHead>
                            <TableHead className="text-green-600">Availability</TableHead>
                            <TableHead className="text-center text-green-600">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {!isLoading && data.data.map((book: IBook) => (
                            <TableRow className="font-mono" key={book._id}>
                                <TableCell className="">{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>{book.isbn}</TableCell>
                                <TableCell className="text-center">{book.copies}</TableCell>
                                <TableCell>{book.available ? 'available' : 'unavailable'}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex gap-1.5">
                                        <Button variant="outline"><Link to={`/books/${book._id}`}>View</Link></Button>
                                        <Button variant="outline"> <Link to={`/edit-book/${book._id}`}>Edit</Link></Button>
                                       {
                                        book.available ?  <Button variant="outline"><Link to={`/borrow/${book._id}`}>Borrow</Link></Button> : <Button>Borrow</Button>
                                       }
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure about the deletion?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete your
                                                        book and remove your data from our servers.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteBook(book._id)}>delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Button className="mt-10" variant="link"><Link to='/create-book'>Add New Book</Link></Button>

        </>

    );
};

export default Books;