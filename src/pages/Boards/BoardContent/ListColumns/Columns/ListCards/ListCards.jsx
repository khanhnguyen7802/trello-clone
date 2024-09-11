import Box from '@mui/material/Box';
import Cards from './Cards/Cards';


function ListCards({ cards }) {
  return (
      /* List Card 01*/
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
                                    ${theme.trello.columnHeaderHeight} - 
                                    ${theme.trello.columnFooterHeight})`
      }}>

       {cards?.map(card => <Cards key={card._id} card={card} />)}
        <Cards />

      </Box>
  )
}

export default ListCards