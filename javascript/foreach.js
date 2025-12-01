function doubleValues(arr){
  const result = [];
  arr.forEach(function(num){
    result.push(num * 2);
  });
  return result;
}

console.log(doubleValues([1, 2, 3]));       
console.log(doubleValues([5, 1, 2, 3, 10])); 



function onlyEvenValues(arr){
    const r=[];
    arr.forEach(function(num){
        if(num %2===0)
            r.push(num)
    });
    return r;

}
console.log(onlyEvenValues([1, 2, 3]));  



function showFirstAndLast(arr){
  const result = [];
  arr.forEach(function(str){
    result.push(str[0] + str[str.length - 1]);
  });
  return result;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])); 
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));      



function addKeyAndValue(arr,key,value){
    const r=[];
    arr.forEach(function(person){
    person[key]=value    
    });
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

);



function vowelCount(str){
  const vowels = 'aeiou';        
  const result = {};              
  str.toLowerCase().split('').forEach(function(char){
    if(vowels.includes(char)){  
      if(result[char]){         
        result[char] += 1;
      } else {                 
        result[char] = 1;
      }
    }
  });
  return result;
}
console.log(vowelCount('Elie'));                        
console.log(vowelCount('Tim'));                          
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));          
console.log(vowelCount('I Am awesome and so are you'));   
