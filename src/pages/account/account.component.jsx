import React, { Component } from 'react';
// import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Main from '../../components/main/main.component';
// import Footer from '../../components/footer/footer.component';
import Sidebartwo from '../../components/sidebarTwo/sidebarTwo.component';

class AccountPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Main />
        <Sidebartwo />
      </React.Fragment>
    );
  }
}

export default AccountPage;
