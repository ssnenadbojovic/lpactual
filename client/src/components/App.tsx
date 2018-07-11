import * as React from 'react'
import Header from '../containers/Header'
import Content from '../containers/Content'
import Footer from '../containers/Footer'
import Wait from '../containers/Wait'
/* import Todos from '../containers/Todos'
import Mylist from '../containers/Mylist' */
class App extends React.Component {
  render() {
    return (
      <div>

        <Header  />
        <Content/>
        <Footer />
        <Wait/>
      </div>
    );
  }
}

export default App;
