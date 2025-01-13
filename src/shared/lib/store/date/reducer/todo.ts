import {dateStore} from "@/shared/lib/store/date/create-store.ts";
import {IArrayItems} from "@/shared/interface/entries/todo/base-entries";


const addTodoReducer = (countItem: number, item: IArrayItems) => {
    const arrayItems: IArrayItems[] = dateStore.state.itemsTodo.arrayItems
    void arrayItems.splice(countItem, 1, item)
    dateStore.setState(prev => ({
        ...prev,
        itemsTodo: {
            ...prev.itemsTodo,
            arrayItems
        }
    }))
}

export {
    addTodoReducer
}