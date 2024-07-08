
// ******************* Functional declaration we can call before declaring function ****************************

// function Showroom (showroomOne , showroomTwo)
// {
//     const myShowroom = `Showroomone has ${showroomOne} cars and showroomtwo has ${showroomTwo} cars `;

//     return myShowroom;
// }

// const showroomCars = Showroom(5 , 10)
// // console.log (Showroom(5,8))
// console.log(showroomCars);

//************************* Functional Expression can not access before function declaration****************************/

// const showRoom = function (showroomOne , showroomTwo)
// {
//     return `Showroomone has ${showroomOne} cars and showroomtwo has ${showroomTwo} cars `;
// }

// console.log(showRoom(10,20));


// *************************Arrow Function **************************
// const showroomCars = (showroomOne , showroomTwo) => 
//     {
//         const totalnumofcars = showroomOne + showroomTwo

//         return totalnumofcars
//     } 
   

// console.log(`total cars in all showrooms are ${showroomCars(10,20)}`);


//  ****************** Function with in Funtion *******************



function Totalcarprice (carp1 , carp2)
{
    const sumofcar1 =  carp1 + 1000 
    const sunofcar2 = carp2 + 1800

    return sumofcar1 
     

}

function showRoom (car1 , car2)
{
    const calculateprice1 = Totalcarprice(car1)
    const calculateprice2 = Totalcarprice(car2)

    const total = `total call price is ${calculateprice1} and ${calculateprice2}`;
    return total
}

console.log (showRoom(1200 , 1000))
