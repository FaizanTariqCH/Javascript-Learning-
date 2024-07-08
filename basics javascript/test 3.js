const teamDolphinsfirst = 96 ;
const teamDolphinssec = 108;
const teamDolphinsthird = 106;

const avgDolphins = (teamDolphinsfirst + teamDolphinssec + teamDolphinsthird) / 3;

console.log(avgDolphins);

const teamKoalasfirst = 88
const teamKolasssec = 91
const teamKoalasthird = 110

const avgKolas = (teamKoalasfirst + teamKolasssec + teamKoalasthird) /3

console.log(avgKolas);

if (avgDolphins > avgKolas && avgDolphins >= 100)
    {
        console.log(`Team dolphins win with average score of ${avgDolphins}`);
    }

else if (avgKolas > avgDolphins && avgKolas >= 100)
    {
        console.log(`Team kolas win with average score of ${avgKolas}`);
    }
else if (avgDolphins === avgKolas && avgDolphins >=100 && avgKolas >=100)
    {
        console.log(`Match is draw both teams have same score`);
    }

    else
    {
        console.log(`Match is ended :)`);
    }

// console.log(avgDolphins);

