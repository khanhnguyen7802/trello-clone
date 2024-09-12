import Box from '@mui/material/Box';
import Columns from './Columns/Columns';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function ListColumns({ columns }) {
 
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      {/* Another box to wrap the box columns  */}
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%', 
        height: '100%', 
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m :2 }
      }}>
        {columns?.map((column) => {
          return <Columns key={column._id} column={column} />
        })}
        {/* <Columns />
        <Columns /> */}

        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2, 
          borderRadius: '6px',
          height: 'fit-content',
          backgroundColor: '#ffffff3d'
        }}>
          <Button 
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              color: 'black',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
            >Add new column </Button>
        </Box>

      </Box>
    </SortableContext>
  )
}

export default ListColumns