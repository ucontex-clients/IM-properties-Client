import React, { useState } from "react"
import { Link } from "react-router-dom"


export function PlotButtons(props) {

    const [active, setActive] = useState('')

    return (
        <div className="plot-button-main-wrapper">
            {/* <button className={active==='view'?'plot-button2':'plot-button1'}
                onClick={() => {
                    setActive('view')
                    window.location.assign('/layout')
                }}>View All</button>
                <button className={active==='buy'?'plot-button2':'plot-button1'}
                onClick={() => setActive('buy')}>Buy Property</button> */}
            <Link to={"/layout/" + props.id}>
                <button className={active === 'view' ? 'plot-button2' : 'plot-button1'}
                    onClick={() => {
                        setActive('view')
                    }}>View All</button>
            </Link>

            <button className={active === 'buy' ? 'plot-button2' : 'plot-button1'}
                onClick={() => setActive('buy')}>Buy Property</button>
        </div>
    )
}