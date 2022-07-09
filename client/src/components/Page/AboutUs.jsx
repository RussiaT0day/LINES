import BottomNavigation from '../Header/BottomNavigation';
import { Layout } from 'antd';
const { Content } = Layout;


function AboutUs() {
  return (
    <>
      <Content
      style={{
        padding: '0 50px',
      }}
    >
      <BottomNavigation/>
      <div className="site-layout-content">About Us</div>

    </Content>
				</>
  );
}

export default AboutUs;
