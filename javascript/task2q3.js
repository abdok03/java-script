let count = 1;
for(let i=0; i<4; i++){
    let line = ""; 
    for(let j=0; j<=i; j++){
        line += count + " ";
        count++;            
    }
    console.log(line.trim());  
}
