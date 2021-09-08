import React, { useMemo, Fragment } from 'react';
import './App.css';

import Modal from '../Modal/modal'

console.log('Modal', Modal.useModal);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
      <Modal>
        <Fragment>
          <div id='mask'></div>
          {
            useMemo(() => <div> 我是弹窗 </div>, [])
          }
        </Fragment>
      </Modal>
    </div>
  );
}

export default App;
