import React, {Component} from 'react';
import {Layout} from 'components';
import PropTypes from 'prop-types';

export default class SelectWork extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout location={this.props.location}>
        <div>select work</div>
      </Layout>
    );
  }
}
