import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import SimpleContainer from './container'


// declare module '@mui/material/styles' {
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }

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
