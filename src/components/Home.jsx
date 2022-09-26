import React from "react";
import "../styles/home.css";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdRecommend } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import {TbTruckDelivery} from "react-icons/tb"
import {GiCardPickup} from "react-icons/gi"
import {GoVerified} from "react-icons/go"
import {BsClipboardCheck} from "react-icons/bs"



function Home() {
  return (
    <div className="home-bod">
      <div className="hbl">
        <div className="le">
          <MdDashboard color="#a4a4c1" size={30} />
          <p style={{ color: "#a4a4c1" }}>Dashboard</p>
        </div>
        <div className="le1">
          <FaUserAlt color="#ff9933" size={20} />
          <p style={{ color: "#ff9933" }}>User Management</p>
        </div>
        <div className="le">
          <HiOutlineReceiptTax color="#a4a4c1" size={20} />
          <p style={{ color: "#a4a4c1" }}>Tax Settings</p>
        </div>
        <div className="le">
          <MdRecommend color="#a4a4c1" size={20} />
          <p style={{ color: "#a4a4c1" }}>E-Commerce</p>
        </div>
        <div className="le">
          <MdAppSettingsAlt color="#a4a4c1" size={20} />
          <p style={{ color: "#a4a4c1" }}>Promotional Settings</p>
        </div>
        <div className="le">
          <TbReport color="#a4a4c1" size={20} />
          <p style={{ color: "#a4a4c1" }}>Reports</p>
        </div>
        <div className="le" >
          <FiSettings color="#a4a4c1" size={20} />
          <p style={{ color: "#a4a4c1" }}>Settings</p>
        </div>
      </div>
      <div className="hbr">
        <div className="hbr1">
          <h4>Add New Merchant</h4>
          <AiOutlineUserAdd size={25} />
        </div>
        <h3>1.General Details</h3>
        <div className="gdi1">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
        </div>
        <h3>2.KYC Details</h3>
        <div className="gdi1">
          <input type="number" placeholder="Adhaar Number" />
          <input type="number" placeholder="GST Number" />
          <input type="number" placeholder="PAN Number" />
        </div>
        <h3>3.Address Details</h3>
        <h5>Place this pin at your Location</h5>
        <img className="mpi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCZQ10kvgikQ4SDW1n8xaMw9CfyYG-wVkow&usqp=CAU" alt="" />
        <h5>Full Address</h5>
        <input className="ai" type="Text" />
        <h3>4.Retainers Details</h3>
        
        <div className="rdi1">
          <input type="text" placeholder="Retainer Type" />
          <input type="number" placeholder="Retainer value" />
        </div>
        <div className="rdi1">
          <input type="number" placeholder="Buy Comission" />
          <input type="number" placeholder="Sell Comission" />
        </div>
        <h5>Modules Applicable</h5>
        <div className="mab">
          <div className="mab-el">
            <GoFileSubmodule size={30} />
            <h3>Custodian</h3>
          </div>
          <div className="mab-el">
            <TbTruckDelivery size={30} />
            <h3>Delivery</h3>
          </div>
          <div className="mab-el">
            <GiCardPickup size={30} />
            <h3>Pickup</h3>
          </div>
          <div className="mab-el">
            <GoVerified size={30} />
            <h3>Verifier</h3>
          </div>
          <div className="mab-el">
            <BsClipboardCheck size={30} />
            <h3>Refiner</h3>
          </div>
        </div>
        <div className="gdi1">
          <input type="number" placeholder="Settlement in days" />
          <input type="number" placeholder="Limit in grams" />
          <input type="number" placeholder="Applicable(yes/no)" />
        </div>
        <div className="btnsec">
<button>Add Merchant</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
