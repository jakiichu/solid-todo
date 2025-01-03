const daysBetweenDates = (date1: string,date2: string) => {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const differenceInTime = Math.abs(secondDate.getTime() - firstDate.getTime())
    return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
}

export default daysBetweenDates