import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constanst";


export function Grid(){
    const {grid} = usePathfinding();

    return (
        <div
            className={twMerge(
                "flex items-center justify-center border-sky-300",
                `lg:min-h-[${MAX_ROWS*17}px]   md:min-h-[${MAX_ROWS*15}px]
                xs:min-h-[${MAX_ROWS*8}px] min-h-[${MAX_ROWS*7}px]`,

                `lg:w-[${MAX_COLS*17}px] ,md:w-[${MAX_COLS*15}px] 
                xs:w-[${MAX_COLS*8}px] w-[${MAX_COLS*7}px]`
            )}

            
        >

            {
                grid.map((row,rowIndex)=>(
                    <div key={rowIndex} className="flex"> 
                        {
                            row.map((tile,tileIndex)=>(
                                <div className="bg-white h-2 w-2 border"></div>
                            ))
                        }
                    </div>
                ))

            }
        
        </div>
    )

}