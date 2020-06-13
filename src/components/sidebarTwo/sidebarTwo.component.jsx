import React, { Component } from 'react';
import './sidebarTwo.styles.scss';

class Sidebartwo extends Component {
  state = {
    isActive: true,
  };

  toggleClassTwo = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <div className={this.getIsActiveStatusTwo()}>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-item-header">
              What is Web Development?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                Web Development broadly refers to the tasks associated with
                developing functional websites and applications for the
                Internet. The web development process includes web design, web
                content development, client-side/server-side scripting and
                network security configuration, among other tasks.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">What is HTML?</div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                HTML, aka HyperText Markup Language, is the dominant markup
                language for creating websites and anything that can be viewed
                in a web browser.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              What are some basic technical skills of a Front-End developer?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Frameworks (CSS and JavaScript frameworks)</li>
                  <li>Responsive Design</li>
                  <li>Version Control/Git</li>
                  <li>Testing/Debugging</li>
                  <li>Browser Developer Tools</li>
                  <li>Web Performance</li>
                  <li>SEO (Search Engine Optimization)</li>

                  <li>Command Line</li>
                  <li>CMS (Content Management System)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">What is HTTP?</div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                HTTP, aka HyperText Transfer Protocol, is the underlying
                protocol used by the World Wide Web and this protocol defines
                how messages are formatted and transmitted, and what actions Web
                servers and browsers should take in response to various
                commands.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">What is CORS?</div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                CORS, aka Cross-Origin Resource Sharing, is a mechanism that
                enables many resources (e.g. images, stylesheets, scripts,
                fonts) on a web page to be requested from another domain outside
                the domain from which the resource originated.
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={this.toggleClassTwo}>
          <div className="inner_hamburger">
            <span className="arrow">
              <i className={this.getOnOffToggleTwo()}></i>
            </span>
          </div>
        </div>
      </div>
    );
  }

  getOnOffToggleTwo() {
    return this.state.isActive === true
      ? 'fas fa-long-arrow-alt-left'
      : 'fas fa-long-arrow-alt-right';
  }

  getIsActiveStatusTwo() {
    return this.state.isActive === true ? 'sidebarTwo active' : 'sidebarTwo';
  }
}

export default Sidebartwo;
