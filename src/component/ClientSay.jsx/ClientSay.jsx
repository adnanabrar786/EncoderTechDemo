import React from "react";
import "./ClientSay.css";
import ReactPlayer from "react-player";

// ClientSay section  and TechnologyBlog section

const ClientSay = () => {
  return (
    <div>
      {/* ClientSay start */}
      <section className="ClientSay_container">
        {/* ClientSay top work */}
        <div className="row">
          <div className="ClientSay_top_container col-8">
            <p className="ClientSay_heading">WHAT CLIENTS SAY</p>
            <p className="ClientSay_paragraph">
              Happy <b>Clients</b> With <b>Digital</b> Transformation
            </p>
          </div>
        </div>
        {/* ClientSay video work */}

        <div className="ClientSay_VideoDiv">
          <div className="ClientSay_leftVideo">
            <ReactPlayer
              width="100%"
              height="320px"
              url="https://youtu.be/AuVHftBiDVw"
              controls
            />
          </div>
          <div className="ClientSay_middleVideo">
            <ReactPlayer
              width="101%"
              height="450px"
              url="https://youtu.be/AuVHftBiDVw"
              controls
            />
          </div>
          <div className="ClientSay_rightVideo">
            <ReactPlayer
              width="100%"
              height="325px"
              url="https://youtu.be/AuVHftBiDVw"
              controls
            />
          </div>
        </div>
        {/* ClientSay button */}

        <div className="ClientSay_button_div">
          <button className="ClientSay_button">
            VIEW ALL TESTIMONIALS
            <i class="bi bi-arrow-up-right" style={{ paddingLeft: "5px" }}></i>
          </button>
        </div>
      </section>
      {/* ClientSay end */}

      {/* TECHNICAL BLOG SECTION START */}

      <section>
        <main className="BLOG_row row">
          <div className="BLOG_Left_col col-6">
            <div>
              <p className="BLOG_heading">TECHNICAL BLOGS</p>
              <p className="BLOG_paragraph">
                Latest <b>Blogs</b> And <b>News</b>
              </p>
              <p>
                Stay updated with the latest development insights,
                technologies,trends.
              </p>
            </div>

            {/* client say  video card */}
            <div className="Blog_Picture">
             video
            </div>

            <div className="Blog_Picture">
             video
            </div>
          </div>
          <div className="col-6">
            <div className="Blog_Picture">
             video
            </div>

            <div className="Blog_Picture">
             video
            </div>

            <div className="blog_button_Div">
              <button className="blog_button">
                VIEW ALL TESTIMONIALS
                <i
                  class="bi bi-arrow-up-right"
                  style={{ paddingLeft: "5px" }}
                ></i>
              </button>
            </div>
          </div>
        </main>
      </section>

      {/* TECHNICAL BLOG SECTION END */}
    </div>
  );
};

export default ClientSay;
