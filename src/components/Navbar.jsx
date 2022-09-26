import React from 'react'
import "../styles/navbar.css"
import {CgProfile} from "react-icons/cg"
import {FaBell} from "react-icons/fa"
function Navbar() {
  return (
    <div className='nvb'>
<div className="nvb-1">
  <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFK4fTvKzY9pQ/company-logo_200_200/0/1661695664141?e=1672272000&v=beta&t=oiRAS4gtXaI2Z7-qaKxmAlabiTTeSKgi7AEdNH_NrtY" alt="" />
  <h5>BKS My Gold Pvt Ltd</h5>
  
</div>
<h6 style={{"color":"#ff9933"}}>Welcome,Megha Paul!</h6>
<div className="nvb-2">
<FaBell color='#cc6600' size={30}/>
 <CgProfile color='#cc6600' size={30}/>

</div>
    </div>
  )
}

export default Navbar