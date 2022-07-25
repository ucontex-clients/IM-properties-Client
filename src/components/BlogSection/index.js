import React from "react"
import { SectionHeading,  SectionTab, Blog} from ".."

export function BlogSection(){
    return(
        <div>
             <div className="features-tab-wrapper">
                <SectionTab text={"News & Blog"}/>
            </div>

            <div className="section-heading-wrapper-features" style={{marginBottom:'67px'}}>
                <SectionHeading text={'Latest News Feeds'}/>
            </div>

            <div className="blog-main-wrapper">
                <Blog img1={'./images/feedbackImage1.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />

                <Blog img1={'./images/feedbackImage1.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />

                <Blog img1={'./images/feedbackImage1.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />
            </div>
        </div>
    )
}