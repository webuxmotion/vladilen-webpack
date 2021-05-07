const letters = ["A", "B", "C"];

const createReversedIterator = array => ({
  [Symbol.iterator]() {
    let i = array.length;

    return {
      next: () => ({
        value: array[--i],
        done: i < 0
      })
    }
  }
});

const reverseIterator = function*(array) {
  let i = array.length;

  while(i > 0) {
    yield array[--i];
  }
}

// for (let value of reverseIterator(letters)) {
//   console.log(value);
// }

const iterator = reverseIterator(letters);

console.log(iterator.next());
console.log(iterator.return());
console.log(iterator.next());
console.log(iterator.next());