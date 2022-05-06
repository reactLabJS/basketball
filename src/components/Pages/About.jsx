

import './About.scss'

import React, { Component } from 'react'

export  class About extends Component {
    constructor(){
        super();
        console.log('this', this);
        console.log('did mount');
    }
    componentDidMount(){
        console.log('did mount');
    }
    componentDidUpdate(){
        console.log('did update');
    }
    render() {
        console.log('render');
    return (
      <div className='aboutPage'>
          <div className="aboutPage-inside">
              <div className="shopWithUS shop">
                  <h1>
                      Why Shop With Us?
                  </h1>
              </div>
              <div className="shopWithUS-one shop">
                  <h2>
                    Why Shop With Us?
                  </h2>
                  <p>
                  We offer a huge selection of NBA, WNBA and G-League gear from top quality brands, all in one convenient place. We are passionate about our goal of bringing NBA, WNBA and G-League fans across the globe access to their favorite team's gear. We pride ourselves on not only carrying a large selection of officially licensed products from the top brands, but also industry leading customer service, shipping and return policies.
                  </p>
              </div>
              <div className="shopWithUS-two shop">
                  <h2>
                     Fan Service
                  </h2>
                  <p>
                  Our Fan Advocates are committed to your satisfaction and view each time you contact us as a chance to build a relationship. We're shoppers too and dedicated to delivering our customers the kind of shopping experience we would want to have. If your expectations are not exceeded and if you don't look forward to coming back, then we haven't done our job!
                  </p>
              </div>
              <div className="shopWithUS-three shop">
                  <h2>
                        90-Day Hassle Free Returns
                  </h2>
                  <p>
                     Our top priority is to provide the best service possible and if you don't love what you ordered, we don't want you to keep it. If for any reason you are not satisfied with your purchase, you may return the item(s) in original condition for a full refund.
                  </p>
              </div>
              <div className="shopWithUS-four shop">
                  <h2>
                        Shop with Confidence
                  </h2>
                  <p>
                  Protecting your privacy is of the utmost importance to us. We use state-of-the-art encryption technology (SSL) to protect your credit card/personal information. Your information is 100% safe when you shop with us. We sometimes email you to alert you of special sales or new arrivals, but you are free to opt-out of these messages with one click. Need more info? View our <a href="/">privacy</a> and <a href="/">security</a> policies.
                  </p>
              </div>
          </div>
      </div>
    )
  }
}
