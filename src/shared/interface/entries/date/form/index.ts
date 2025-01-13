import {DeepKeys, FieldApi} from "@tanstack/solid-form";
import {IDateFormPort} from "@/shared/interface/entries/date/port";

type IFieldDateForm = () => FieldApi<IDateFormPort, DeepKeys<IDateFormPort>>


export type {
    IFieldDateForm
}