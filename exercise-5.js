// Rabu - Logic Challenges Refresh

function palindrome(kata) {
    var result = ''
    for(var i = kata.length-1 ; i >= 0 ;i-- ){
        result += kata[i]
    }
   if (kata == result){
     return true
   } else 
   return false
  }
  
  

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false