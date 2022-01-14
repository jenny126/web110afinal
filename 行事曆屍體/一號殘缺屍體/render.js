var catch_date = new Date();
var catch_year = date.getFullYear();
var catch_month = date.getMonth();
var catch_day = catch__day.getDate();
date = new Date(year, month, 1);

const month =  ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
const month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
const month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
const week=['Sun.','Mon.','Tue.','Wed.','Thurs.','Fri.','Sat.']

function daysInMonth(month, year) {
    if ( year%4===0 && year%100!==0 || year%400===0 ) {
        return (month_olympic[month]);
    } else {
        return (month_normal[month]);
    }
}