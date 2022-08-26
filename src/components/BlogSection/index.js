import React from "react"
import { SectionHeading, Blog} from ".."

export function BlogSection(){
    return(
        <div>
            <div className="section-heading-wrapper-features" style={{marginTop:'24px'}}>
                <SectionHeading text={'Latest News Feeds'}/>
            </div>

            <div className="blog-main-wrapper">
                <Blog img1={'./images/news1.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />

                <Blog img1={'./images/news2.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />

                <Blog img1={'./images/news3.png'}
                img2={'./images/Manager.png'} img3={'./images/Calendar.png'}
                poster={'Admin'} date={'22nd July 2022'}
                blogTitle={'10 ways to build a way without borrowing money'} />
            </div>
        </div>
    )
}