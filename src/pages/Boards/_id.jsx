// details of a single board 

import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar';
import Container from '@mui/material/Container'
import BoardContent from './BoardContent';

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh'}}>
      <AppBar />

      <BoardBar />
     
      <BoardContent />

    </Container>
  )
}

export default Board 