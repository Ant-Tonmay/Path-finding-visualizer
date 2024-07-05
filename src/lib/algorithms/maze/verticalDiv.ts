import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constanst";
import { getRandInt, isEqual, sleep } from "../../../utils/helper";
import { GridType, SpeedType, TileType } from "../../../utils/types";
import recDiv from "./recDiv";

export async function verticalDiv({

    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
}:{
    grid: GridType,
    startTile:TileType,
    endTile:TileType,
    row:number,
    col:number,
    height:number,
    width:number,
    setIsDisabled:(isDisabled:boolean) =>void,
    speed:SpeedType,
}){
    const makeWallAt = col + getRandInt(0,width-1) * 2 +1;
    const makePassageAt = row + getRandInt(0,height) * 2 ;

    for(let i = 0 ; i < 2*height-1 ; i++){
        if(makePassageAt !== row+i){
            if(!isEqual(grid[row+i][makeWallAt],startTile) && !isEqual(grid[row+i][makeWallAt],endTile)){
                grid[row+i][makeWallAt].isWall = true;
                document.getElementById(`${row+i}-${makeWallAt}`)!.className=`${WALL_TILE_STYLE} animate-wall`

                await sleep(10*SPEEDS.find((s)=>s.value ===speed)!.value-5);
            }   
        }
    }

    await recDiv({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width:(makeWallAt - col +1)/2,
    setIsDisabled,
    speed,
    })

    await recDiv({
        grid,
        startTile,
        endTile,
        row,
        col: makeWallAt + 1,
        height,
        width:width-(makeWallAt - col +1)/2,
        setIsDisabled,
        speed,
        })
}