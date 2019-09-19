import React from 'react';

const ContextRedux = React.createContext(null);

export const withFirebase = Component => props => (
    <ContextRedux.Consumer>
       {() => <Component {...props} />}
    </ContextRedux.Consumer>
);

export default ContextRedux;