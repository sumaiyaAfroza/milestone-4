//  

const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.reverse();
// const reversed = numbers.reverse()
// console.log(reversed);

const rev_numbers = [];
for ( const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num)
}
// console.log(rev_numbers)


// decremental for loop 
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[1];
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);
    
//  line 17 teke kisui buji nai