import {IPropsWithChildren} from "@/shared/interface/common";
import {createForm} from "@tanstack/solid-form";
import FieldInfo from "@/shared/field/field-info";
import {useDateStore} from "@/shared/lib/store/date";
import parseDate from "@/shared/utils/date/parce-date";


const HeaderLayout = ({children}:IPropsWithChildren) => {
    const props = useDateStore()

    const form = createForm(() => ({
        defaultValues: {
            startDate: parseDate(props.startDate), endDate: parseDate(props.endDate)
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        },
    }))
    console.log(parseDate(props.startDate))
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
            >
                <div>
                    {/* A type-safe field component*/}
                    <form.Field
                        name="startDate"
                        children={(field) => {
                            return (
                                <>
                                    <label for={field().name}>Начальная дата:</label>
                                    <input
                                        id={field().name}
                                        name={field().name}
                                        value={field().state.value}
                                        onBlur={field().handleBlur}
                                        type='date'
                                        onInput={(e) => {
                                            console.log(e.target.value)
                                            return field().handleChange(parseDate(e.target.value))
                                        }}
                                    />
                                    <FieldInfo field={field()}/>
                                </>
                            )
                        }}
                    />
                </div>
                <div>
                    <form.Field
                        name="endDate"
                        children={(field) => {
                            return (
                                <>
                                    <label for={field().name}>Конечная дата:</label>
                                    <input
                                        id={field().name}
                                        name={field().name}
                                        value={field().state.value}
                                        onBlur={field().handleBlur}
                                        type='date'
                                        onInput={(e) => field().handleChange(parseDate(e.target.value))}
                                    />
                                    <FieldInfo field={field()}/>
                                </>
                            )
                        }}
                    />
                </div>
                <form.Subscribe
                    selector={(state) => ({
                        canSubmit: state.canSubmit,
                        isSubmitting: state.isSubmitting,
                    })}
                    children={(state) => {
                        return (
                            <button type="submit" disabled={!state().canSubmit}>
                                {state().isSubmitting ? '...' : 'Submit'}
                            </button>
                        )
                    }}
                />
            </form>
            {children}
        </div>
    );
};

export default HeaderLayout;