import React, { Component } from "react";
import "./styles/CountDownStyles.css";
import { Heading } from "rimble-ui";

class Countdown extends Component {
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    let delta = Math.abs(endDate - new Date()) / 1000;

    timeLeft.days = Math.floor(delta / 86400);
    delta -= timeLeft.days * 86400;

    timeLeft.hours = Math.floor(delta / 3600) % 24;
    delta -= timeLeft.hours * 3600;

    timeLeft.min = Math.floor(delta / 60) % 60;
    delta -= timeLeft.min * 60;

    timeLeft.sec = delta % 60;

    return timeLeft;
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        <Heading className="heading">
          Fotoana mbola hananantsika hatramin'ny 2024
        </Heading>
        <table className="countDownTable">
          <tr>
            <th>
              <h1>{`${countDown.days}`}</h1>
            </th>
            <th>
              <h1>{`${countDown.hours}`}</h1>
            </th>
            <th>
              <h1>{`${countDown.min}`}</h1>
            </th>
            <th>
              <h1>{`${countDown.sec.toFixed()}`}</h1>
            </th>
          </tr>
          <tr>
            <td>Andro</td>
            <td>Ora</td>
            <td>Minitra</td>
            <td>Sekondra</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Countdown;
