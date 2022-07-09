import _Header from "./components/Header/_Header";
import BottomNavigation from "./components/Header/BottomNavigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AboutUs from "./components/Page/AboutUs";
import Main from "./components/Page/Main";
const { Content, Footer } = Layout;


function App() {
  return (
      <Router>

      <_Header/>

        <Routes>
          <Route exact path="/about" element={<AboutUs/>} />
          <Route exact path="/" element={<Main/>}/>
        </Routes>

    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
      </Router>

  );
}

export default App;
