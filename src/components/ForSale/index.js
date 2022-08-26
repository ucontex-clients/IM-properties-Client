import React from "react"

export function ForSale({img, title, desc, minPrice, maxPrice, size}){

    const checkOut = () => {
        window.location.assign('/property')
    }


    return(
        <div className="one-sale-wrapper">
            <div className="sale-image-wrapper">
                <div className="property-arrow-container"><img src="./images/propertyArrow.png" alt="arrow"></img></div>
                <img src={img} className="sale-image" alt="property cover"></img>
            </div>

            <div className="sales-text-wrapper">
                <h3>{title}</h3>
                <p className="product-price">{`N${minPrice}`} - {`N${maxPrice}`}</p>

                <div className="office-wrapper">
                    <div className="office-image-wrapper">
                        <img src="./images/venue.png" alt="venue icon"></img>
                    </div>
                    <p>Owerri, Imo, Nigeria</p>
                </div>

                <div className="view-product-button-wrapper">
                    <button className="view-product-button" onClick={checkOut}>VIEW</button>
                </div>
            </div>
        </div>
    )
}