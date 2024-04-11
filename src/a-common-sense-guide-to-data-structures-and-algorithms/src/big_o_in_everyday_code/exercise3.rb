#---
# Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit https://pragprog.com/titles/jwdsal2 for more book information.
#---
def find_needle(needle, haystack)
  needle_start_index = 0

  while needle_start_index <= haystack.length - needle.length
    if needle[0] == haystack[needle_start_index]
      needle_offset = 0

      while needle_offset < needle.length
        if needle[needle_offset] != haystack[needle_start_index + needle_offset]
          break
        else
          if needle_offset == needle.length - 1
            return true
          end
        end
        needle_offset += 1
      end
    end

    needle_start_index += 1
  end
  
  return false
end