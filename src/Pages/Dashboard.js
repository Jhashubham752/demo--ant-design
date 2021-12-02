import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Card, Col, Typography, PageHeader } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  LoginOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function Dashboard() {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Ant Design"

      />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setcollapsed(!collapsed)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3"> <a href="/table"/>listing</Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<LoginOutlined />}>
              <a href="/login" /> Login
            </Menu.Item>

            <Menu.Item key="9" icon={<LoginOutlined />}>
              <a href="/register" /> Register
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Title> DashBoard</Title>
            <Row>
              <Col>
                <Card
                  title="Default size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
