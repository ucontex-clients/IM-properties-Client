import React from "react"


export function AdminUploadPropertyLayout(){
    return(
        <div className="add-property-admin" style={{paddingInline:'60px'}}>
        <div className="upload-property-left">
            <p>About Property</p>
            <p>Media</p>
            <p>Layout</p>
        </div>


        <div className="upload-property-right" style={{marginBottom:'200px', paddingTop:'97px'}}>
            <p style={{marginBottom:'33px'}}>Property Layout</p>

            <div className="upload-media-wrapper" style={{marginBottom:'43px'}}>
                <label>Upload Layout Photo</label>
                <input type='file' placeholder="No file choosen "></input>
            </div>


            <div className="upload-label-container" style={{marginBottom:'48px'}}>
                <label>Price per Square Meter</label>
                <input type='text' placeholder="Name of Property"></input>
                <p className="first-photo" style={{marginTop: '7px'}}>Enter Price for 1 Square meter of the property</p>
            </div>

            <div className="upload-upload-bottom">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' placeholder='Residential'/>
                </div>
                <p>Measurement</p>

                <div className="upload-features" style={{marginBottom:'33px'}}>
                    <div>
                        <label htmlFor="length">Length</label>
                        <input type='text' placeholder='00'/>
                    </div>

                    <div>
                        <label htmlFor="width">Width</label>
                        <input type='text' placeholder='00'/>
                    </div>
                </div>

                <div className="upload-features">
                    <div>
                        <label htmlFor="cost">Cost</label>
                        <input type='text' placeholder='00'/>
                    </div>

                    <div>
                        <label htmlFor="color">Choose Color</label>
                        <input type='color' id="color-input" placeholder="tap to select"/>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}