import {
    createBrowserRouter,
} from "react-router";
import App from "../App";
import Books from "../pages/books/Books";
import CreateBook from "../pages/books/CreateBook";
import Book from "../pages/books/Book";
import EditBook from "../pages/books/EditBook";
import BorrowBook from "../pages/books/BorrowBook";
import BorrowSummary from "@/pages/books/BorrowSummary";
import Home from "@/pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path :'/',
                Component: Home

            },
            {
                path: "/books",
                Component: Books,
                
            },
            {
                path: "/create-book",
                Component: CreateBook
            },
            {
                path: "/books/:id",
                Component: Book,
                loader: ({ params }) => {
                    return fetch(`http://localhost:3000/api/books/${params.id}`)

                }
            },
            {
                path: "/edit-book/:id",
                Component: EditBook,
                loader: ({ params}) => {
                    return fetch(`http://localhost:3000/api/books/${params.id}`)

                }
            },
            {
                path: "/borrow/:id",
                Component: BorrowBook,
                loader : ({params}) => {
                  
                    return fetch(`http://localhost:3000/api/books/${params.id}`)

                }
            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary
            },
            
        ]

    },
]);