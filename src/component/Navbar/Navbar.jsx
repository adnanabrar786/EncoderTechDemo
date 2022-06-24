import React, { useState } from "react";
import "./Navbar.css";
import navbarlogo from "./images/navbarlogo.png";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [company, setCompany] = useState(false);
  const [services, setServices] = useState(false);
  const [hireDeveloper, setHireDeveloper] = useState(false);
  const [solution, setSolution] = useState(false);

  return (
    <div className="navbar_allwork_container">
      <div className="navbar_container">
        {/* navbar left div */}
        <img className="navbarlogo" src={navbarlogo} alt="logo" />

        {/* navbar right div */}

        <div className="navbar_rightdiv">
          <p
            onClick={() => {
              setCompany(!company);
            }}
          >
            Company <FaChevronDown />
          </p>
          <p onClick={() => setServices(!services)}>
            Services <FaChevronDown />
          </p>
          <p onClick={() => setHireDeveloper(!hireDeveloper)}>
            Hire Developers <FaChevronDown />
          </p>
          <p onClick={() => setSolution(!solution)}>
            Solutions <FaChevronDown />
          </p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Icon</p>
          <button id="navbar_button">
            REQUEST A QUOTE
            <i class="bi bi-arrow-up-right" style={{paddingLeft:"5px"}}></i>
          </button>
        </div>

        {/* navbar right div end */}
      </div>
      {/* company dropdown */}

      {company ? <h1>hello</h1> : null}

      {/* services dropdown */}

      {services ? (
        // display flex row
        <div className="navbar_services_container">
          {/* servicer column one */}
          <div>
            <h4>App Development</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
            <h4>Salesforce Development</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          {/* servicer column two*/}
          <div>
            <h4>web Development</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <h4>Low Code Development</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          {/* servicer column three */}
          <div>
            <h4>Digital marketing</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <h4>CMS and Ecommerce </h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          {/* servicer column four */}
          <div>
            <h4>Game Development</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </div>
          {/* servicer column five */}
          <div>
            <h4>Digital Transformation Services</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
            <h4>Block Chain</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      ) : null}

      {/* Hire Developer */}
      {hireDeveloper ? (
        <div className="navbar_hireDeveloper_container">
          {/* hireDeveloper column one */}
          <div>
            <h3>Hire Web Developers</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
            </ul>
          </div>

          {/* hireDeveloper column two */}
          <div>
            <h4>Hire App Developers</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
            </ul>
          </div>

          {/* hireDeveloper column three */}
          <div>
            <h4>Hire UI Developers</h4>
            <ul>
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      ) : null}

      {/* solution dropdown */}
      {solution ? (
        <div className="navbar_solution_container">
          {/* solution column one */}
          <div>
            <h4>On Demand App Solutions</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </div>
          {/* solution column two */}

          <div>
            <h4>Industry solutions</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          {/* solution column three */}

          <div>
            <h4>Products and Clone</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          {/* solution column four */}

          <div>
            <h4>Industries We Serve</h4>
            <ul>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
