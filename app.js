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

// let re;
// Literal Characters
// re = /hello/;
// re = /hello/i;

// MetaCharacter Symbols
// re = /^h/i; // ^ = must begin with
// re = /rld$/i; // $ = must end with
// re = /^hello$/i; // must begin AND end with
// re = /h.llo/i; // . = matches any ONE Character
// re = /h*llo/i; // * = matches any Character 0 or more times
// re = /gra?e?y/i; // ? = optional Character (entweder der eine oder der andere ODER KEINER!!!!)
// re = /gra?e?y\?/i; // \ = escape Character 


//String to match
//const str = 'Hello World';
//const str = 'grey';
// const str = 'grey?';
// Log results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`${str} matched ${re.source}`);
//     } else {
//         console.log(`${str} does NOT match ${re.source}`);
//     }
// }

// reTest(re, str);

// ---------------------- Character Sets & Qualifiers -------------------------

let re;

// Brackets [] - Character Sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/; // must be an G or F
re = /[^GF]ray/i; // must be anything except for a G or F (^ inside brackets means NOT)
re = /^[GF]ray/i; // must beginn with G or F (^ outside brackets means starts With)
re = /[A-Z]ray/; // Match ANY uppercase letter
re = /[A-Za-z]ray/; // Match ANY letter
re = /[0-9]ray/; // Match ANY Digit

// Braces {} - Quantifiers

re =/Hel{2}o/i; // character before {} Must occur exactly {m} times
re =/Hel{2,4}o/i; // {m,n} Must occur at least m and maximum n times
re =/Hel{2,}o/i; // Must occur at least {m} times

// Parenteses () Grouping

re =/[0-9]x{3}/; // ohne () -> Digit und dann 3x
re =/([0-9]x){3}/; // mit () -> Digit und dann x und das ganze 3 mal hintereinander

// -------------- Shorthand Character Classes ------------------

re = /\w/; // \w = Word Character = alphanumeric Char any letter, any number or _ (underscore)
re = /\w+/; // + = one or more
re = /\W/; // \W = NON-Word Character = anything but letter, number or _ (underscore)
re = /\d/; // \d = Digit (first char)
re = /\d+/; // \d+ = Digit (all chars)
re = /\D/; // \D = NON-Digit
re = /\s/; // \s = Whitespace (blank, tab)
re = /\S/; // \S = NON-Whitespace (blank, tab)
re = /Hell\b/i; // \b = Word Boundary (Wort muss danach aufhören Hello = kein Match, Hell = match)

//---------------- Assertions -------------------

re = /x(?=y)/; // Match "x" ONLY if its followed by "y"
re = /x(?!y)/; // Match "x" ONLY if its NOT followed by "y"

//String to match
const str = 'xsys';

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
