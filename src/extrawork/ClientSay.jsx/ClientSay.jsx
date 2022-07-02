import React from "react";
import "./ClientSay.css";

// ClientSay section  and TechnologyBlog section

const ClientSay = () => {
  return (
    <div>
      {/* ClientSay start */}
      {/* <section className="ClientSay_container">
        <div className="row">
          <div className="ClientSay_top_container col-8">
            <p className="ClientSay_heading">WHAT CLIENTS SAY</p>
            <p className="ClientSay_paragraph">
              Happy <b>Clients</b> With <b>Digital</b> Transformation
            </p>
          </div>
        </div>
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

        <div className="ClientSay_button_div">
          <button className="ClientSay_button">
            VIEW ALL TESTIMONIALS
          </button>
        </div>
      </section> */}

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
            {/* Blog_Picture_one */}
            <div id="Blog_Picture_one" className="Blog_Picture_div">
              <p className="Blog_Picture_div_para">
                Best Useful Apps for Students on iPad, iPhone, Android (2022)
              </p>
            </div>
            {/* Blog_Picture_Two */}
            <div id="Blog_Picture_Two" className="Blog_Picture_div">
              <p className="Blog_Picture_div_para">
                Best NFT Tokens & Coins to Buy in 2022 [Non Fungible Tokens
                List]
              </p>
            </div>
          </div>
          <div className="col-6">
            {/* Blog_Picture_Three */}
            <div id="Blog_Picture_Three" className="Blog_Picture_div">
              <p className="Blog_Picture_div_para">
                45+ Best Online Business Ideas for Beginners in 2022 [Easy to
                Start]
              </p>
            </div>
            {/* Blog_Picture_Four */}
            <div id="Blog_Picture_Four" className="Blog_Picture_div">
              <p className="Blog_Picture_div_para">
                Low-Cost Business Ideas with High Profit -Start With Low
                Investment
              </p>
            </div>

            <div className="blog_button_Div">
              <button className="blog_button">VIEW ALL TESTIMONIALS</button>
            </div>
          </div>
        </main>
      </section>

      {/* TECHNICAL BLOG SECTION END */}
    </div>
  );
};

export default ClientSay;
