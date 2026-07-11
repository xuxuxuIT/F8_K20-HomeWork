const text =
  "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

// Ham 1
function getWords(text) {
  return text.split(" ");
}

console.log(getWords(text));

// Ham 2
function countWords(text, word) {
  let words = text.split(" ");
  let cnt = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      cnt++;
    }
  }
  return cnt;
}

console.log(countWords(text, "javascript"));
console.log(countWords(text, "chạy"));
console.log(countWords(text, "python"));

// Ham 3
function getUniqueWords(text) {
  let words = text.split(" ");
  let uniqueWords = [];
  for (let i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) == -1) {
      uniqueWords.push(words[i]);
    }
  }
  uniqueWords.sort();
  return uniqueWords;
}
console.log(getUniqueWords(text));

// Ham 4
function getTopWords(text, n) {
  const words = text.split(" ");
  const arr = [];

  for (let i = 0; i < words.length; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j].word === words[i]) {
        arr[j].count++;
        found = true;
        break;
      }
    }

    if (!found) {
      arr.push({
        word: words[i],
        count: 1,
      });
    }
  }

  arr.sort(function (a, b) {
    return b.count - a.count;
  });

  return arr.slice(0, n);
}

console.log(getTopWords(text, 3));

// Ham 5
function highlight(text, word) {
  return text.replaceAll(word, "**" + word + "**");
}

console.log(highlight(text, "javascript"));
