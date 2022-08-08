import React from "react"
import { NavigationBar, PlotDimension } from "../components"


export default function AddPlot(){

const plotDimensions = [1,2,3,4,5,6,7,8,9,0,1,2].map((plot, index) => {
    return <PlotDimension key={index} />
})



    return(
        <div style={{paddingInline: '25px', paddingBottom: '15px'}}>
            <NavigationBar page='Property' />
            <div className="add-property-wrapper">
                <div className="add-property-left">
                    <div className="add-left-head" style={{padding: '22px 43px'}}>
                        <p>CAMPUS GARDEN ESTATE PORT HARCOURT</p>
                        <div>
                            <p>Select plot(s) to purchase</p>
                            <p>30 Plots</p>
                        </div>
                    </div>
                    <div className="add-property-picture-wrapper"><img src="./images/Capture1.png"></img></div>
                    <div className="zoom-holder">
                        <div style={{display:'flex', columnGap:'29px'}}>
                            <div className="out-in-holder"><img src="./images/zoomOut.png"></img></div>
                            <div className="out-in-holder"><img src="./images/zoomIn.png"></img></div>
                        </div>
                    </div>
                    <div className="add-plot-bottom">
                        <div>
                            <button className="add-plot-button">Download Layout</button>
                        </div>
                        <div className="property-bottom-right">
                            <label>Enter Plot Number</label>
                            <div>
                                <input type='text' placeholder='E.g CG-004'></input>
                                <button className="add-plot-button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
        <div style={{display:'flex', flexDirection: 'column', rowGap: '40px'}}>
            <div className="property-layout-wrapper">
                <div className="property-layout-head">
                    <span>Property Layout</span>
                </div>

                <div className="property-layout-main">
                        {plotDimensions}
                </div>

            </div>
        </div>
            </div>
        </div>
    )
}