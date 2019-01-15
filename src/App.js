import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import VeliranoList from "./Components/VeliranoList";
import Countdown from "./Components/CountDown";
import MeterSummary from "./Components/MeterSummary";
import { Card } from "rimble-ui";
import { Layout } from "antd";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Content style={{ marginTop: 94 }}>
            <Card width={"800px"} mx={"auto"} px={4}>
              <Countdown />
            </Card>
            <Card width={"800px"} mx={"auto"} px={4}>
              <MeterSummary />
            </Card>
            <Card width={"800px"} mx={"auto"} px={4}>
              <VeliranoList />
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
