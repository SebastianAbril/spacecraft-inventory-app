import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Routes, Route, Link } from 'react-router-dom';
import { InventoryScreen } from './screen/InventoryScreen';
import { DetailItemScreen } from './screen/DetailItemScreen';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Spacecraft Inventory App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Inventory
            </Button>
            <Button color="inherit" component={Link} to="/new">
              New
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="md" sx={{ pt: 2 }}>
            <Routes>
              <Route path="/" element={<InventoryScreen />} />
              <Route path="/new" element={<DetailItemScreen />} />
              <Route path="/item/:id" element={<DetailItemScreen />} />
            </Routes>
          </Container>
        </main>
      </Box>
    </React.Fragment>
  );
}

export default App;
