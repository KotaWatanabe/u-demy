import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/index';
import styles from './App.module.css';
import { fetchData } from './api';

import titleImage from './images/title.png';

export default class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handleCountryPicker = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={titleImage} alt={'covid-19'} />
        <Cards data={data} />
        <CountryPicker handleCountryPicker={this.handleCountryPicker} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
