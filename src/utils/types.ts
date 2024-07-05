export type AlgorithmType = "DIJKSTRA" | "ASTAR" | "BFS" | "DFS";
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION" | "RANDOM";

export type TileType ={
    row:number;
    col:number
    isEnd:boolean;
    isWall:boolean;
    isPath:boolean;
    distance:number;
    isStart: boolean;
    isTraversed:boolean;
    parent:TileType | null;
}

export type GridType = TileType[][]
export type SpeedType = 2 | 1 | 0.5;