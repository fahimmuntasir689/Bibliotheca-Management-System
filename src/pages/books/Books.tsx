import BooksCard from "@/cards/BooksCard";
import { useGetBookByNameQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";

const Books = () => {
    const { data, isLoading, isError } = useGetBookByNameQuery(0)
    console.log({ data, isLoading, isError })
    return (
        <div>
            {
                !isLoading && data.data.map((book: IBook) => <BooksCard key={book._id} book={book}></BooksCard>)
            }
        </div>
    );
};

export default Books;