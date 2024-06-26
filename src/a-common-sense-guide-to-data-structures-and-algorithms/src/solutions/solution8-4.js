/***
 * Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/jwdsal2 for more book information.
***/
function firstNonDuplicate(string) {
  let hashTable = {};

  for(let i = 0; i < string.length; i++) {
    if(hashTable[string[i]]) {
      hashTable[string[i]]++;
    } else {
      hashTable[string[i]] = 1;
    }
  }

  for(let j = 0; j < string.length; j++) {
    if(hashTable[string[j]] == 1) {
      return string[j];
    }
  }
}