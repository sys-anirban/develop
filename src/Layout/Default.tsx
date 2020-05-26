import React, { Component } from 'react';
import ErrorBoundary from '../components/Errorboundary';
import { Container } from 'reactstrap';
import { Route, RouteProps } from 'react-router-dom';

interface DefaultLayoutProps extends RouteProps {
  component: any;
}

class Default extends Component<DefaultLayoutProps> {
  render() {
    const { component: Component, ...rest } = this.props;
    const render = (matchProps: object) => {
      return (
        <ErrorBoundary>
          <Container className="bg-white" fluid style={{ height: 'calc(100vh-60px)' }}>
            <Component {...matchProps} />
          </Container>
        </ErrorBoundary>
      );
    };
    return <Route render={render} {...rest} />;
  }
}
export default Default;
