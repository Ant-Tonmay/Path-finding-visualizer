
import { astar } from "../lib/algorithms/graph_algo/astar";
import { bfs } from "../lib/algorithms/graph_algo/bfs";
import { dfs } from "../lib/algorithms/graph_algo/dfs";
import { dijsktra } from "../lib/algorithms/graph_algo/dijkstra";
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
        case 'DFS':
            return dfs(grid,startTile,endTile)
        case 'DIJKSTRA':
            return dijsktra(grid,startTile,endTile)
        case 'ASTAR':
            return astar(grid,startTile,endTile)
        default:
            return bfs(grid,startTile,endTile)
    }
}