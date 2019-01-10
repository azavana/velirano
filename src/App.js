import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { velirano, title } from "./components/data/velirano";
import VeliranoList from "./components/veliranoList";
import { Row, Col, Layout } from "antd";
const { Header, Content } = Layout;

class App extends Component {
  componentDidMount() {
    console.log(velirano);
  }
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Content style={{ padding: "0 50px" }}>
            <Row>
              <Col span={6} />
              <Col span={12}>
                <VeliranoList list={velirano} title={title} />
              </Col>
              <Col span={6} />
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
