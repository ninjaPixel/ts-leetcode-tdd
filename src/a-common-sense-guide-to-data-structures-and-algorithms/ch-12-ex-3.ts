let callCount = 0;

/**
 * This problem is known as the "unique paths" problem. Let's say you have a grid of rows and columns, this function
 * accepts a number of rows and a number of columns, and calculates the number of possible "shortest" paths from the upper-leftmost
 * square to the lower-rightmost square.
 * For example, for 2 columns and 2 rows, there are 2 possible shortest paths ([down, right] and [right, down]).
 * For 3 columns and 2 rows, there are 3 possible shortest paths ([right,right, down] and [right, down, right] and [down, right, right])
 * @param columns A number GTE 1
 * @param rows A number GTE 1
 */
function uniquePaths(columns: number, rows: number): number {
  const solution = paths(columns, rows);
  console.log("solution", solution);
  console.log("callCount", callCount);
  return solution.length;
}

type Path = Array<"r" | "d">;
const hashMap: Record<string, Path[]> = {};
function hashKey(columns: number, rows: number): string {
  return `${columns}-${rows}`;
}

function paths(columns: number, rows: number): Path[] {
  if (columns === 1 && rows === 2) {
    return [["d"]];
  }
  if (columns === 2 && rows === 1) {
    return [["r"]];
  }
  if (columns < 1 || rows < 1) {
    throw new Error("😱");
  }
  const memoKey = hashKey(columns, rows);
  if (hashMap[memoKey]) {
    return hashMap[memoKey];
  }
  callCount++;

  let solution: Path[] = [];

  if (columns >= 2) {
    const somePaths = paths(columns - 1, rows);
    somePaths.forEach((path) => {
      solution.push([...path, "r"]);
    });
  }
  if (rows >= 2) {
    const somePaths = paths(columns, rows - 1);
    somePaths.forEach((path) => {
      solution.push([...path, "d"]);
    });
  }

  hashMap[memoKey] = solution;

  return solution;
}

describe("uniquePaths function", () => {
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
