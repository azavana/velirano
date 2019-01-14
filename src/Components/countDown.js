import React, { Component } from "react";
import { compose } from "recompose";
import { Heading, CountDownTable } from "./Styles/CountDownStyles";
import { 
  withDate, 
  withCountdown,
  withCalculateCountdown,
} from "./Enhancers/CountDownEnhancer";

class Countdown extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.props.calculateCountdown(this.props.date);
      date ? this.props.setCountdown(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const countDown = this.props.countdown;

    return (
      <div>
        <Heading>
          Fotoana mbola hananantsika hatramin'ny 2024
        </Heading>
        <CountDownTable>
          <thead>
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
          </thead>
          <tbody>
            <tr>
              <td>Andro</td>
              <td>Ora</td>
              <td>Minitra</td>
              <td>Segondra</td>
            </tr>
          </tbody>
        </CountDownTable>
      </div>
    );
  }
}

const withData = compose(
  withDate,
  withCountdown,
  withCalculateCountdown,
);

export default withData(Countdown);
