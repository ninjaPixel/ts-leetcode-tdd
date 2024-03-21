// 27. Remove Element
// https://leetcode.com/problems/remove-element

/**
 Time complexity: O(n), the loop will run at most n(n is the length of the array) times as there could be a posibility you have to go through the entire array before you encounter an element to remove.
 Space complexity: O(1), we did not use any extra data structures.
 */
function removeElement(nums: number[], val: number): number {
    let shift=0
    // pass through all elements in the array
    // if element === val, then update shift
    // if element is a keeper, then shift it along by `shift`
    for(let i=0; i< nums.length;i++){
        if(nums[i]===val){
            shift++
        }else if(shift>0){
            nums[i-shift]=nums[i]
        }
    }
    return nums.length-shift
}

/**
 * Test
 */
describe("27. Remove Element", () => {
    it("example 1", () => {
        const nums= [3, 2, 2, 3];
        const val = 3;
        const result = removeElement(nums, val);
        expect(result).toBe(2);

        expect(nums[0]).toBe(2);
        expect(nums[1]).toBe(2);
    });
    it("example 2", () => {
        const nums= [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const result = removeElement(nums, val);
        expect(result).toBe(5);
        const selectedNums= nums.slice(0, 5).sort()
        const reference= [0, 0, 1, 3, 4]
        expect(reference).toEqual(expect.arrayContaining(selectedNums));
    });
});

// Make this file a module to avoid global scoping
export { }
