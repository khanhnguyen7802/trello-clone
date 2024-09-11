import {  useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  
  const handleChange = (event) => {
    const selectedMode = event.target.value 
    setMode(selectedMode)
  };

  return (
    <FormControl size="small" sx={{ minWidth: '120px'}}>
      <InputLabel 
        id="label-select-dark-light-mode"
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848'),
          '&.Mui-focused': {
            color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
          }
        }}>Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Age"
        onChange={handleChange}
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848'),
          '.MuiOutlinedInput-notchedOutline': {        // border line of search box
            borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
          }, 
          '&:hover .MuiOutlinedInput-notchedOutline': {        // border line of search box
            borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {        // border line of search box
            borderColor: (theme) => (theme.palette.mode === 'dark' ? '#A1D6E2' : '#4d4848')
          }
        }}
      >

        <MenuItem value="light">
        <Box sx ={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LightModeIcon fontSize='small' />
          Light
        </Box>
        </MenuItem>

        <MenuItem value="dark">
          <Box sx ={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize='small' />
            Dark
          </Box>
        </MenuItem>
        
        <MenuItem value="system">
          <Box sx ={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>

      </Select>
    </FormControl>
  )
}

export default ModeSelect