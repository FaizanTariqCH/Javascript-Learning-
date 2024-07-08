// const Showroom =
// {
//     ShowroomName : 'Chaudhury Cars',
//     ShowroomLocation : 'Quetta',
//     ShowroomCars : ['BMW', 'Toyota', 'Homda', 'RollsRoyce'],
//     ExpensiveCar: 'RollsRoyce',
//     ExpensiveCarprice: '$2 Million '

// }

// console.log(Showroom.ShowroomLocation);

// console.log(`${Showroom.ShowroomName} have multiple cars collection but the most expensive car they have is ${Showroom.ExpensiveCar} and the price is ${Showroom.ExpensiveCarprice} and they also have ${Showroom.ShowroomCars[0]} showroom is located in ${Showroom.ShowroomLocation}`);


// ******************Object Methods *******************
const Showroom =
{
    ShowroomName : 'Chaudhury Cars',
    ShowroomLocation : 'Quetta',
    ShowroomCars : ['BMW', 'Toyota', 'Homda', 'RollsRoyce'],  
    ExpensiveCar: 'RollsRoyce',
    ExpensiveCarprice: 2000000 ,

    discount: function (Discountprice)
    {
        const discountoncar = (this.ExpensiveCarprice *  Discountprice) /100

        const afterdiscountprice = this.ExpensiveCarprice - discountoncar

        console.log(`price after discount is ${afterdiscountprice} and discount is ${discountoncar}`);

        

    }

}

console.log(Showroom.discount(20));