import {JSXElement} from "solid-js";
import {ITodoItemsProps} from "./interface.ts";
import {createForm} from "@tanstack/solid-form";

const TodoItem = ({item}: ITodoItemsProps): JSXElement => {

    const form = createForm(() => ({
        defaultValues: {
            firstTodo: '',
        },
        onSubmit: async ({value}) => {
            // Do something with form data
            console.log(value)
        },
    }))

    return (
        <div
            class='bg-amber-300 px-2 py-4 rounded-xl border-2 border-gray-900'>
            {item?.date}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
            >
                <div>
                    <form.Field
                        name="firstTodo"
                        children={(field) => (
                            <>
                                <input
                                    id={field().name}
                                    name={field().name}
                                    value={field().state.value}
                                    onBlur={field().handleBlur}
                                    onInput={(e) => field().handleChange(e.target.value)}
                                />
                            </>
                        )
                        }
                    />
                </div>
            </form>

        </div>
    );
};

export default TodoItem;