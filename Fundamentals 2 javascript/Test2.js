const calctip = function  (bill  )
{
    

    if (bill >=50 && bill <=300)
    {
        tip = (bill * 15) /100
    }
    else 
    {
        tip = (bill * 20) /100
    }

    topps =  tip ;
    return topps
    
}


const bills = [125, 555,44]

const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]

console.log(bills , tips);

// const bill1 = calctip(bills[0])
// const bill2 = calctip(bills[1])
// const bill3 = calctip(bills[2])





// const tip1 = calctip(tipps[0])



