import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';


const BorrowBook = () => {
    const [borrowBook] = useBorrowBookMutation()
    const book = useLoaderData()
    const { data } = book
    const form = useForm()
    const navigate = useNavigate()
    const { _id } = data


    const onSubmit = async (values : object) => {

        try {
           const res =  await borrowBook(values).unwrap();
           console.log(res)
            toast.success('Book Has Been Borrowed Successfully');
            setTimeout(() => {
                navigate('/borrow-summary');
                form.reset();
            }, 1000);
            
       

        } catch (error) {
            toast.error(error?.data?.error.message || 'Something Went Wrong!');
            console.log(error)

        }


    }
    return (
        <div>

            <h1 className="text-center text-2xl font-bold mb-8 text-yellow-800">Fill Up The Form To Borrow Book</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-1 w-9/10 mx-auto p-4 rounded-2xl md:w-1/2">
                    <FormField
                        control={form.control}
                        name="book" defaultValue={_id}
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Book ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="Give the Book ID" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input placeholder="Quantity" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Due Date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Mention The Due Date" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit">Save</Button>
                    <ToastContainer />
                </form>
            </Form>

        </div>
    );
};

export default BorrowBook;