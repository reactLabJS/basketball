// import React from 'react'

// export const About = () => {
//   return (
//     <div>
//         This is About
//     </div>
//   )
// }

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
      <div>Heheheheht</div>
    )
  }
}
