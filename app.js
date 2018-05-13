// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search (searches for all instances of the regex)
// console.log(re);
// console.log(re.source);

// ------------ Functions for regular expression in JS ----------------

// exec() - Return Result in an array (match) or null
// ******
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() Return true or false
// ******
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// *******
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - returns index of first match or -1
// ********
// const str = 'Hello there';
// const result = str.search(re);
// console.log(result);

// replace() - returns new string with some or all matches of a pattern
// *********
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// --------------- Metacharacters --------------------

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// MetaCharacter Symbols
re = /^h/i; // ^ = must begin with
re = /rld$/i; // $ = must end with
re = /^hello$/i; // must begin AND end with
re = /h.llo/i; // . = matches any ONE Character
re = /h*llo/i; // * = matches any Character 0 or more times
re = /gra?e?y/i; // ? = optional Character (entweder der eine oder der andere ODER KEINER!!!!)
re = /gra?e?y\?/i; // \ = escape Character 


//String to match
//const str = 'Hello World';
//const str = 'grey';
const str = 'grey?';
// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);

