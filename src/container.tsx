import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import BoxSx from './title';
import AlignItemsList from './alignitemlist'
import Footer from './footer';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BoxSx></BoxSx>
      <Container maxWidth="md">
          <AlignItemsList />
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}