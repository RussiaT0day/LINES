import { Breadcrumb } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";





const BottomNavigation = (path) => {
  // useEffect(() => {
  //   const navigagtionPuth = NavigationHeader()

  //   console.log(navigagtionPuth);
  // }, [])


  return(
  <Breadcrumb
    style={{
      margin: "16px 0",
    }}
  >
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
)};

export default BottomNavigation;


function NavigationHeader() {
  const location = useLocation();
  return location.pathname;
}

function getPach(params) {
  
}
