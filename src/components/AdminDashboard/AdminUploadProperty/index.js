import React, { useRef } from "react"

export function AdminUploadProperty({setAdminPage, handleAddPropertyChange, addPropertyData}){

const addPhoto = useRef()




    return(
        <div className="add-property-admin">
                <div className="upload-property-left">
                    <p>About Property</p>
                    <p>Media</p>
                    <p>Layout</p>
                </div>


                <div className="upload-property-right" style={{marginBottom:'200px'}}>
                    <p style={{marginBottom:'58px'}}>About Property Info</p>
                    <div className="upload-label-container">
                        <label>Name of Property</label>
                        <input type='text' name='name' value={addPropertyData.name}
                        placeholder="Name of Property" onChange={handleAddPropertyChange}></input>
                    </div>

                    <div className="upload-label-container">
                        <label>Description</label>
                        <textarea type='text' placeholder="Write something about the property"
                        style={{minHeight: '150px'}} name='description'
                        value={addPropertyData.description.description} onChange={handleAddPropertyChange}></textarea>
                    </div>

                    <div className="upload-label-container">
                        <label>Location</label>
                        <input type='text' placeholder="Enter the address of the property"
                        name='location' value={addPropertyData.location} onChange={handleAddPropertyChange}></input>
                    </div>

                    <div className="upload-label-container">
                        <label>Features</label>
                        <input type='text' placeholder="Enter the features of the property"
                        name="features" value={addPropertyData.features} onChange={handleAddPropertyChange}></input>
                    </div>

                    <p style={{marginTop: '65px', fontWeight: 700, marginBottom: '33px'}}>Media</p>

                    <div className="upload-media-wrapper">
                        <label>Upload Photo</label>
                        <input type='file' placeholder="No file choosen " name="pictures"
                        onChange={handleAddPropertyChange}></input>
                        <p className="first-photo" style={{marginTop: '7px'}}>First photo would be the display photo</p>
                    </div>

                    <div className="upload-media-container" onClick={() => addPhoto.current.click()}>
                        <div><img src="./images/uploadMedia.png"></img></div>
                        <p>Add more photos</p>
                        <input type='file' name="pictures" className="add-more-photos"
                        ref={addPhoto} onChange={handleAddPropertyChange}></input>
                    </div>

                    
                    <div className="upload-media-wrapper">
                        <label>Upload Video</label>
                        <input type='file' placeholder="No file choosen " name="video"
                        onChange={handleAddPropertyChange}></input>
                    </div>

                    <div className="upload-next-wrapper">
                        <button onClick={() => {
                            setAdminPage('layout')
                            console.log(addPropertyData)
                        }}>Next</button>
                    </div>
                </div>
        </div>
    )
}