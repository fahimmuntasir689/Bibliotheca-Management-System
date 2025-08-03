import { useLoaderData } from "react-router";


const Book = () => {
    const book = useLoaderData()
    const { data} = book
    const { author, title, isbn , description , copies} = data
    console.log(data)

    return (
        <div className="bg-">
            <h1>Title : {title}</h1>
            <h1>Description : {description}</h1>
            <h1>ISBN :{isbn}</h1>
            <h1>Author : {author}</h1>
            <h1>Copies : {copies}</h1>

        </div>
    );
};

export default Book;