import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: "sm", bgcolor: '#b9d08b' }}>
    <Card sx={{ maxWidth: "sm", margin: 2}}>
      <CardContent>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/logo.png" />
        </ListItemAvatar>
        <ListItemText
          primary="努力値ツール"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                剣盾まで対応！
              </Typography>
              {"倒すポケモンを指定して加算値を自動計算。持ち物、ポケルスなどの状態に対応。育成アイテムも使える。学習装置で手持ちにも並行で分配可能！"}
            </React.Fragment>
          }
        />
      </ListItem>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: "sm", margin: 2 }}>
      <CardContent>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="対面シミュレーター"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                待望のダメージレースシミュレータ(開発中)。
              </Typography>
              {"-2022年冬、リリース予定"}
            </React.Fragment>
          }
        />
      </ListItem>
      </CardContent>
      </Card>

    </List>
  );
}
