import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { getItems } from '../../core/service/inventoryService';

export function InventoryScreen() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDataItems = async (searchValue) => {
    const items = await getItems(searchValue);
    setItems(items);
  };

  const onRowClick = (id) => {
    navigate('/item/' + id, { replace: true });
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    getDataItems();
  }, []);

  useEffect(() => {
    getDataItems(searchValue);
  }, [searchValue]);

  return (
    <TableContainer component={Paper}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Name or Type"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => onRowClick(item.id)}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell>{item.spacecraft.name}</TableCell>
              <TableCell>{item.spacecraft.type}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
