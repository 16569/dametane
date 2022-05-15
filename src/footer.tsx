import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <>
    {/* <Divider variant="middle" /> */}
    <Typography sx={{
          fontSize: 15,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: 1 / 1,
          height: 20,
          backgroundColor: '#dcd6d9',
          color: '#48752C',
          marginBottom: '25px',
      }}
          variant="caption"
          component="footer"
          //gutterBottom
      >
          ©︎ ダメタネ
      </Typography>
      {/* <footer>フッター</footer> */}
    </>
    

  );
}
