function multiplication2(x,y){
    return x*y
}
multiplication2(4, 5)
function area(w,i){
    return 0.5 *w*i;
}
area(3, 6)
function isPandigital(num){
    let s=num.toString();
    for(let z=0 ;z<=9;z++){
        if(s.includes(z.toString())){
            return false
        }
    }
    return true
}
isPandigital(1233459887)
function fullName(firstName,lastName){
     return firstName + " " + lastName;
}
fullName("abdullah", "alokosh")
