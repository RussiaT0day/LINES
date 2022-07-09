import { routerPatch } from "../../data/routertPuch";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const _Header = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={getItems(routerPatch)}
      />
    </Header>
  </Layout>
);

export default _Header;

const getItems = (array) => {
  if (!Array.isArray(array)) new Error("Data error for Menu items");

  return array.map(({ id, name, patch = "/" }) => ({
    key: id,
    label: <Link to={patch}>{name} </Link>,
  }));
};
