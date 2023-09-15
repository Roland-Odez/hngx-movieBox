export const date = () => {
    const date = new Date()

    let currentUTCTime = date.getTime(),
        currentDayOfTheWeek = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[currentDayOfTheWeek];
}