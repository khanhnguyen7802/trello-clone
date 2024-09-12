import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';

function BoardContent({ board }) {
  // // if we use pointer sensor then have to combine with CSS touch-action
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 }}) // move 10px beforehand to drag
  
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 }}) // move 10px beforehand to drag
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 }}) // hold 250ms to trigger the event
  // + if we move within delay time and tolerance is set to small value, then the drag action is terminated 
  // + if within delay time and tolerance is set to high value, then we have to move more than 500px then drag action is terminated.

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [])
  
  const handleDragEnd = (event) => {
    console.log('handleDragEnd: ', event)
    const { active, over } = event 


    if (!over) return // in case there's no column 
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id) // old position from 'active'
      const newIndex = orderedColumns.findIndex(c => c._id === over.id) // new position from 'over'

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex) // receive the states
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)


      setOrderedColumns(dndOrderedColumns) // update the new states
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#73605B' : '#89ABE3'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight, 
        display: 'flex', 
        p: '10px 0'
      }}>

        <ListColumns columns={orderedColumns} />
      </Box>

    </DndContext>
  )
}

export default BoardContent