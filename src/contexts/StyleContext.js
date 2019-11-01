import React from 'react';

export const StyleContext = React.createContext({});

export const withStyle = Component => props => {
    return (
        <StyleContext.Producer>
            { ({ rhoveStyle }) => (
                <StyleContext.Consumer>
                    <Component {...props} rhoveStyle={rhoveStyle}/>
                </StyleContext.Consumer>
            )}
        </StyleContext.Producer>
    )
};