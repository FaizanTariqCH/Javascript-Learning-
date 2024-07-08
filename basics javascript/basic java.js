const markHight = 1.69
const markWeight = 80

const johnHight = 1.69
const johnWeight = 78

const markBMI = markWeight / markHight **2



const johnBMI = johnWeight / johnHight **2



if (markBMI > johnBMI)
    {
        console.log(`Marks BMI is ${markBMI} ,John' BMI is ${johnBMI} , and higher than Jhon's !`);
    }
else if (markBMI == johnBMI)
{
    console.log(`Marks BMI is ${markBMI} , and equal to john's !`);

}
else 
{
    console.log(`Marks BMI is ${markBMI} and lower`);
}