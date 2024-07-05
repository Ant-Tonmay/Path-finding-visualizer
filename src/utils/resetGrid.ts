import { END_TILE_CONF, MAX_COLS, MAX_ROWS, START_TILE_CONF, TILE_STYLE } from "./constanst";
import { isEqual } from "./helper";
import { GridType, TileType } from "./types";

export const resetGrid = ({
    grid,
    startTile = START_TILE_CONF,
    endTile = END_TILE_CONF,
}:{
    grid:GridType;
    startTile?:TileType;
    endTile?:TileType;
})=>{
    const newGrid = grid.slice();
    for(let row = 0 ; row < MAX_ROWS ; row++) {
        for(let col = 0 ; col < MAX_COLS ; col++) {
            const tile = grid[row][col];
            tile.distance = Infinity
            tile.isTraversed = false
            tile.parent = null
            tile.isWall = false

            if(!isEqual(startTile, tile) && !isEqual(endTile, tile)){
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
                
                if(tileElement){
                    tileElement.className = TILE_STYLE;
                }
                if(tile.row === MAX_ROWS-1){
                    tileElement?.classList.add("border-b");
                }
                if(tile.col === 0){
                    tileElement?.classList.add("border-l");
                }
            }
        }
    }
    return newGrid;
}