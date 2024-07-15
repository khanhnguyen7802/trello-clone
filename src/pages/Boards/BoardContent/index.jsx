import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContentCopy, ContentPaste } from '@mui/icons-material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';


const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'



function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null)
  };


  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#89ABE3'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight, 
      display: 'flex', 
      p: '10px 0'
  }}>

      {/* Another box to wrap the box columns */}
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%', 
        height: '100%', 
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m :2 }
      }}>

        {/* Box Column 01*/}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#F1D3B2' : '#FDD7E4'), 
          color: (theme) => (theme.palette.mode === 'dark' ? '#5e3d03' : 'black'),
          ml: 2, 
          borderRadius: '6px', 
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>

          {/* Header */}
          <Box sx ={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>

            <Typography variant='h6' sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Column Title
            </Typography>  

            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon 
                sx={{cursor: 'pointer'}}
                id='basic-column-dropdown' 
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endicon={<ExpandMoreIcon />}
                />
              </Tooltip>

            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddBoxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>


              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete this column</ListItemText>

              </MenuItem>
            </Menu>
          </Box>

          </Box>
          
          {/* List Card 01*/}
          <Box sx ={{
            p: '0 5px', // use both padding and margin to avoid being sticked together
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden', // avoid scroll bar 
            overflowY: 'auto', 
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
                                        ${theme.spacing(5)} - 
                                        ${COLUMN_HEADER_HEIGHT} - 
                                        ${COLUMN_FOOTER_HEIGHT})`
          }}>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset',
            }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://pbs.twimg.com/ext_tw_video_thumb/1799053505250160641/pu/img/zLwp7B4EoDmyyhHR.jpg:large"
              />
              <CardContent>
                <Typography>Karina</Typography>
            
              </CardContent>
              
              <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Box sx={{color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B')}}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>5</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>20</Button>
                </Box>
              </CardActions>
            </Card>

            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
            }}>
            
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>

        
          </Box>
          
          {/* Box Column Footer */}
          <Box sx ={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Button startIcon={<AddBoxIcon />} sx={{color: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#00008B')}}>Add new card</Button> 
            <Tooltip title='Drag to move'>
              <DragHandleIcon />
            </Tooltip>
          </Box>
      
        </Box>


          {/* Box Column 02*/}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#F1D3B2' : '#FDD7E4'), 
          color: (theme) => (theme.palette.mode === 'dark' ? '#5e3d03' : 'black'),
          ml: 2, 
          borderRadius: '6px', 
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>

          {/* Header */}
          <Box sx ={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>

            <Typography variant='h6' sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Column Title
            </Typography>  

            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon 
                sx={{cursor: 'pointer'}}
                id='basic-column-dropdown' 
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endicon={<ExpandMoreIcon />}
                />
              </Tooltip>

            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddBoxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
            
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>


              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete this column</ListItemText>

              </MenuItem>
            </Menu>
          </Box>

          </Box>
          
          {/* List Card 01*/}
          <Box sx ={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden', // avoid scroll bar 
            overflowY: 'auto', 
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
                                        ${theme.spacing(5)} - 
                                        ${COLUMN_HEADER_HEIGHT} - 
                                        ${COLUMN_FOOTER_HEIGHT})`
          }}>
            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
              }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://pbs.twimg.com/ext_tw_video_thumb/1799053505250160641/pu/img/zLwp7B4EoDmyyhHR.jpg:large"
              />
              <CardContent>
                <Typography>Karina</Typography>
              
              </CardContent>
              
              <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>5</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>20</Button>
              </CardActions>
            </Card>

            <Card sx={{ 
              cursor: 'pointer',
              overflow: 'unset'
              }}>
              
              <CardContent sx={{p: 1.5, '&:last-child': { p: 1.5 }}}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
          
          </Box>
          
          {/* Box Column Footer */}
          <Box sx ={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddBoxIcon /> }>Add new card</Button> 
            <Tooltip title='Drag to move'>
              <DragHandleIcon />
            </Tooltip>
          </Box>
      
        </Box>
      
      </Box>

  </Box>
  )
}

export default BoardContent