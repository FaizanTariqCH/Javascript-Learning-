const MarkBMI = 
{
    fullName: 'Mark Miller',
    
    calcBMI : function (mass , height)
    {
        const BMI= mass /(height **2)

        return BMI

        
    }



}

console.log(MarkBMI.fullName, MarkBMI.calcBMI (78,1.69));

const JohnBMI = 
{
    fullName: 'John Miller',
    
    calcBMI : function (mass , height)
    {
        const BMI= mass /(height **2)

        return BMI

        
    }



}

console.log(JohnBMI.fullName, JohnBMI.calcBMI (92,1.95));

console.log ( `${MarkBMI.fullName}BMI is ${MarkBMI.calcBMI(78.1,1.69)}, and ${JohnBMI.fullName} BMI is ${JohnBMI.calcBMI(92,1.95)},  ${MarkBMI.calcBMI(78.1,1.69) > JohnBMI.calcBMI(92,1.95) ? MarkBMI.calcBMI(78.1,1.69) : JohnBMI.calcBMI(92,1.95)}`);