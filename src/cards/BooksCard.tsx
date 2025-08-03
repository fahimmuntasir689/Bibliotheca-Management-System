import type { IBook } from "@/types";
import { Link } from "react-router";
import { Button } from "@/components/ui/button"

interface IProp {
    book: IBook
}

const BooksCard = ({ book }: IProp) => {
    const { author, available,  title , _id} = book
  
    return (
        <div className="bg-amber-100 mt-8 rounded-sm">
            <h1>Title : {title}</h1>
            <h1>availability : {available ? "available" : "not available"}</h1>
            <h1>Author : {author}</h1>
            <div>
                <Button variant="outline"><Link to={`/books/${_id}`}>View</Link></Button>
                <Button variant="outline"> <Link to={`/edit-book/${_id}`}>Edit</Link></Button>
                <Button variant="outline"><Link to={`/borrow/${_id}`}>Borrow</Link></Button>
                <Button variant="ghost">Delete</Button>
               

            </div>
        </div>
    );
};

export default BooksCard;