const localConfig = {
	baseUrl: `https://example.com`
};

export default {
    dateFormatting: {
        anteMeridiem:'am',
        postMeridiem:'pm',
        MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        DAYS: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        //2019-05-06 00:00
        defaultDateformatString: `#YYYY#-#MM#-#DD#`,
        defaultTimeFormatString: `#hhh#:#mm#`,
        /*
        String Formatting: 
        'DATE:
        '- #YYYY# for century and year eg: 2016 (CCYY).
        '- #YY# for only the year eg: 16 (YY).
        '- #M# for numerical month eg: 1.
        '- #MM# for numerical month eg: 01.
        '- #MMM# for abbreviated alphabetic month name eg: Jan.
        '- #MMMM# for alphabetic month name eg: January.
        '- #DD# for the numerical day eg: 1.
        '- #DD# for the numerical day eg: 01.
        '- #DDD# for abbreviated alphabetic name of day eg: Fri.
        '- #DDDD# for alphabetic name of day eg: Friday.
        '- #th# for the ordinal indicator eg: rd, th, st, nd (1st, 2nd, 3rd, 4th, 5th).
        'TIME:
        - #h#  for hours eg: 1#.
        - #hh# for hours 12 hour format eg: 01.
        - #hhh#  for hours 24 hour format eg: 01#.
        - #m# for minutes eg: 1.
        - #mm# for minutes eg: 01.
        - #s# for seconds eg: 1.
        - #ss# for seconds eg: 01.
        - #AMPM# for the meridiem indicator in uppercase eg: AM/PM.
        - #ampm# for the meridiem indicator in lowercase eg: am/pm.
        Example:'+
        -Formatting string: (#DDDD# the #D##th# of #MMMM# #YYYY# at #h#:#mm#:#ss# #ampm#) will Return -> "Friday the 1st of January 2016 at 1:01:01 am"'
        */
    }
}