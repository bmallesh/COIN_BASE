import React, { Component } from 'react';
import './index.css';
import './style.css';
class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
  
            <div>
            <html lang="en"/>
            
            <head>
              <meta charset="utf-8"/>
              <title>CoinBase</title>
              <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
              <meta content="" name="keywords"/>
              <meta content="" name="description"/>
        
            
            
              {/* <!-- <link href="img/favicon.png" rel="icon"/>
              <link href="img/apple-touch-icon.png" rel="apple-touch-icon"/> --> */}
            
              {/* <!-- Google Fonts --> */}
              
              {/* <!-- Bootstrap CSS File --> */}
              {/* <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/> */}
              {/*             
              <!-- Libraries CSS Files --> */}
              {/* <link href="../lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
              <link href="../lib/animate/animate.min.css" rel="stylesheet"/>
             */}
              {/* <!-- Main Stylesheet File --> */}
              {/* <link href="../css/style.css" rel="stylesheet"/>
              <link href="../css/index.css" rel="stylesheet"/>
             */}
              
            </head>
            <body>
  {/* <header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <a href="#hero">
          <img src="../img/coinbase-logo.png" alt="" title="" class="logoheight" />
        </a>
       
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </nav>
    </div>
  </header> */}

  <section id="hero">
    <div class="hero-container">
      <h1>Buy and sell digital currency</h1>
      <h2>Coinbase is the easiest and most trusted place to buy,
        <br/> sell, and manage your digital currency.</h2>

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <input type="text" placeholder="Email Address" class="emailmargin"/>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <a href="#" class="btn-get-started">Get Started</a>
        </div>
      </div>

    </div>
  </section>

 <main id="main">
 <div class="container-fluid margintop">
      <div class="row">
        <div class="col-md-1">

        </div>
        <div class="col-lg-2 col-md-12">
          <div class="box">

            <div>
              <div class="flt-left">
                <img src={require("./img/bitcoin.PNG")}/>
              </div>
              <div class="crypto-styles">
                <h4 class="crypto-color">Bitcoin</h4>
              </div>
              <div class="h-top">
                <div class="number-styles">24h</div>
              </div>

            </div>
            <div>
              <div class="currency-styles">
                <img src={require("./img/rupee-indian.png")}/> 469,082.60
              </div>
              <div class="currency-left">&nbsp;-0.4%</div>
            </div>
            <div>
              <img class="bit-img bitimgheight" src={require("./img/bitcoin-graph.PNG")}/>
            </div>

          </div>
        </div>
        <div class="col-lg-2 col-md-12">
          <div class="box">

            <div>
              <div class="flt-left">
                <img src={require("./img/bitcoin.PNG")}/>
              </div>
              <div class="crypto-styles">
                <h4 class="crypto-color">Bitcoin</h4>
              </div>
              <div class="h-top">
                <div class="number-styles">24h</div>
              </div>

            </div>
            <div>
              <div class="currency-styles">
                <img src={require("./img/rupee-indian.png")}/> 469,082.60
              </div>
              <div class="currency-left">&nbsp;-0.4%</div>
            </div>
            <div>
              <img class="bit-img bitimgheight" src={require("./img/bitcoin-graph.PNG")}/>
            </div>

          </div>
        </div>
        <div class="col-lg-2 col-md-12">
          <div class="box">

            <div>
              <div class="flt-left">
                <img src={require("./img/bitcoin.PNG")}/>
              </div>
              <div class="crypto-styles">
                <h4 class="crypto-color">Bitcoin</h4>
              </div>
              <div class="h-top">
                <div class="number-styles">24h</div>
              </div>

            </div>
            <div>
              <div class="currency-styles">
                <img src={require("./img/rupee-indian.png")}/> 469,082.60
              </div>
              <div class="currency-left">&nbsp;-0.4%</div>
            </div>
            <div>
              <img class="bit-img bitimgheight" src={require("./img/bitcoin-graph.PNG")}/>
            </div>

          </div>
        </div>
        <div class="col-lg-2 col-md-12">
          <div class="box">

            <div>
              <div class="flt-left">
                <img src={require("./img/bitcoin.PNG")}/>
              </div>
              <div class="crypto-styles">
                <h4 class="crypto-color">Bitcoin</h4>
              </div>
              <div class="h-top">
                <div class="number-styles">24h</div>
              </div>

            </div>
            <div>
              <div class="currency-styles">
                <img src={require("./img/rupee-indian.png")}/> 469,082.60
              </div>
              <div class="currency-left">&nbsp;-0.4%</div>
            </div>
            <div>
              <img class="bit-img bitimgheight" src={require("./img/bitcoin-graph.PNG")}/>
            </div>

          </div>
        </div>
        <div class="col-lg-2 col-md-12">
          <div class="box">

            <div>
              <div class="flt-left">
                <img src={require("./img/bitcoin.PNG")}/>
              </div>
              <div class="crypto-styles">
                <h4 class="crypto-color">Bitcoin</h4>
              </div>
              <div class="h-top">
                <div class="number-styles">24h</div>
              </div>

            </div>
            <div>
              <div class="currency-styles">
                <img src={require("./img/rupee-indian.png")}/> 469,082.60
              </div>
              <div class="currency-left">&nbsp;-0.4%</div>
            </div>
            <div>
              <img class="bit-img bitimgheight" src={require("./img/bitcoin-graph.PNG")}/>
            </div>

          </div>
        </div>
        <div class="col-md-1">

        </div>
      </div>
    </div>
 
    <div class="container-fluid digcurrency">
      <h3>Create your digital currency portfolio today</h3>
      <h6>Coinbase has a variety of features that make it the best place to start trading</h6>
    </div>
    
    <section id="about">
      <div class="container">
        <div class="row about-container">

          <div class="col-lg-6 col-md-6 col-sm-12 ">

            <div class="icon-box">
              <div class="icon">
                <img src="https://www2.coinbase.com/assets/app-portfolio.png" class="porticon" alt="Portfolio icon"/>
              </div>
              <h4 class="title">
                <a href="">Manage your portfolio</a>
              </h4>
              <p class="description">Buy and sell popular digital currencies, keep track of them in the one place.</p>
            </div>

            <div class="icon-box">
              <div class="icon">
                <img src="https://www2.coinbase.com/assets/app-recurring.png" class="porticon" alt="Recurring buys icon"/>
              </div>
              <h4 class="title">
                <a href="">Recurring buys</a>
              </h4>
              <p class="description">Invest in digital currency slowly over time by scheduling buys daily, weekly, or monthly.</p>
            </div>

            <div class="icon-box">
              <div class="icon">
                <img src="https://www2.coinbase.com/assets/app-secure.png" class="porticon" alt="Vault icon"/>
              </div>
              <h4 class="title">
                <a href="">Vault protection</a>
              </h4>
              <p class="description">For added security, store your funds in a vault with time delayed withdrawals.</p>
            </div>
            <div class="icon-box">
              <div class="icon">
                <img src="https://www2.coinbase.com/assets/app-mobile.png" class="porticon" alt="Mobile application icon"/>
              </div>
              <h4 class="title">
                <a href="">Mobile apps</a>
              </h4>
              <p class="description">Stay on top of the markets with the Coinbase app for Android or iOS.</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 ">
            <img src={require('./img/app-product.png')} class="appproduct"/>
          </div>
        </div>

      </div>
    </section>
    <section id="services">
      <div class="container wow fadeIn">
        <div class="section-header">
          <h3 class="section-title">The most trusted digital currency platform</h3>
          <p class="section-description">Here are a few reasons why you should choose Coinbase</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="box">
              
                
                  {/* <img src={require("./img/icon-safe.png")} class="secureimg" alt="Secure storage"/> */}
                  <div class="icon">
                    <img src="https://www2.coinbase.com/assets/icon-safe.png" class="secureimg" alt="Mobile application icon"/>
                  </div>
                
              
              <h4 class="title">
                <a href="">Secure storage</a>
              </h4>
              <p class="description">We store the vast majority of the digital assets held on Coinbase in secure offline storage.
                <br/>
                <a href="#">Learn more...</a>
              </p>

            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="box">
              <div class="icon">
                
                  <img src="https://www2.coinbase.com/assets/icon-insurance.png" class="secureimg" alt="Protected by insurance"/>
                
              </div>
              <h4 class="title">
                <a href="">Protected by insurance</a>
              </h4>
              <p class="description">Digital currency stored on our servers is covered by our insurance policy.
                <br/>
                <a href="#">Learn more...</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="box">
              <div class="icon">
                
                  <img src="https://www2.coinbase.com/assets/icon-shield.png" class="secureimg" alt="Industry best practices"/>
                
              </div>
              <h4 class="title">
                <a href="">Industry best practices</a>
              </h4>
              <p class="description">We take security seriously, and have built a reputation of being the most trusted in the space.
                <br/>
                <a href="#">Learn more...</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="facts">
      <div class="container wow fadeIn">
        <div class="section-header">
        </div>
        <div class="row counters">

          <div class="col-lg-4 col-md-4 col-sm-12 text-center">
            <span>$150B+</span>
            <p>Digital currency exchanged</p>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 text-center">
            <span>32</span>
            <p>Countries supported</p>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 text-center">
            <span>20M+</span>
            <p>Customers served</p>
          </div>
        </div>
      </div>
    </section>
    <section id="team">
      <div class="container">
        <div class="section-header">
          <h3 class="section-title">Get started in a few minutes</h3>

        </div>
        <div class="container" style={{padding:"3rem 0"}}>
          <div class="row">
            <div class="col-lg-4 col-lg-4 col-sm-12 text-center">
              <img src={require("./img/icon-add.png")} class="iconimgheight"/>
              <h5 class="few-minutes">Create an account</h5>
            </div>
            <div class="col-lg-4 col-lg-4 col-sm-12 text-center">
              <img src={require("./img/icon-bank.png")} class="iconimgheight"/>
              <h5 class="few-minutes">Link your bank account</h5>
            </div>
            <div class="col-lg-4 col-lg-4 col-sm-12 text-center">
              <img src={require("./img/icon-handout.png")} class="iconimgheight"/>
              <h5 class="few-minutes">Start buying & selling</h5>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="contact" style={{background: "#061f43"}}>
      <div class="container  text-center">
        
          <div class="row">
            <div class="col-md-12">
              <h3 class="section-title makecurrency">Make your first digital currency purchase today</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 textright">
              <input type="text" placeholder="Email Address"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 textleft">
              <a href="#" class="btn-get-started">Get Started</a>
            </div>
          </div>
      </div>
    </section>
 </main>
 <footer id="footer">
    <div class="container-fluid liststyle">
      <div class="row">
        <div class="col-md-1 col-sm-12">

        </div>
        <div class="col-md-2 col-sm-12">
          <ul>
            <li>
              <strong class="footercoinbase">coinbase</strong>
            </li>
            <li>+1 (888) 908-7930</li>
            <li>support.coinbase.com</li>
            <li>© 2018 Coinbase</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12">
          <ul>
            <li>
              <strong class="footercoinbase">Products</strong>
            </li>
            <li>Asset Management</li>
            <li>Consumer</li>
            <li>Commerce</li>
            <li>Custody</li>
            <li>Earn.com</li>
            <li>Paradex</li>
            <li>Prime</li>
            <li>Pro</li>
            <li>Wallet</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12">
          <ul>
            <li>
              <strong class="footercoinbase">Learn</strong>
            </li>
            <li>Buy Bitcoin</li>
            <li>Buy Bitcoin Cash</li>
            <li>Buy Ethereum</li>
            <li>Buy Litecoin</li>
            <li>Supported countries</li>
            <li>Status</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12">
          <ul>
            <li>
              <strong class="footercoinbase">Company</strong>
            </li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Open Source</li>
            <li>Legal & privacy</li>
            <li>Support</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12">
          <ul>
            <li>
              <strong class="footercoinbase">Social</strong>
            </li>
            <li>Blog</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div class="col-md-1 col-sm-12">
        </div>
      </div>
    </div>
  </footer>
  
  </body>
    </div>

        )

    }
}

export default Home
