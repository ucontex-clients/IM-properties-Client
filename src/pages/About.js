import React, { useEffect, useRef } from "react";
import { Layout, TeamMember } from "../components";
import { FaUsers } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function About() {
  const location = useLocation().hash;
  const scrollLink = useRef();

  useEffect(() => {
    if (location) {
      scrollLink.current.click();
      console.log(location);
    }
  }, []);

  return (
    <Layout>
      <Link to={`${location}`} className="hidden" ref={scrollLink}></Link>
      <div className="about-image">
        <div className="who-we-are">
          <p>
            Get To Know Who <br /> We Are
          </p>
        </div>
        <img src="./images/aboutImg.png" alt="about cover"></img>
      </div>
      <div className="about-bottom-wrapper">
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
            About IM Properties
          </h2>
          <p className="story text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="story mt-[30px] text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <section className="px-[70px] pt-[42px] pb-[90px]">
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
                Estate Development
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
              <p className="font-fam mt-[17px] text-[15px] font-medium text-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
              <p className="font-fam mt-[17px] text-[15px] font-medium text-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
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
              <p className="doings" id="property">
                Property Management
              </p>
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
              <p className="font-fam mt-[17px] text-[15px] font-medium text-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
              <p className="doings" id="building">
                Building Construction
              </p>
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
              <p className="font-fam mt-[17px] text-[15px] font-medium text-light text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[59px] bg-white pt-[55px] pb-[77px]">
        <h3 className="font-fam text-[25px] font-bold mb-[77px]">
          Meet the Team
        </h3>
        <div className="grid grid-cols-3 gap-x-[29px]">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </section>
    </Layout>
  );
}
