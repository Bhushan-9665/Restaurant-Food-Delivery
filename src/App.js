import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheam } from './theam/DarkTheam';
import RouterCompo from './routers/RouterCompo';


function App() {
  return (
    <ThemeProvider theme={darkTheam}>
    <CssBaseline/>
      <RouterCompo/> 
    </ThemeProvider>
  );
}

export default App;
