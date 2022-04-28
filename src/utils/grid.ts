export type Path = [Direction, Position][];

export type Direction = "right" | "down";

export interface Position {
    x: number;
    y: number;
}


/** A 2D grid of terrain cells. 
 * 
 * Don't query or manipulate a Grid's `rows` data directly, 
 * rather use functions such as `cellAt(pos, grid)` to query it.  
 */
export interface Grid {
    rows: CellType[][];
    numCols: number;
    numRows: number;
}
/** 
"." is passable terrain.
"x" is impassable terrain.  
 */
export type CellType = "." | "x";


/** Return the contents of the grid at the given position, or null if that position is not on the grid.*/
export function cellAt(pos: Position, grid: Grid): CellType | null {
    if (pos.y >= grid.numRows || pos.x >= grid.numCols) {
        return null;
    }
    return grid.rows[pos.y][pos.x];
}

export function getBottomRightPosition(grid: Grid): Position {
    return { x: grid.rows[0].length - 1, y: grid.rows.length - 1 };
}

export function getTopLeftPosition(grid: Grid): Position {
    return { x: 0, y: 0 };
}

/** Parse a human-readable map into a structured Grid.  */
export function parseGridStrings(mapLines: string[]): Grid {
    const rows = mapLines.map(row => row.split("") as CellType[]);
    return {
        rows,
        numCols: rows[0].length,
        numRows: rows.length
    };
}

