import React, { Component } from 'react';
import Navbar from './navbar'
import axios from 'axios'
import './pricing.css'
import './style.css';
class Pricing extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/coinbase/api/getUserDetails').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div>
                   <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn &&
          <p className="join">Join the party, {this.state.username}!</p>
        }
      <div class="pricingdiv pt-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 plan">
              <h2>Choose the plan that works for you</h2>
              <p style={{ color: "#bbb" }}>All plans include unlimited typeforms. You can cancel anytime.</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p style={{ color: "#bbb" }}>Monthly Yearly (2 months for free)</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="basic">
                <h3 class="basicfree">BASIC (free)</h3>
                <span class="getknow">Get to know Typeform</span>
                <h6 class="responses">100 responses / mo<br />
                  10 questions per typeform</h6>
                <p class="the-essentials">The essentials for getting better answers online.</p>
                <br />
                <button className="btnn"><a href="#" class="startfree">Start Free</a></button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="pro">
              <h3 class="basicfree">BASIC (free)</h3>
                <span class="getknow">Get to know Typeform</span>
                <h6 class="responses">100 responses / mo<br />
                  10 questions per typeform</h6>
                <p class="the-essentials">The essentials for getting better answers online.</p>
                <br />
                <button className="btnn"><a href="#" class="startfree">Go PRO</a></button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="proplus">
              <h3 class="basicfree">BASIC (free)</h3>
                <span class="getknow">Get to know Typeform</span>
                <h6 class="responses">100 responses / mo<br />
                  10 questions per typeform</h6>
                <p class="the-essentials">The essentials for getting better answers online.</p>
                <br />
                <button className="btnn"><a href="#" class="startfree">Go PRO+</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="container margintop marginbottom">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 padright">
              <div class="basicfree">

                <div class="row">
                  <div class="col-md-12">
                    <h5 class="basicfreestyles">BASIC (free)</h5>
                  </div>
                  <div class="col-md-6">

                  </div>

                </div>
                <div class="col-md-12 padstyles">
                  <div class="padbck">
                    <h6>100 responses / mo
              </h6>
                  </div>
                </div>
                <div class="col-md-12 bsc">
                  <ul>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>10 questions per typeform</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Basic question types</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Metrics & reports</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Self-notifications (email)</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Piping</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Google Sheets integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>HubSpot integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>500+ integrations with Zapier</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Responses API</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Embed</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Webhooks</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 padleftright">
              <div class="prousd">
                <div class="row">
                  <div class="col-md-12">
                    <h5 class="basicfreest">BASIC (free)</h5>
                  </div>
                  <div class="col-md-6">

                  </div>

                </div>
                <div class="col-md-12" padstyles>
                  <div class="resmo">
                    <h6>100 responses / mo
                  </h6>
                  </div>
                </div>
                <div class="col-md-12 bsc">
                  <ul>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>10 questions per typeform</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Basic question types</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Metrics & reports</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Self-notifications (email)</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Piping</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Google Sheets integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>HubSpot integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>500+ integrations with Zapier</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Responses API</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Embed</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Webhooks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 padleft">
              <div class="proplususd">
                <div class="row">
                  <div class="col-md-12">
                    <h5 class="basicfr">BASIC (free)</h5>
                  </div>
                  <div class="col-md-6">

                  </div>

                </div>
                <div class="col-md-12 padstyles">
                  <div class="responsmo">
                    <h6>100 responses / mo
                  </h6>
                  </div>
                </div>
                <div class="col-md-12 bsc">
                  <ul>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>10 questions per typeform</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Basic question types</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Metrics & reports</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Self-notifications (email)</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Piping</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Google Sheets integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>HubSpot integration</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>500+ integrations with Zapier</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Responses API</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Embed</span>
                    </li>
                    <li>
                      <i class="fa fa-check"></i>
                      <span>Webhooks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pricing">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 pricing_quote">
              {/* <img class="pic_circle" src={require("./img/pic1.jpg.png")} alt=""/> */}
              <p class="pricing_content">
                  "Quartz managed to convince 940 of the world’s business leaders to
                  tell us how they consume news and respond to advertising thanks to Typeform"</p>
            </div>
            <div class="pricing_author">
              <span class="pricing_author_name">Mia Mabanta</span> /
              <span class="pricing_author_position">Director of Brand Development at Quartz</span>
            </div>

          </div>
        </div>
        <div class="container faq">
          <div class="row faq_content">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="faq_block">
                <h5>How do I sign up?</h5>
                <p class="signing">Signing up for Typeform is, and always will be, <b>completely free</b>.
                    It’s
                    really easy as well. Just click “Create a typeform”, and we’ll get you started with a Typeform
                      BASIC account, so you can create as many BASIC typeforms as you like.</p>
              </div>

              <div class="faq_block">
                <h5>How much coding knowledge is required to use Typeform?</h5>
                <p class="nada">
                  None. Nada. Zero! Building a typeform is as easy as dragging and dropping questions where you
                  want them. It’s easy to design them with our pre-made themes, or by selecting fonts and colors
                  yourself.
                      <br /><br />
                  We provide you with the code and link you’ll need to embed or share your typeforms, and it’s
                  super easy to view and export your data. You don’t need to write a single line of code, and you
                  never will.
                  </p>
              </div>

              <div class="faq_block">
                <h5>When do I need to pay?</h5>
                <p class="profeature">If you enable a PRO feature, your typeform will remain Private unless you
                    upgrade (or remove its PRO features). Private typeforms cannot collect responses from anyone
                      other than you.</p>
              </div>

              <div class="faq_block">
                <h5>Do you offer discounts for students, teachers or NGOs?</h5>
                <p class="profeature">Yes we do! We always like to help. Get in touch and we'll hook you up.</p>
              </div>

              <div class="faq_block">
                <h5>I have more questions. Where can I find answers?</h5>
                <p class="profeature">If you still have questions, check out our Payment FAQs page on our Help
                      Center.</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="faq_block">
                <h5>Is there a limit to the data I can collect?</h5>
                <p class="profeature">If you’re on a BASIC plan, each month you can collect up to 100 responses
                    to as many typeforms as you like. Or, if you’d prefer less restrictions, a PRO plan allows for
                      unlimited responses from any number of typeforms.</p>
              </div>

              <div class="faq_block">
                <h5>Is my data safe?</h5>
                <p class="typeform">
                  We run Typeform on Amazon Web Services (AWS) and our servers are located in Virginia, USA. The
                  AWS cloud infrastructure has been architected to be one of the most secure cloud computing
                  environments available on the planet.
                      <br /><br />
                  As well as the security features built
                  into the AWS service, we employ:
                      <br /><br />
                  - 128-bit SSL encryption for all data transfer on the platform and forms<br />
                  - Daily backups of all your data, in case anything goes wrong<br />
                  - Security protocols in all our work premises
                      <br />
                </p>
              </div>

              <div class="faq_block">
                <h5>Are there discounts for yearly plans?</h5>
                <p class="profeature">Yes! If you pay for a year in advance you save 20% compared to paying per
                    month. That means you get 12 month’s PRO usage for less than the price of 10 months.
                  </p>
              </div>

              <div class="faq_block">
                <h5>What can I do with my data once it’s collected?</h5>
                <p style={{color: "#6c737a"}}>
                  It’s super easy to get your data out of Typeform when you need it. You can download data as an
                  Excel (.xls) file, or use Zapier to do things with your data as it’s collected.
                      <br /><br />
                  Save time and automate tasks by forwarding submissions to any URL you choose. It's called
                  Webhooks and you can read more about it on the Typeform Help Center.
                  </p>
              </div>

              <div class="faq_block">
                <h5>I have more questions. Where can I find answers?</h5>
                <p class="profeature">If you still have questions, check out our Payment FAQs page on our Help
                      Center.</p>
              </div>
            </div>
          </div>
        </div>
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
  </div>
      </div>
    )
  }
}

export default Pricing