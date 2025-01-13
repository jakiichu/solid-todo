import {IPropsWithChildren} from "@/shared/interface/common";
import {createForm, DeepKeys} from "@tanstack/solid-form";
import {createDateStore} from "@/shared/lib/store/date";
import HeaderInput from "@/features/header-date-form/lnput";
import {IDateFormPort} from "@/shared/interface/entries/date/port";
import formArray from "@/widget/layout/header/const.ts";
import {JSXElement} from "solid-js";
import {IFieldDateForm} from "@/shared/interface/entries/date/form";


const HeaderLayout = ({children}: IPropsWithChildren): JSXElement => {
    const {defaultValues} = createDateStore()
    const form = createForm<IDateFormPort>(() => ({
        defaultValues,
    }))

    return (
        <div class='m-4 flex flex-col gap-4'>
            <form class='flex'>
                {Object.entries(formArray).map(([key, value]) => (
                    <form.Field
                        name={key as DeepKeys<IDateFormPort>}
                        children={(field) => (
                            <HeaderInput text={value}
                                         field={field as IFieldDateForm}/>
                        )
                        }
                    />
                ))}
            </form>
            {children}
        </div>
    );
};

export default HeaderLayout;