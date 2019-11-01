import React from 'react';

export const StyleContext = React.createContext({});

export const withStyle = Component => props => {
    return (
        <StyleContext.Consumer>
            { ({ rhoveStyle }) => (
              <Component {...props} rhoveStyle={rhoveStyle}/>
            )}
        </StyleContext.Consumer>
    )
};