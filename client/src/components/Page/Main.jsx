import BottomNavigation from "../Header/BottomNavigation";
import { Layout } from "antd";
const { Content } = Layout;

function Main() {
  return (
    <>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <BottomNavigation />
        <div className="site-layout-content">Main</div>
      </Content>
    </>
  );
}

export default Main;
