import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppStore from './storelink';

export default function AlignItemsList() {
  return (
    <>
      
      <List sx={{ width: '100%', maxWidth: "md", bgcolor: '#dcd6d9' }}>
        <Card sx={{ maxWidth: "md", margin: 2 }}>
          <CardContent>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ width: 100, height: 100 }} variant="rounded" alt="Remy Sharp" src="./images/icon.png" />
              </ListItemAvatar>
              <ListItemText sx={{ml: '15px', fontSize:{xs:12,sm:12,md:15,lg:18} }} 
                primary={<React.Fragment><Typography
                  sx={{ display: 'inline', fontSize:{xs:18,sm:18,md:20,lg:22},}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  努力値ツール
                </Typography></React.Fragment>}
                secondary={<React.Fragment>
                  {/* <Typography
                    sx={{ display: 'inline', fontSize:{xs:16,sm:16,md:18,lg:20},}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    まもなくリリース！（2022年6月頃）
                  </Typography> */}
                  <AppStore></AppStore>
                </React.Fragment>} />
                
            </ListItem>
            <ListItem>
            <Typography
                    sx={{ display: 'inline', fontSize:{xs:16,sm:16,md:18,lg:20}, whiteSpace: 'pre-wrap'}}
                    component="span"
                    variant="caption"
                    color='text.secondary'
                  >
            {"倒すポケモン、手持ちの状態などを元に努力値を自動計算しカウントするツールです。手持ち全員にカウントする『学習装置機能』などがあり、”ゲーム内に存在する仕様に忠実”な所が特徴です。\nポケットモンスターシリーズ-剣盾および過去作(※初代-赤緑青ピカ、第2世代-金銀水晶を除く)に対応！"}
            </Typography>
            </ListItem>
          </CardContent>
        </Card>

        
        <Card sx={{ maxWidth: "md", margin: 2 }}>
          <CardContent>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ width: 100, height: 100 }} variant="rounded" alt="Remy Sharp" src="./images/noimage.png" />
              </ListItemAvatar>
              <ListItemText sx={{ml: '15px', fontSize:{xs:12,sm:12,md:15,lg:18} }} 
                primary={<React.Fragment><Typography
                  sx={{ display: 'inline', fontSize:{xs:18,sm:18,md:20,lg:22},}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  対面シミュレーター
                </Typography></React.Fragment>}
                secondary={<React.Fragment>
                  <Typography
                    sx={{ display: 'inline', fontSize:{xs:16,sm:16,md:18,lg:20}, whiteSpace: 'pre-wrap'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    AIにお任せのダメージレースシミュレータ！
                  </Typography>
                  
                </React.Fragment>} />
            </ListItem>
            <ListItem>
            <Typography
                    sx={{ display: 'inline', fontSize:{xs:16,sm:16,md:18,lg:20},}}
                    component="span"
                    variant="caption"
                    color='text.secondary'
                  >
            {"2022年冬、リリース予定\nーポケモンSVに向けて考案中。"}
            </Typography>
            </ListItem>
          </CardContent>
        </Card>

      </List></>
  );
}
