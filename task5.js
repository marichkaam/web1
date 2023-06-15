
//task 5

function maxDate(){
    var dates = [];
    dates.push(new Date("2020/09/23"));
    dates.push(new Date("2012/08/01"));
    dates.push(new Date("1999/04/19"));
    dates.push(new Date("2002/12/31"));
    dates.push(new Date("2008/10/10"));

    var maximumDate = new Date(Math.max.apply(null, dates));

    console.log(`MAX DATE : ${maximumDate}`);
}
maxDate();