import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import recDiv from "../lib/algorithms/maze/recDiv";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constanst";
import { constructBorder } from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

export const runMazeAlgorithm = async ({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed,
}:{
    maze:MazeType;
    grid:GridType;
    startTile:TileType;
    endTile:TileType;
    setIsDisabled:React.Dispatch<React.SetStateAction<boolean>>;
    speed:SpeedType;
}) =>{
    if(maze == 'BINARY_TREE'){
        await binaryTree(grid,startTile,endTile,setIsDisabled,speed);
    }else if(maze == 'RECURSIVE_DIVISION'){
        const curSpeed = SPEEDS.find((s)=>s.value ===speed)!.value??2
        await constructBorder(grid,startTile,endTile);
        await recDiv(
            {
             grid,
             startTile,
             endTile,
             row:1,
             col:1,
             height: Math.floor((MAX_ROWS-1)/2),
             width: Math.floor((MAX_COLS-1)/2),
             setIsDisabled,
             speed,
        })
        setTimeout(() =>{
            setIsDisabled(false);
        },800*curSpeed)
    }
}