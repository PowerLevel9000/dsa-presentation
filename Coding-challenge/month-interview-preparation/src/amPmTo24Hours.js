"use strict";
const timeConversion = (s) => {
    const hours = s.slice(0, 2);
    const timeWithoutEnding = s.slice(0, -2);
    const timeWithoutHoursAndEnding = s.slice(2, -2);
    if (s[8] === "A" && hours === "12") {
        return "00" + timeWithoutHoursAndEnding;
    }
    if (hours === "12" || s[8] === "A") {
        return timeWithoutEnding;
    }
    return (parseInt(hours) + 12) + timeWithoutHoursAndEnding;
};
//# sourceMappingURL=amPmTo24Hours.js.map