
import { bfs } from "../lib/algorithms/graph_algo/bfs";
import { GridType, TileType , AlgorithmType } from "./types";
export const runPathFindingAlgo = ({
    grid,
    startTile,
    endTile,
    algorithm,
}:{
    grid:GridType;
    startTile:TileType;
    endTile:TileType;
    algorithm:AlgorithmType;
})=>{
    switch(algorithm) {
        case 'BFS':
            return bfs(grid,startTile,endTile)
        default:
            return bfs(grid,startTile,endTile)
    }
}