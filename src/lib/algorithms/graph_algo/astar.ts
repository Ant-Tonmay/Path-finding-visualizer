import { getUnseenNeighbors } from "../../../utils/getUnseenNeighbours";
import { dropFromQueue, isEqual } from "../../../utils/helper";
import { initFuntionCost, initHeuristics } from "../../../utils/heuristic";
import { GridType, TileType } from "../../../utils/types";

export const astar = (grid:GridType,startTile:TileType,endTile:TileType)=>{

    const traversedTiles : TileType[] = [];
    const hueristicCost = initHeuristics(grid,endTile);
    const functionCost = initFuntionCost();
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    functionCost[base.row][base.col] =base.distance + hueristicCost[base.row][base.col];
    base.isTraversed = true;
    const unTraversed = [base];

    while(unTraversed.length>0){
       unTraversed.sort((a,b)=>{
        if(functionCost[a.row][a.col] ===functionCost[b.row][b.col]){
            return b.distance-a.distance;
        }
        return functionCost[a.row][a.col] - functionCost[b.row][b.col];
       })
        const tile = unTraversed.shift()!;
        if(tile.isWall){
            continue;
        }
        if(tile.distance ===Infinity) break;
        tile.isTraversed = true;
        traversedTiles.push(tile);
        if(isEqual(tile,endTile)){
            break;
        }

        const neighbors = getUnseenNeighbors(grid,tile);
        for(let i =0 ; i < neighbors.length ; i++){

            const distanceToNeighbor = tile.distance+1;

           if(distanceToNeighbor < neighbors[i].distance){
            dropFromQueue(neighbors[i],unTraversed);
            neighbors[i].distance = distanceToNeighbor;
            functionCost[neighbors[i].row][neighbors[i].col] = neighbors[i].distance +hueristicCost[neighbors[i].row][neighbors[i].col]
            neighbors[i].parent = tile;
            unTraversed.push(neighbors[i]);
           }
        }
    }

    const path = []

    let tile = grid[endTile.row][endTile.col];
    while(tile!==null){
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return {traversedTiles,path}

}