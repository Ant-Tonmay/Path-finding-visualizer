import { AlgorithmSelectType, MazeSelectType, SpeedTSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONF = {
    row :1,
    col:1,
    isEnd:false,
    isWall:false,
    isPath:false,
    distance:0,
    isStart:true,
    isTraversed:false,
    parent:null,
}

export const END_TILE_CONF = {
    row :MAX_ROWS-2,
    col:MAX_COLS-2,
    isEnd:false,
    isWall:false,
    isPath:false,
    distance:0,
    isStart:true,
    isTraversed:false,
    parent:null,
}

export const TILE_STYLE =
 "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = `${TILE_STYLE} bg-cyan-400`;
export const START_TILE_STYLE = `${TILE_STYLE} bg-green-400`;
export const END_TILE_STYLE = `${TILE_STYLE} bg-red-400`;
export const WALL_TILE_STYLE = `${TILE_STYLE} bg-gray-400`;
export const PATH_TILE_STYLE = `${TILE_STYLE} bg-green-500`;


export const MAZES:MazeSelectType[] = [
    { name:"No Maze",value:"NONE"},
    { name:"Binary Tree",value:"BINARY_TREE"},
    { name:"Recursive Division",value:"RECURSIVE_DIVISION"},
]


export const PATHFINDING_ALOGRITHMS:AlgorithmSelectType[] = [
    { name:"Dijkstra",value:"DIJKSTRA"},
    { name:"A-Star",value:"ASTAR"},
    { name:"Breadth First Search",value:"BFS"},
    { name:"Depth First Search",value:"DFS"},
]

export const SPEEDS: SpeedTSelectType[] = [
    {name:"Slow",value:2},
    {name:"Normal",value:1},
    {name:"Fast",value:0.5},
];

export const SLEEP_TIME = 8;

export const EXTENDED_SLEEP_TIME = 30;