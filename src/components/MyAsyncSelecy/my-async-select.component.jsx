import React, { Component } from 'react';

import { getSymbolData } from './utils.js';

import AsyncSelect from 'react-select/async';

class MyAsyncSelect extends Component {
  /* Select component reference can be used to get currently focused option */
  getFocusedOption() {
    return this.ref.select.select.state.focusedOption;
  }

  // we'll store lastFocusedOption as instance variable (no reason to use state)
  componentDidMount() {
    this.lastFocusedOption = this.getFocusedOption();
  }

  // Select component reference can be used to check if menu is opened */
  isMenuOpen() {
    return this.ref.select.state.menuIsOpen;
  }

  // This function will be called after each user interaction (click, keydown, mousemove).
  // If menu is opened and focused value has been changed we will call onFocusedOptionChanged
  // function passed to this component using props. We do it asynchronously because onKeyDown
  // event is fired before the focused option has been changed.
  onUserInteracted = () => {
    Promise.resolve().then(() => {
      const focusedOption = this.getFocusedOption();
      if (this.isMenuOpen() && this.lastFocusedOption !== focusedOption) {
        this.lastFocusedOption = focusedOption;
        this.props.onFocusedOptionChanged(focusedOption);
      }
    });
  };

  toggleClearable = () =>
    this.setState({ isClearable: !this.props.isClearable });

  onInputChange = (_, { action }) => {
    if (action === 'set-value') {
      this.props.onOptionSelected(this.getFocusedOption());
    }
  };

  loadOptions = async (inputText) => {
    const symbolData = await getSymbolData(inputText);
    console.log('symbolDATA: ', symbolData);
    return symbolData;
  };

  // we're setting onUserInteracted method as callback to different user interactions
  render() {
    console.log('RENDER Child');
    console.log('Props MyAsyncSelect', this.props);
    return (
      <div onMouseMove={this.onUserInteracted} onClick={this.onUserInteracted}>
        <AsyncSelect
          {...this.props}
          ref={(ref) => (this.ref = ref)}
          onKeyDown={this.onUserInteracted}
          onInputChange={this.onInputChange}
          loadOptions={this.loadOptions}
          autoFocus
          noOptionsMessage={() => 'Search symbol'}
          placeholder="Search Symbol"
          isClearable={this.props.isClearable} // allows us to clear the selected value either using the backspace button or the “x” button on the right side of the field
          clear // Removing all selected options using the clear button
          pop-value // Removing options using backspace
          loadingIndicator
        />
      </div>
    );
  }
}

export default MyAsyncSelect;
