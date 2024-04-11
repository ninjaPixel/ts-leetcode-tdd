/***
 * Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/jwdsal2 for more book information.
 ***/
function uniquePaths(rows, columns) {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}

describe("uniquePaths Official Solution", () => {
  it("should return 2 for a 2x2 grid", () => {
    const columns = 2;
    const rows = 2;
    const output = uniquePaths(columns, rows);
    expect(output).toBe(2);
  });

  it("should return 3 for a 2x3 grid", () => {
    const columns = 2;
    const rows = 3;
    const output = uniquePaths(columns, rows);
    expect(output).toBe(3);
  });

  it("should return 3 for a 3x2 grid", () => {
    const columns = 3;
    const rows = 2;
    const output = uniquePaths(columns, rows);
    expect(output).toBe(3);
  });

  it("should return 0 for a 1x1 grid", () => {
    const columns = 1;
    const rows = 1;
    const output = uniquePaths(columns, rows);
    expect(output).toBe(0);
  });

  it("should return 6 for a 3x3 grid", () => {
    const columns = 3;
    const rows = 3;
    const output = uniquePaths(columns, rows);
    expect(output).toBe(6);
  });
});
