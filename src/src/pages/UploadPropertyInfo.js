import React from "react"
import { NavigationBar } from "../components"


export default function UploadPropertyInfo(){
    return(
        <div>
            <NavigationBar page='Property' />
            <div className="upload-property-main-wrapper">
                <div className="upload-property-left">
                    <p>About Property</p>
                    <p>Media</p>
                    <p>Layout</p>
                </div>


                <div className="upload-property-right">
                    <p style={{marginBottom:'58px'}}>About Property Info</p>
                    <div className="upload-label-container">
                        <label>Name of Property</label>
                        <input type='text' placeholder="Name of Property"></input>
                    </div>

                    <div className="upload-label-container">
                        <label>Description</label>
                        <textarea type='text' placeholder="Write something about the property"
                        style={{minHeight: '150px'}}></textarea>
                    </div>

                    <div className="upload-label-container">
                        <label>Location</label>
                        <input type='text' placeholder="Enter the address of the property"></input>
                    </div>

                    <div className="upload-label-container">
                        <label>Features</label>
                        <input type='text' placeholder="Enter the features of the property"></input>
                    </div>

                    <p style={{marginTop: '65px', fontWeight: 700, marginBottom: '33px'}}>Media</p>

                    <div className="upload-media-wrapper">
                        <label>Upload Photo</label>
                        <input type='file' placeholder="No file choosen "></input>
                        <p className="first-photo" style={{marginTop: '7px'}}>First photo would be the display photo</p>
                    </div>

                    <div className="upload-media-container">
                        <div><img src="./images/uploadMedia.png" alt="upload media"></img></div>
                        <p>Add more photos</p>
                    </div>

                    
                    <div className="upload-media-wrapper">
                        <label>Upload Video</label>
                        <input type='file' placeholder="No file choosen "></input>
                    </div>

                    <div className="upload-next-wrapper">
                        <button onClick={() => console.log('yes') }>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}