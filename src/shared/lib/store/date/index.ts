import {Store, useStore} from "@tanstack/solid-store";
import parseDate from "@/shared/utils/date/parce-date";
import getLastDateOfCurrentMonth from "@/shared/utils/date/get-last-date";

const dateStore = new Store({
    startDate: parseDate(new Date()),
    endDate: getLastDateOfCurrentMonth(new Date()),
})

const useDateStore = useStore(dateStore)

export {
    dateStore,
    useDateStore
}