import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Avatar,  Checkbox } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const Post = () => {
  return (
    <div>

<Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
       
      </CardActions>
      
    </Card>
    </div>
  )
}
