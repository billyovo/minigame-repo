import { RRule } from "rrule";
import { DateTime } from "luxon";

export function getOccurrencFromRRuleString(fromDate: Date, rrule: string) : Date {
	const rule : RRule = RRule.fromString(rrule);

	// no dtstart will generate bad date!
	// https://github.com/jkbrzt/rrule/issues/428
	rule.options.dtstart = fromDate;
	const fromDateUTC : Date = DateTime.fromJSDate(fromDate).plus({ hours: 8 }).toJSDate();

	const nextOccurrence : Date = rule.after(fromDateUTC, true) as Date;
	// by pass the timezone bug in rrule by substracting, very smart.
	return DateTime.fromJSDate(nextOccurrence).minus({ hours: 8 }).set({ millisecond: 0 }).toJSDate();
}

export function isToday(date1: Date, date2: Date) : boolean {
	const date1Luxon = DateTime.fromJSDate(date1);
	const date2Luxon = DateTime.fromJSDate(date2);

	return date1Luxon.hasSame(date2Luxon, "day");
}

export function isTomorrow(date1: Date, date2: Date) : boolean {
	const date1Luxon = DateTime.fromJSDate(date1);
	const date2Luxon = DateTime.fromJSDate(date2);

	return date1Luxon.plus({ days: 1 }).hasSame(date2Luxon, "day");
}