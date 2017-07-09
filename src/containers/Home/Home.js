import React, { Component } from 'react';
import User from './User';
import Header from './Header.js';
import Content from './Content.js';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
        <User name="Andy" desc="Hello1" />
        <User name="Ben" desc="Hello2" />
        <User name="Cindy" desc="Hello3" />
        <User name="David" desc="Hello4" />
      </div>
    );
  }
}
