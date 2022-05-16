import { isLeapYear, getDays } from "./util/helpers";

test('isLeapYear return true is year is a leap year', () => {
    expect(isLeapYear(2000)).toBeTruthy();
    expect(isLeapYear(2020)).toBeTruthy();
    expect(isLeapYear(2024)).toBeTruthy();
})

test('isLeapYear returns false if year is not a leap year', () => {
    expect(isLeapYear(1900)).toBeFalsy()
})


test('getDays returns correct number of days for given month and year', () => {
    const month = 1;
    const year = 2022;
    expect(getDays(month, year)).toBe(31);
})

test('getDays returns 29 days for February on leap year', () => {
    const month = 2;
    const year = 2020;
    expect(getDays(month, year)).toBe(29);
})

test('getDays returns 28 days for February on non-leap year', () => {
    const month = 2;
    const year = 2021;
    expect(getDays(month, year)).toBe(28);
})

test('getDays return 31 days for July and August', () => {
    expect(getDays(7, 2020)).toBe(31);
    expect(getDays(8,2020)).toBe(31);
})
