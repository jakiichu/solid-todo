import parseDate from "@/shared/utils/date/parce-date";

const getLastDateOfCurrentMonth = (date: Date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
    return parseDate(lastDay);
}

export default getLastDateOfCurrentMonth