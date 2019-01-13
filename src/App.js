import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { velirano, title } from "./components/data/velirano";
import { Card } from "rimble-ui";
import VeliranoList from "./components/veliranoList";
import { Layout } from "antd";
import Countdown from "./components/countDown";
const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    console.log(velirano);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Content style={{ marginTop: 94 }}>
            <Card width={"800px"} mx={"auto"} px={4}>
              <Countdown date={new Date(2024, 0, 19)} />
            </Card>
            <Card width={"800px"} mx={"auto"} px={4}>
              <VeliranoList list={velirano} title={title} />
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
