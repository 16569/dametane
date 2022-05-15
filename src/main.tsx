import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import SimpleContainer from './container'

const  App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SimpleContainer/>
        </ThemeProvider>
        );
}

ReactDOM.render(
    <App />,
    document.querySelector('#app'));
