import dayjs from "dayjs";

const parseDate = (date: string | Date) => {
    console.log(dayjs(date).format( "YYYY-DD-MM"),date)
    return dayjs(date).format( "YYYY-DD-MM")
}
export default parseDate