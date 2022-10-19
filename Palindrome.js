let name = "namal";

let bag="";

for ( let i =name.length-1 ; i >= 0 ; i--) {
    bag = bag + name[i];
    
} 
if ( bag ===name ){
    console.log("It is a Palindrome");
}else {
    console.log("It is not a Palindrome");
}
