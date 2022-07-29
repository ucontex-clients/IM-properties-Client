import React, { useState } from "react"

export function PlotDimension(){

    const [selected, setSelected] = useState(false)

    const borderStyle1 = {
        border: '1px solid #C6C5C5'
    }

    const borderStyle2 = {
        border: '1px solid #FF1212'
    }




    return(
        <div className="plot-dimension-main-wrapper" style={selected?borderStyle2:borderStyle1}
        onClick={()=> setSelected(prevValue => !prevValue)}>
            <p className="dimension1">15.3m</p>
            <p className="dimension2">30.6m</p>
            <p className="dimension3">N360,000</p>
            <p className="dimension4">464.89 SQ.M</p>
        </div>
    )
}