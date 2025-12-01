for(let i=0;i<10;i++){
let MyCar=document.createElement("div");
let Myhead2=document.createElement("h2");
let MyP=document.createElement("p");
let myhtext=document.createTextNode("toyota");
 if (i>4 && myhtext.nodeValue==="toyota") {
        myhtext.nodeValue="ford";
    } else {
        myhtext;
    }
let myptext=document.createTextNode("the best car in the world");
Myhead2.appendChild(myhtext);
MyP.appendChild(myptext);
MyCar.className="car";
MyCar.appendChild(Myhead2);
MyCar.appendChild(MyP);
document.body.appendChild(MyCar);
}

