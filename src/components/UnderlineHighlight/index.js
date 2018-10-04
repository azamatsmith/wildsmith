import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUnderline = styled.span`
  bottom: 10px;
  left: ${props => (props.left ? `${props.left}px` : '13px')};
  height: 18px;
  transition: transform 250ms ease-out;
  transform: ${props => (props.ready ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: left;
  z-index: -2;
  @media (max-width: 500px) {
    bottom: 7px;
    height: 9px;
  }
`;

export default class UnderlineHighlight extends React.Component {
  static propTypes = {
    left: PropTypes.number,
  };

  static defaultProps = {
    left: null,
  };

  state = {
    ready: false,
  };

  mounted = true;

  componentDidMount() {
    setInterval(() => {
      if (this.mounted) {
        this.setState({ready: true});
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // PRIVATE

  render() {
    const {children, left} = this.props;
    const {ready} = this.state;
    return (
      <span
        className="UnderlineHightlight relative"
        ref={el => (this.wrapper = el)}
      >
        {children}
        <StyledUnderline
          className="w-100 absolute b-0 bg-orange"
          left={left}
          ready={ready}
        />
      </span>
    );
  }
}
