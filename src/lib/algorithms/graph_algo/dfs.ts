import { getUnseenNeighbors } from "../../../utils/getUnseenNeighbours";
import { isEqual } from "../../../utils/helper";
import { isInStack } from "../../../utils/isInStack";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid:GridType,startTile:TileType,endTile:TileType)=>{

    const traversedTiles : TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTraversed = [base];

    while(unTraversed.length>0){
        const tile = unTraversed.pop()!;
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
            if(!isInStack(neighbors[i], unTraversed)){
                neighbors[i].distance = tile.distance+1;
                neighbors[i].parent = tile
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