import React from "react"
import { CartItems, NavigationBar, PlotDimension} from "../components"

export default function FullPropertyLayout(){
 const plots = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,
    3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,]

const availablePlots = plots.map((plot, index) => {
    return <PlotDimension key={index} />
})

const allCartItems = [1,2,3,4].map((item, index) => {
    return <CartItems key={index} number={index+1} />
})

    return(
        <div className="layout-modal-wrapper">
            <NavigationBar page='Property'/>

            <div className="view-all-layout-main-wrapper">
                <div className="layout-left-container">
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
                    <div className="my-cart-wrapper">
                        <div className="my-cart-logo-section-wrapper">
                            <div>
                                <img src="./images/cart.png"></img>
                                <p className="my-cart-number">4</p>
                            </div>
                            <p className="my-cart-para">My Cart</p>
                        </div>
                        <ul className="cart-top-ul">
                            <li className="number-plot">
                                <p>#</p>
                                <p>Plot</p>
                            </li>
                            <li><p>Amount</p></li>
                        </ul>
                        {allCartItems}
                        <ul className="cart-top-ul">
                            <li className="number-plot">
                                <p>Total</p>
                                <p>1911.56SQ.M 141.2m x 71.2m </p>
                            </li>
                            <li><p>N1,840,000</p></li>
                        </ul>

                        <div className="download-layout-button-wrapper" style={{marginBottom: '247px'}}>
                                <button>Make Payment</button>
                        </div>

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