export function getDays(month, year) {
    switch (month) {
        case 2:
            if (isLeapYear(year)) return 29;
            return 28;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        default:
            return 30;
    }
}

export function isLeapYear(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) return true;
    } else if (year % 4 === 0) {
        return true
    }

    return false
}