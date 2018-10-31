import React, { Component } from 'react';
import '../css/pricing.css'
class Pricing extends Component {
    constructor() {
        super()
    }


    render() {
        return(
          <div>  
  <div class="container">
  <div class="row">
    <div class="col-lg-8 col-md-8 col-sm-12">
      <h2>Choose the plan that works for you</h2>
      <p style={{color: "#bbb"}}>All plans include unlimited typeforms. You can cancel anytime.</p>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
      <p style={{color: "#bbb"}}>Monthly Yearly (2 months for free)</p>
    </div>
  </div>
</div>
  <div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12">
      <div class="basic">
        <h3 style={{color:"#88c5c7", marginBottom: "0px"}}>BASIC (free)</h3>
        <span style={{color: "#88c5c7"}}>Get to know Typeform</span>
        <h6 style={{marginTop: "20px"}}>100 responses / mo<br/>
            10 questions per typeform</h6>
        <p style={{color: "#000"}}>The essentials for getting better answers online.</p>
        <br/>
        <a href="#" class="startfree">Start Free</a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
      <div class="pro">
          <h3 style={{color:"#88c5c7", marginBottom: "0px"}}>BASIC (free)</h3>
          <span style={{color: "#88c5c7"}}>Get to know Typeform</span>
          <h6 style={{marginTop: "20px"}}>100 responses / mo<br/>
              10 questions per typeform</h6>
          <p style={{color: "#000"}}>The essentials for getting better answers online.</p>
          <br/>
          <a href="#" class="startfree">Go PRO</a>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12">
      <div class="proplus">
          <h3 style={{color:"#88c5c7", marginBottom: "0px"}}>BASIC (free)</h3>
          <span style={{color: "#88c5c7"}}>Get to know Typeform</span>
          <h6 style={{marginTop: "20px"}}>100 responses / mo<br/>
              10 questions per typeform</h6>
          <p style={{color: "#000"}}>The essentials for getting better answers online.</p>
          <br/>
          <a href="#" class="startfree">Go PRO+</a>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}

export default Pricing