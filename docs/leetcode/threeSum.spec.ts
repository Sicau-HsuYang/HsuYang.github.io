import { threeSum } from "./threeSum";

describe("three sum", () => {
  it("case 1", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const res = threeSum(nums);
    expect(res).toContainEqual([-1, -1, 2]);
    expect(res).toContainEqual([-1, 0, 1]);
    expect(res.length).toBe(2);
  });

  it("case 2", () => {
    const nums = [-1, 0, 1, 2, -1, -4, 1];
    const res = threeSum(nums);
    expect(res).toContainEqual([-1, -1, 2]);
    expect(res).toContainEqual([-1, 0, 1]);
    expect(res.length).toBe(2);
  });

  it("case 3", () => {
    const nums = [0, 0, 0];
    const res = threeSum(nums);
    expect(res).toContainEqual([0, 0, 0]);
    expect(res.length).toBe(1);
  });

  it("case 4", () => {
    const nums = [-1, 0, 1, 0];
    const res = threeSum(nums);
    expect(res).toContainEqual([-1, 0, 1]);
    expect(res.length).toBe(1);
  });

  it("case 5", () => {
    const nums = [-2, 0, 1, 1, 2];
    const res = threeSum(nums);
    expect(res).toContainEqual([-2, 0, 2]);
    expect(res).toContainEqual([-2, 1, 1]);
    expect(res.length).toBe(2);
  });

  it("case 6", () => {
    const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
    const res = threeSum(nums);
  });
});
