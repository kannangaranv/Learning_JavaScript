// Mon - 7 am
// tue - thurs - 4am
// fri - 9am
// sat - sun - 8am

let day = "Sunday";

switch(day){
    case "Monday":
        console.log("7 am");
        break
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4 am");
        break;
    case "Friday":
        console.log("9 am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("8 am");
        break;
    default:
        console.log("Invalid day");
        break;
}