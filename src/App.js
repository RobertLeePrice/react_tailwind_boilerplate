import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Layouts from './layouts'

const Wrapper = ({ children }) => {
  return <Layouts>{children}</Layouts>
}

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes />
      </Wrapper>
    </Router>
  );
}

export default App;
