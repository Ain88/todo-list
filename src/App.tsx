import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

const todoIdStatte = atom({
  key: 'todoIdState',
  default: 1
});

function App() {
  return (
    <div>
      Hello Recoil !
    </div>
  );
}

export default App;
