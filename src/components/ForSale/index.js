import React from "react"

export function ForSale({img, title, desc, minPrice, maxPrice, size}){
    return(
        <div className="one-sale-wrapper">
            <div className="sale-image-wrapper">
                <img src={img} className="sale-image"></img>
            </div>

            <div className="sales-text-wrapper">
                <h3 className="sale-title">{title}</h3>
                <p className="sale-description">{desc}</p>

                <div className="product-price-wrapper">
                    <p className="product-price">{`N${minPrice}`} - {`N${maxPrice}`}</p>
                    <p className="product-size">{size} Plots</p>
                </div>
                
                <div className="thin-line"></div>

                <div className="office-wrapper">
                    <div className="office-image-wrapper">
                        <img src="./images/office.png"></img>
                    </div>
                    <p>Owerri, Imo, Nigeria</p>
                </div>

                <div className="venue-wrapper">
                    <div className="venue-image-wrapper">
                        <img src="./images/venue.png"></img>
                    </div>
                    <p>Obinze Umuokanne road, Owerri, Imo State</p>
                </div>

                <div className="view-product-button-wrapper">
                    <button className="view-product-button">VIEW</button>
                </div>
            </div>
        </div>
    )
}