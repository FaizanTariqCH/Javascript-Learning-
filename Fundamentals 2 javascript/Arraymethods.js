// ***********Push Method ***************

const friends = ['faizan','fahad','arasalan']

friends.push ('ahmed')

console.log(friends);

// ************* Unshift method *************
friends.unshift ('waseeq')
console.log(friends);

//***************POP REMOVE ELEMENT FROM ARRAY from last********************** */
friends.pop()
console.log(friends);

// ************Shift remove element from first **********************
friends.shift()
console.log(friends);

// *********** index of to check index***************
console.log(friends.indexOf ('fahad'));

// ************includes ************ check if objed present return true or false

if (friends.includes('faha'))
{
    console.log(`fahad is present`);
}
