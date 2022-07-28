import React, { useState } from "react"


export function PlotButtons(){

    const [active, setActive] = useState('')

    return(
        <div className="plot-button-main-wrapper">
                <button className={active=='view'?'plot-button2':'plot-button1'}
                onClick={() => setActive('view')}>View All</button>
                <button className={active=='buy'?'plot-button2':'plot-button1'}
                onClick={() => setActive('buy')}>Buy Property</button>
        </div>
    )
}