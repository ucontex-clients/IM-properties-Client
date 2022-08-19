import React from "react"
import { ForSale } from "../../ForSale"

export function AdminAllProperties(){


    const displayProperties = [1, 3, 4, 8, 2,5].map((property, index) => {
        return (
            <ForSale key={index} img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
            desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
            minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
        )
    })
    





    return(
        <div className="admin-all-properties-wrapper">
            {displayProperties}
        </div>
    )
}