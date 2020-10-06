import React, { Component } from 'react';
import Launch from '../layout/Launch';

const WithSplashScreen = <P extends object>(
    WrappedComponent: React.ComponentType<P>
  ) => {
  return class extends Component<P, { loading: boolean }> {
    constructor(props: Readonly<P>) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 4000)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return <Launch />;

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithSplashScreen;
