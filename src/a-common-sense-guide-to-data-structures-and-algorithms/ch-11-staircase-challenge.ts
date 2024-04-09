/*
    A user can walk up a staircase taking 1 step, 2 steps or 3 steps at a time, in any combination.
    For example, a staircase consisting of 3 steps, the user has 4 possible ways to ascend:
    - 1 step, 1 step and 1 step.
    - 1 step and 2 steps
    - 2 steps and 1 step
    - 3 steps
 */

// my solution
function walkStairs(stairs: number, nextStepSize = 0): number {
  const possibleStepSizes = [1, 2, 3];
  const remainingStairs = stairs - nextStepSize;

  // overshot
  if (remainingStairs < 0) {
    return 0;
  } else if (remainingStairs === 0) {
    // top step
    return 1;
  }

  let result = 0;
  possibleStepSizes.forEach((stepSize) => {
    result += walkStairs(remainingStairs, stepSize);
  });
  return result;
}

// book solution
function _walkStairs(stairs: number): number {
  if (stairs <= 0) {
    return 0;
  }
  if (stairs === 1) {
    return 1;
  }
  if (stairs === 2) {
    return 2;
  }
  if (stairs === 3) {
    return 4;
  }
  return (
    _walkStairs(stairs - 1) + _walkStairs(stairs - 2) + _walkStairs(stairs - 3)
  );
}

describe("A Common Sense Guide to Data Structures and Algorithms - Chapter 11", () => {
  it("should return the number of ways to walk up the stairs when the number of stairs is 1", () => {
    const stairs = 1;
    const output = 1;
    expect(walkStairs(stairs)).toEqual(output);
  });

  it("should return the number of ways to walk up the stairs when the number of stairs is 2", () => {
    const stairs = 2;
    const output = 2;
    expect(walkStairs(stairs)).toEqual(output);
  });

  it("should return the number of ways to walk up the stairs when the number of stairs is 3", () => {
    const stairs = 3;
    const output = 4;
    expect(walkStairs(stairs)).toEqual(output);
  });

  it("should return the number of ways to walk up the stairs when the number of stairs is 4", () => {
    const stairs = 4;
    const output = 7;
    expect(walkStairs(stairs)).toEqual(output);
  });
});
