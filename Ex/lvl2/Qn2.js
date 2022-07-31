let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//   remove punctuations from text
  words = text.replace(/[^a-zA-Z ]/g, "");

console.log(words)
console.log(words.length)


// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

