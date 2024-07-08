const bill =[22,295,176,5,4,3,2,9,8,7]
// const tip = []
const total =[]

function calctip (bill,tip)
{
    for (bill = 0; bill <=bill.length;bill++) 
        {
    if (bill >=50 && bill <=300)
        {
            tip = (bill * 15) /100
        }
        else 
        {
            tip = (bill * 20) /100
        }
        }
    console.log(tip);
}

const tip = [calctip(bill[0]),calctip(bill[1]),calctip(bill[2])]

console.log(tip);