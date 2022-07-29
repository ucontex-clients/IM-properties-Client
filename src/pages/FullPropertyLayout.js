import React from "react"
import { NavigationBar, PlotDimension} from "../components"

export default function FullPropertyLayout(){
 const plots = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,
    3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,]

const availablePlots = plots.map((plot, index) => {
    return <PlotDimension key={index} />
})

    return(
        <div className="layout-modal-wrapper">
            <NavigationBar page='Property'/>

            <div className="view-all-layout-main-wrapper">
                <div className="layout-first-child">
                        <div className="layout-head-section">
                            <p>CAMPUS GARDEN ESTATE PORT HARCOURT</p>
                            <div>
                                <p>Select plot(s) to purchase</p>
                                <p>30 Plots</p>
                            </div>
                        </div>

                        <div className="all-layout-wrapper">
                            {availablePlots}
                        </div>

                        <div className="download-layout-button-wrapper">
                            <button>Download Layout</button>
                        </div>
                </div>

                <div className="layout-last-child">
                    <div className="preview-text-holder"><p>Preview</p></div>
                    <div className="layout-last-child-image-wrapper"><img src="./images/Capture.png"></img></div>
                </div>
            </div>
        </div>
    )
}