import { Grid, parseGridStrings, Position } from "./grid";
import { solve } from "./path";



test("solve a 1x1 map - no steps", async function () {
  const grid: Grid = parseGridStrings([
    ".",
  ]);

  const expectedPathOutput: Position[] = [];
  expect(solve(grid)).toStrictEqual(expectedPathOutput);
});

test("solve a non-trivial 5x5 map", async function () {
  const grid: Grid = parseGridStrings([
    "...x.",
    "..xxx",
    "x.x..",
    ".....",
    "xxx.."
  ]);

  const expectedPathOutput: Position[] = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 1 },
  ];
  expect(solve(grid)).toStrictEqual(expectedPathOutput);

 