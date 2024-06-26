/***
 * Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/jwdsal2 for more book information.
***/
function getIntersection(array1, array2) {
  let intersection = [];  
  let hashTable = {};

  for(let i = 0; i < array1.length; i++) {
    hashTable[array1[i]] = true;
  }

  for(let j = 0; j < array2.length; j++) {
    if(hashTable[array2[j]]) {
      intersection.push(array2[j]);
    }
  }

  return intersection;
}