import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateBookMutation } from "@/redux/api/baseApi";

import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router";


const CreateBook = () => {
    const [createBook] = useCreateBookMutation()
    const form = useForm()
    const navigate = useNavigate()

    const onSubmit = async (values : object) => {
        await createBook(values).unwrap()
        navigate("/books");
        form.reset()




    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-8 text-yellow-800">Fill Up The Form To Add New Book</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-1 rounded-2xl w-9/10 mx-auto p-4 md:w-1/2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Write The Book Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
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
                            <FormItem className="">
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl className="w-3/4 md:w-full">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Genre" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent {...field}>
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
                        name="isbn"
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Put Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input placeholder="How many Copies ?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit"> Submit</Button>
                </form>
            </Form>

        </div>
    );
};

export default CreateBook;