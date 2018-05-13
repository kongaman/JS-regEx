let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search (searches for all instances of the regex)
console.log(re);
console.log(re.source);

// Functions for regular expression in JS

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