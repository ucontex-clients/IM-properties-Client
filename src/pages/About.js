import React, { useEffect, useRef } from "react";
import { Layout, TeamMember } from "../components";
import { FaUsers } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { HashScroll } from "react-hash-scroll";
export default function About() {
  const location = useLocation().hash;
  const scrollLink = useRef();

  return (
    <Layout>
      <div className="about-image">
        <div className="who-we-are">
          <p>
            Get To Know Who <br /> We Are
          </p>
        </div>
        <img src="./images/aboutImg.png" alt="about cover"></img>
      </div>
      <div className="about-bottom-wrapper px-[22px] md:px-[65px]">
        <div className="doings-images">
          <div style={{ top: "38px" }}>
            <img src="./images/doings1.png" alt="what we do"></img>
          </div>
          <div style={{ bottom: "38px", left: "126px" }}>
            <img src="/images/doings2.png" alt="what we do"></img>
          </div>
        </div>
        <div className="about-right">
          <h2 className="font-fam text-[25px] font-bold mb-[27px]">
            Invest In IM Properties
          </h2>
          <p className="story text-black">
            Land & landed property investment with us guarantees you, 
            Instant allocation, free inspection, no government fee, no 
            agent fee, no bush entry, free survey,  complimentary deed 
            of conveyance and more.
          </p>
          <h2 className="font-fam text-[25px] font-bold mt-[30px] mb-[27px]">
            About IM Properties
          </h2>
          <p className="story text-black">
            IM PROPERTIES has inscribed on her brand, Luxury with peace of 
            mind and  affordable deliverables in Real Estate development 
            over the years in Nigeria.

          </p>
          <p className="story mt-[30px] text-black">
            Our  exciting Team is poised at delivering genuine property
            that guarantees your peace of mind during purchase, sale,  and
            leasing of land and landed property. We deliver positive results
            and high value for client through a mix of expert analysis, market
            Knowledge talent and collaboration. 
          </p>
        </div>
      </div>
      <div className="text-center" style={{ backgroundColor: "#F7F7FB"}}>
        <div className="px-[61px] py-[65.5px] md:py-[106px] md:px-[450px]">
          <h3 className="font-fam text-[18px] font-bold">
            VISION
          </h3>
          <p className="font-fam text-[15px] mt-[10px] md:mt-[30px]">
            To be the no.1 real estate company in sub-sahara Africa and the world.
          </p>
          <h3 className="font-fam text-[18px] font-bold mt-[91px]">
            MISION
          </h3>
          <p className="font-fam text-[15px] mt-[10px] md:mt-[30px]">
            To bring the real estate dream of many  into reality with our total commitment to affordable
            housing and multi payment plans and support.
          </p>
          <h3 className="font-fam text-[18px] font-bold mt-[91px]">
            OUR CORE VALUE
          </h3>
          <p className="font-fam text-[15px] mt-[10px] md:mt-[30px]">
            Integrity | Trust | Affordability
          </p>
        </div>
      </div>
      <section
        className="px-[22px] md:px-[70px] pt-[42px] pb-[90px]"
        style={{ backgroundColor: "#fff" }}
      >
        <h3 className="font-fam text-[25px] font-bold">What we do</h3>
        <p className="font-fam text-[15px] font-medium mt-[8px]">
          At IM Properties we provide world class professional services in:
        </p>
        <div className="md:grid md:grid-cols-2 gap-x-[33px] gap-y-[114px] mt-[49px] flex flex-col">
          <div id="estate">
            <div className="flex items-center gap-x-[3px] mt-[22px]">
              <div
                style={{
                  padding: "5px",
                  border: "1px dashed black",
                  borderRadius: "2px",
                }}
              >
                <FaUsers style={{ color: "#6C6C6C" }} />
              </div>
              <p className="doings" id="estate">
                Real Estate Advisory
              </p>
            </div>
            <div className="mt-[38px]">
              <div className="rounded-[5px]">
                <img
                  src="./images/sell.png"
                  alt="property"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                ></img>
              </div>
              <HashScroll hash="#estate">
                <p className="font-fam mt-[17px] text-[15px] font-medium text-black text-justify">
                  As a leading firm in the industry. We draw from our vast 
                  and deep knowledge of the Real Estate industry to give ...
                </p>
              </HashScroll>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-[3px] mt-[22px]">
              <div
                style={{
                  padding: "5px",
                  border: "1px dashed black",
                  borderRadius: "2px",
                }}
              >
                <FaUsers style={{ color: "#6C6C6C" }} />
              </div>
              <p className="doings" id="property">
                Buy and Sell Properties
              </p>
            </div>
            <div className="mt-[38px]">
              <div className="rounded-[5px]">
                <img
                  src="/images/develop.png"
                  alt="property"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                ></img>
              </div>
              <HashScroll hash="#buy">
                <p className="font-fam mt-[17px] text-[15px] font-medium text-black text-justify">
                  Every property Marketed by IM PROPERTIES  are fully owned by us. We do due diligence 
                  during the acquisition stage, prepare the sites before we put them out for sales.
                  We also offer flexible payment plans and incentives to make acquiring your property easier.
                </p>
              </HashScroll>
            </div>
          </div>
          <div id="property">
            <div className="flex items-center gap-x-[3px] mt-[22px]">
              <div
                style={{
                  padding: "5px",
                  border: "1px dashed black",
                  borderRadius: "2px",
                }}
              >
                <FaUsers style={{ color: "#6C6C6C" }} />
              </div>
              <HashScroll hash="#property">
                <p className="doings" id="property">
                  Property Management
                </p>
              </HashScroll>
            </div>
            <div className="mt-[38px]">
              <div className="rounded-[5px]">
                <img
                  src="/images/management.png"
                  alt="property"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                ></img>
              </div>
              <p className="font-fam mt-[17px] text-[15px] font-medium text-black text-justify">
                We don't only sell lands, We bring to bear our experience 
                and expertise in developing luxury and state-of-the-art 
                property for sale and for rent.

              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-[3px] mt-[22px]">
              <div
                style={{
                  padding: "5px",
                  border: "1px dashed black",
                  borderRadius: "2px",
                }}
              >
                <FaUsers style={{ color: "#6C6C6C" }} />
              </div>
              <HashScroll hash="#building">
                <p className="doings">Building Construction</p>
              </HashScroll>
            </div>
            <div className="mt-[38px]">
              <div className="rounded-[5px]">
                <img
                  src="/images/sell.png"
                  alt="property"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                ></img>
              </div>
              <p className="font-fam mt-[17px] text-[15px] font-medium text-black text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[22px] md:px-[59px] bg-white pt-[55px] pb-[77px]">
        <h3 className="font-fam text-[25px] font-bold mb-[77px]">
          Meet the Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[29px]">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </section>
    </Layout>
  );
}
