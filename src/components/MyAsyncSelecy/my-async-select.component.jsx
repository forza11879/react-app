import React, { useCallback, useEffect, useRef } from 'react';

import { getSymbolData } from './utils.js';

import AsyncSelect from 'react-select/async';

const MyAsyncSelect = (props) => {
  const myRef = useRef();
  const myRefLastFocusedOption = useRef();

  const getFocusedOption = useCallback(() => {
    // @ts-ignore
    return myRef.current.select.select.state.focusedOption;
  }, [myRef]);

  const isMenuOpen = () => {
    // @ts-ignore
    return myRef.current.select.state.menuIsOpen;
  };

  const onUserInteracted = () => {
    Promise.resolve().then(() => {
      const focusedOption = getFocusedOption();
      if (isMenuOpen() && myRefLastFocusedOption.current !== focusedOption) {
        myRefLastFocusedOption.current = focusedOption;
        props.onFocusedOptionChanged(focusedOption);
      }
    });
  };

  const onInputChange = (_, { action }) => {
    if (action === 'set-value') {
      props.onOptionSelected(getFocusedOption());
    }
  };

  const loadOptions = async (inputText) => {
    const symbolData = await getSymbolData(inputText);
    console.log('symbolDATA: ', symbolData);
    return symbolData;
  };

  useEffect(() => {
    myRefLastFocusedOption.current = getFocusedOption();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onMouseMove={onUserInteracted} onClick={onUserInteracted}>
      <AsyncSelect
        {...props}
        // ref={(ref) => (myRef.current = ref)}
        ref={myRef}
        onKeyDown={onUserInteracted}
        onInputChange={onInputChange}
        loadOptions={loadOptions}
        autoFocus
        noOptionsMessage={() => 'Search symbol'}
        placeholder="Search Symbol"
        isClearable={props.isClearable} // allows us to clear the selected value either using the backspace button or the “x” button on the right side of the field
        clear // Removing all selected options using the clear button
        pop-value // Removing options using backspace
        loadingIndicator
      />
    </div>
  );
};

export default MyAsyncSelect;
