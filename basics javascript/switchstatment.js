const day = "monday"

switch (day)
{
    case "monday":
        console.log(`meeting day`);
        break
    case "tuesday":
        console.log(`meeting`);
    case "wednesday":
    case "thursday":
        console.log(`eat`);
    case "friday":
        console.log(`play`);
    case "sat":
        console.log(`enjoy`);
    case "sun":
        console.log(`enjoy`);

    default:
    console.log(`no day`);
}
