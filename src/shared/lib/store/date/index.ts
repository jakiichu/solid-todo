import {useStore} from "@tanstack/solid-store";
import {dateStore} from "./create-store.ts";


const createDateStore = useStore(dateStore)

export {
    createDateStore
}