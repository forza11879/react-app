import React, { Component } from 'react';
// import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Main from '../../components/main/main.component';
// import Footer from '../../components/footer/footer.component';
import Sidebartwo from '../../components/sidebarTwo/sidebarTwo.component';

class StockPage extends Component {
  render() {
    console.log('Props AccountPage', this.props);
    return (
      <React.Fragment>
        <Sidebar />
        <Main />
        <Sidebartwo />
      </React.Fragment>
    );
  }
}

export default StockPage;
