const calaverage = (a, b, c) => (a+b+c)/3 
const avgdolphin = calaverage(84, 54, 41)
const avgkolas = calaverage (23, 34,27)


console.log(avgdolphin , avgkolas);

function checkwinner (dolphins , kolas)
{
    if (dolphins >= 2*kolas)
        {
            console.log(`dolphins wins with the score of ${dolphins}`);
        }

    else if (kolas >=2*dolphins)
    {
        console.log(`kolas wins with the score of ${kolas}`);
    }

    else 
    {
        console.log(`no one wins `);
    }

    return `this function is first method called function expression \n`
}

console.log( checkwinner(avgdolphin,avgkolas));


// **************** Function declaration method *******************************

const calaverage2 = (a, b, c) => (a+b+c)/3 
const avgdolphin1 = calaverage2(44, 23, 71)
const avgkolas1 = calaverage2 (65,54,49)


console.log(avgdolphin1 , avgkolas1);

const checkwhoiswinner =  function (dolphins1 , kolas1)
{
    if (dolphins1 >= 2*kolas1)
        {
            console.log(`dolphins wins with the score of ${dolphins1}`);
        }

    else if (kolas1 >=2*dolphins1)
    {
        console.log(`kolas wins with the score of ${kolas1}`);
    }

    else 
    {
        console.log(`no one wins `);
    }

    return `this function is 2nd method `
}

console.log (checkwhoiswinner(avgdolphin1,avgkolas1))