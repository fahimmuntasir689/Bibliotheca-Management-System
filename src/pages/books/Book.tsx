import { useLoaderData } from "react-router";



const Book = () => {
    const book = useLoaderData()
    const { data} = book
  const { author, title, isbn , description , copies , genre} = data
    console.log(data)

    return (
        <div className="bg-amber-100 m-6 text-green-900 mt-8 rounded-md p-8 font-mono space-y-6 md:m-0 md:space-y-3 ">
            <h1 className="font-bold text-xl">Title : <span className="font-sans font-medium"> {title} </span></h1>
            <h1 className="font-bold text-xl">Author : <span className="font-sans font-medium"> {author} </span></h1>
            <h1 className="font-bold text-xl">Genre : <span className="font-sans font-medium"> {genre} </span></h1>
            <h1 className="font-bold text-xl">Description : <span className="font-sans font-medium"> {description} </span></h1>
            <h1 className="font-bold text-xl">ISBN : <span className="font-sans font-medium"> {isbn} </span></h1>
            <h1 className="font-bold text-xl">Copies : <span className="font-sans font-medium"> {copies} </span></h1>

        </div>
    );
};

export default Book;