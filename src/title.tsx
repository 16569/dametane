import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function BoxSx() {
  return (
    <><Typography sx={{
          fontSize: { xs: 25, sm: 35, md: 45, lg: 55 },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: 1 / 1,
          height: { xs: 60, sm: 80, md: 90, lg: 100 },
          backgroundColor: '#dcd6d9',
          color: '#48752C',
          // '&:hover': {
          //     backgroundColor: 'primary.main',
          //     opacity: [0.9, 0.8, 0.7],
          // },
      }}
          variant="h1"
          //gutterBottom 
          component="div"
      >

          <Stack direction="row"
              spacing={1}
              sx={{
                  //width: 'auto', 
                  //display:"table-cell",  
                  //verticalAlign:"middle", 
                  //textAlign:"center"
              }}>

              <Avatar sx={{
                  width: { xs: 30, sm: 40, md: 52, lg: 60 },
                  height: { xs: 30, sm: 40, md: 52, lg: 60 },
              }} alt="Travis Howard" src="/static/images/haikyo.png" />
              <Box sx={{
                  //width: 'auto', 
                  //display:"table-cell",  
                  //verticalAlign:"middle", 
                  //textAlign:"center"
              }}
              >
                  ダメタネ制作物
              </Box>

          </Stack>


      </Typography>

    <Divider variant="middle" />
    </>
    

  );
}
