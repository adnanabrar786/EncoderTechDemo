import React from "react";
import "./MobileService.css";
import CardServices from "./CardServices";
import CardCustomApp from "./CardCustomApp";

const MobileServices = () => {
  return (
    <div>
      <div className="MobileService_container">
        {/* MobileService_CompanyIntro section start  one*/}
        <section className="MobileService_CompanyIntro_section">
          <main className="MobileService_CompanyIntro_main container">
            <h1>Best Mobile App Development Company In Pakistan</h1>
            <p>
              Start your journey with The Encoder Sysytem, a 360 degree
              enterprise Pakistan mobile app development company that helps you
              visualize and develop mobile apps to elevate your business to the
              next level.
            </p>
            <p>
              Invest in highly functional, user centric and engaging mobile
              applications developed by the experts in the field. We help you
              build native or cross platform mobile app design services,
              migration, update, & ongoing maintenance services.
            </p>
            <p>
              Get full-stack mobile application development services for SMEs,
              enterprises, agencies and startups. Solutions designed to provide
              a custom mobile app development experience that fits your
              requirement perfectly.
            </p>
            <button>Request A Free Quote</button>
          </main>
        </section>
        {/* MobileService_CompanyIntro section end */}

        {/* MobileService_Services section start  two*/}
        <section className="MobileService_Services">
          <div className="MobileService_Services_upperWork container">
            <h2>
              Mobile App Development <span>Services</span>
            </h2>
            <p>
              Scale your business capabilities with a mobile app development
              firm committed to provide you with the best mobile applications.
              Choose from a wide range of mobile app development services that
              best suit your business.
            </p>
          </div>

          <div className="CardServices_map_conatiner">
            <CardServices />
          </div>
          <div>
            <button>Get Started Today</button>
          </div>
        </section>

        {/* MobileService_Services section end */}

        {/* mobile custom app technologies section start  three */}

        <section className="MobileService_CustomApp">
          <div className="MobileService_Services_upperWork container">
            <h2>
              Top <span> Mobile App Development Technologies </span> To Build
              Custom Apps
            </h2>
            <p>
              Our leading mobile app development agency provides iOS as well as
              <span>
                <b>Android app development services</b>
              </span>
              for different mobile app development technologies. The NineHertz
              helps you build custom mobile apps with great application
              development tools to make an app successful on the
              <span>
                <b>PlayStore</b>
              </span>
              or
              <span>
                <b>App Store</b>
              </span>
            </p>
          </div>

          <div>
            <CardCustomApp />
          </div>
        </section>

        {/* mobile custom app technologies section end   */}

        {/* integeretion services section start  four*/}

        <section className="MobileService_integeretionServices">
          {/* integeretion services upper work start */}
          <div className="MobileService_Services_upperWork container">
            <h2>
              Our <span>Mobile App Integration</span> Services – ERP, CRM,
              API,CMS
            </h2>
            <p>
              Being an eminent mobile application integration service provider,
              we provide seamless integrations for CMS, CRM, ERP, API with
              various 3rd party and existing systems to optimize
              <span>
                <b>mobile app making costs.</b>
              </span>
            </p>
          </div>

          {/* integeretion services down work start */}
          <div>
            {/* row one */}
            <div
              style={{ height: "400px", backgroundColor: "red" }}
              className="integeretion_services_slider"
            ></div>
          </div>
        </section>

        {/* integeretion services section end  */}

        {/* mobile services Agency section start  five */}

        <section className="MobileService_agency">
          <div className="MobileService_agency_card_mapcontainer container">
            {/* one card */}
            <div className="MobileService_agency_card">
              <h1>1200+</h1>
              <p>Ideas and Projects Delivered</p>
            </div>
            {/* two card */}
            <div className="MobileService_agency_card">
              <h1>1200+</h1>
              <p>Ideas and Projects Delivered</p>
            </div>
            {/* three card */}
            <div className="MobileService_agency_card">
              <h1>1200+</h1>
              <p>Ideas and Projects Delivered</p>
            </div>
            {/* four card */}
            <div className="MobileService_agency_card">
              <h1>1200+</h1>
              <p>Ideas and Projects Delivered</p>
            </div>
          </div>
          <div className="MobileService_Services_upperWork container">
            <h2>Get Started With Excellent Mobile App Development Agency! </h2>
            <p>
              We can be your flag bearers of user-centric and captivating mobile
              applications that develop a seamless communication channel between
              you and your customer. Leverage the power of one of the top mobile
              apps development agencies in India! Get started today
            </p>
            <button>Connect An Expert</button>
          </div>
        </section>

        {/* mobile services Agency section end  */}
      </div>
    </div>
  );
};

export default MobileServices;
