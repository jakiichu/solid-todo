import getLastDateOfCurrentMonth from "@/shared/utils/date/get-last-date";
import {Store} from "@tanstack/solid-store";
import parseDate from "@/shared/utils/date/parce-date";
import {times} from 'lodash'

const lastDate = getLastDateOfCurrentMonth(new Date())
const lastDateFormateDate = new Date(lastDate)
const maxItems = new Date(lastDate).getDate()

const dateStore = new Store({
    defaultValues: {
        startDate: parseDate(new Date()),
        endDate: lastDate,
    },
    itemsTodo: {
        maxItems,
        arrayItems: times(maxItems).map(item => ({
            id: item,
            date: parseDate(new Date(lastDateFormateDate.getFullYear(), lastDateFormateDate.getMonth(), item + 1)),
            todo: []
        }))
    }
})

export {
    dateStore,
    lastDate
}