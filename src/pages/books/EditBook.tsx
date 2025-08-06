import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEditBookMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";

const EditBook = () => {
    const [editBook] = useEditBookMutation()
    const book = useLoaderData()
    const { data } = book
    const { _id, author, title, isbn, description, copies, genre } = data

    const form = useForm()
    const navigate = useNavigate()
    const onSubmit = async (values : object) => {
        await editBook({ id: _id, ...values })
        navigate("/books");
        form.reset()

    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-8 text-yellow-800">Fill Up The Form To Edit the Book</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-1 rounded-2xl w-9/10 mx-auto p-4 md:w-1/2">
                    <FormField
                        control={form.control}
                        name="title" defaultValue={title}
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Give the Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author" defaultValue={author}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Author Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={genre}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Genre" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='FICTION'>FICTION</SelectItem>
                                        <SelectItem value='NON_FICTION'>NON_FICTION</SelectItem>
                                        <SelectItem value='SCIENCE'>SCIENCE</SelectItem>
                                        <SelectItem value='HISTORY'>HISTORY</SelectItem>
                                        <SelectItem value='BIOGRAPHY'>BIOGRAPHY</SelectItem>
                                        <SelectItem value='FANTASY'>FANTASY</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isbn" defaultValue={isbn}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input placeholder="ISBN" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description" defaultValue={description}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies" defaultValue={copies}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input placeholder="Copies" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </Form>


        </div>
    );
};

export default EditBook;