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
import ListCards from './ListCards/ListCards';
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Columns({ column }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column._id,
    data: { ...column }
  });
  
  const dndKitColumnStyles = {
    // touchAction: 'none', 
    transform: CSS.Translate.toString(transform), // use trannslate to avoid being transformed
    transition
  };
  

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null)
  }; 

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    /* Box Column 01*/
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
      {...listeners} 
      sx={{
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
        height: (theme) => theme.trello.columnHeaderHeight,
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
          {column?.title}
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
      
      {/* List Card */}
      <ListCards cards={orderedCards} />
      
      {/* Box Column Footer */}
      <Box sx ={{
        height: (theme) => theme.trello.columnFooterHeight,
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
  )
}

export default Columns