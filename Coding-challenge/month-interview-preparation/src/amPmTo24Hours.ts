const timeConversion = (s: string) => {
    // Write your code here
    const hours: string = s.slice(0, 2);
    const timeWithoutEnding: string = s.slice(0, -2);
    const timeWithoutHoursAndEnding: string = s.slice(2, -2)

    if (s[8] === "A" && hours === "12") {
        return "00" + timeWithoutHoursAndEnding;
    }
    if (hours === "12" || s[8] === "A") {
        return timeWithoutEnding;
    }

    return (parseInt(hours) + 12) + timeWithoutHoursAndEnding;
}