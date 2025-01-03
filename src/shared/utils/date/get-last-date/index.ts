import parseDate from "@/shared/utils/date/parce-date";

const getLastDateOfCurrentMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    console.log(parseDate(new Date(year, month + 1, 0)), new Date(year, month + 1, 0))
    return new Date(year, month + 1, 0);
}

export default getLastDateOfCurrentMonth