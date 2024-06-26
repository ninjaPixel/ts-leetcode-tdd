#---
# Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit https://pragprog.com/titles/jwdsal2 for more book information.
#---
def character_count(array)
  # Alternative base case:
  # return array[0].length if array.length == 1
  
  # Base case: when the array is empty:
  return 0 if array.length == 0
  
  return array[0].length + character_count(array[1, array.length - 1])
end