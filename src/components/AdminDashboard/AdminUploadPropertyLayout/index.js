import React, { useState } from "react"


export function AdminUploadPropertyLayout({handleAddPropertyChange, addPropertyData, setAddPropertyData}){


    const [eachLayout, setEachLayout] = useState({
        title:'',
        color:'',
        length:'',
        width: ''})

const setLayout = (e) => {
    setEachLayout(prevLayout => {
        return {...prevLayout, [e.target.name]: e.target.value}
    })
}

const addToList = () => {
    setAddPropertyData(prevLayout => {
        return {
            ...prevLayout,
            layouts:[...addPropertyData.layouts, eachLayout]
        }
    })
}

const addAnother = () => {
    setEachLayout({
        title:'',
        color:'',
        length:'',
        width: ''
    })
}

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
                <input type='file' placeholder="No file choosen" name='layoutPhoto'
                onChange={handleAddPropertyChange}></input>
            </div>


            <div className="upload-label-container" style={{marginBottom:'48px'}}>
                <label>Price per Square Meter</label>
                <input type='text' placeholder="Name of Property" name="pricePerSm" value={addPropertyData.pricePerSm}
                onChange={handleAddPropertyChange}></input>
                <p className="first-photo" style={{marginTop: '7px'}}>Enter Price for 1 Square meter of the property</p>
            </div>

            <div className="upload-upload-bottom">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' placeholder='Residential' name='title' value={eachLayout.title}
                    onChange={setLayout}/>
                </div>
                <p>Measurement</p>

                <div className="upload-features" style={{marginBottom:'33px'}}>
                    <div>
                        <label htmlFor="length">Length</label>
                        <input type='text' placeholder='00' name="length" value={eachLayout.length}
                        onChange={setLayout}/>
                    </div>

                    <div>
                        <label htmlFor="width">Width</label>
                        <input type='text' placeholder='00' name="width" value={eachLayout.width}
                        onChange={setLayout}/>
                    </div>
                </div>

                <div className="upload-features">
                    <div>
                        <label htmlFor="cost">Cost</label>
                        <input type='text' placeholder='00'name="cost"
                        value={eachLayout.length && eachLayout.width && addPropertyData.pricePerSm ? 
                        eachLayout.length * eachLayout.width *addPropertyData.pricePerSm  : 'computing...'}/>
                    </div>

                    <div>
                        <label htmlFor="color">Choose Color</label>
                        <input type='color' id="color-input" placeholder="tap to select"/>
                    </div>
                </div>

                <div className="save-property-layout-container">
                    <button onClick={addToList}>Save</button>
                </div>
            </div>

            <div className="upload-another-media" onClick={addAnother}>
                <div><img src="./images/uploadMedia.png"></img></div>
                <p>Add another layout</p>
            </div>

            <div className="preview-layout-container">
                <button onClick={()=> console.log(addPropertyData)}>Preview</button>
            </div>
        </div>
</div>
    )
}