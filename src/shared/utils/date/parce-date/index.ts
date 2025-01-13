import dayjs from "dayjs";

const parseDate = (date: string | Date) => {
    return dayjs(date).format( "YYYY-MM-DD")
}
export default parseDate