let text = "  Hello World! Welcome to JS  ";
console.log("Original text:", text);

console.log("trim():", text.trim());

console.log("trimStart():", text.trimStart());

console.log("trimEnd():", text.trimEnd());

let name = "Abdullah";
console.log("padStart():", name.padStart(15, "*"));

console.log("padEnd():", name.padEnd(15, "*"));

console.log("charAt(3):", name.charAt(3));

console.log("charCodeAt(3):", name.charCodeAt(3));

console.log("split(' '):", text.split(" "));

console.log("length:", text.length);

console.log("slice(6,11):", text.slice(6,11));

console.log("substring(6,11):", text.substring(6,11));

console.log("substr(6,5):", text.substr(6,5));

console.log("replace('World','Universe'):", text.replace('World','Universe'));

console.log("replaceAll(' ','-'):", text.replaceAll(' ','-'));

console.log("toUpperCase():", text.toUpperCase());

console.log("toLowerCase():", text.toLowerCase());

let greeting = "Hello";
let place = "World";
console.log("concat():", greeting.concat(" ", place, "!"));

console.log("indexOf('World'):", text.indexOf("World"));

console.log("lastIndexOf('o'):", text.lastIndexOf("o"));

console.log("search('Welcome'):", text.search("Welcome"));

console.log("match(/o/g):", text.match(/o/g));

console.log("matchAll(/o/g):", Array.from(text.matchAll(/o/g)));

console.log("includes('World'):", text.includes("World"));

console.log("startsWith('  Hello'):", text.startsWith("  Hello"));

console.log("endsWith('JS  '):", text.endsWith("JS  "));
