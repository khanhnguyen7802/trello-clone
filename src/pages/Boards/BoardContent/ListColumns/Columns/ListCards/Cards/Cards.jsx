import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Button from '@mui/material/Button';

function Cards({ card }) {
  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <Card sx={{ 
      cursor: 'pointer',
      overflow: 'unset',
    }}>
      {card?.cover && 
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={card?.cover}
        />
      }
      <CardContent>
        <Typography>{card?.title}</Typography>
      </CardContent>
      
      {shouldShowCardActions() && 
      <CardActions sx={{p: '0 4px 8px 4px'}}>
        <Box sx={{color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B')}}>
          {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>}
          {!!card?.comments?.length && <Button size="small" startIcon={<CommentIcon />}>{card?.comments?.length}</Button>}
          {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>}
        
        </Box>
      </CardActions>
    }
    </Card>
  )
}

export default Cards 