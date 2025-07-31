/*
TODO remove bootstrap and replace with MUI.
*/

import { useState, useRef } from "react";
import { 
  Container, 
  Grid, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box,
  Typography,
  Paper
} from "@mui/material";
import QuotationTable from "./QuotationTable";

const products = [
  { code: "p001", name: "Product A", price: 100 },
  { code: "p002", name: "Product B", price: 200 },
  { code: "p003", name: "Product C", price: 150 },
  { code: "p004", name: "Product D", price: 250 },
];

function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const discountRef = useRef();

  const [dataItems, setDataItems] = useState([]);
  const [ppu, setPpu] = useState(products[0].price);

  const addItem = () => {
    let item = products.find((v) => itemRef.current.value === v.code);
    const newItem = {
      item: item.name,
      ppu: parseFloat(ppuRef.current.value),
      qty: parseInt(qtyRef.current.value),
      discount: parseFloat(discountRef.current.value) || 0,
    };

    // Check for redundant items (same name and price)
    const existingItemIndex = dataItems.findIndex(
      existing => existing.item === newItem.item && existing.ppu === newItem.ppu
    );

    if (existingItemIndex !== -1) {
      // Merge with existing item
      const updatedItems = [...dataItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        qty: updatedItems[existingItemIndex].qty + newItem.qty,
        discount: updatedItems[existingItemIndex].discount + newItem.discount,
      };
      setDataItems(updatedItems);
    } else {
      // Add new item
      setDataItems([...dataItems, newItem]);
    }
  };

  const deleteByIndex = (index) => {
    let newDataItems = [...dataItems];
    newDataItems.splice(index, 1);
    setDataItems(newDataItems);
  };

  const clearAllItems = () => {
    setDataItems([]);
  };

  const productChange = () => {
    let item = products.find((v) => itemRef.current.value === v.code);
    setPpu(item.price);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={3} sx={{ backgroundColor: "#e4e4e4", p: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Item
            </Typography>
            <FormControl fullWidth>
              <Select
                inputRef={itemRef}
                onChange={productChange}
                defaultValue={products[0].code}
                size="small"
              >
                {products.map((p) => (
                  <MenuItem key={p.code} value={p.code}>
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Price Per Unit
            </Typography>
            <TextField
              fullWidth
              type="number"
              inputRef={ppuRef}
              value={ppu}
              onChange={(e) => setPpu(e.target.value)}
              size="small"
            />
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Quantity
            </Typography>
            <TextField
              fullWidth
              type="number"
              inputRef={qtyRef}
              defaultValue={1}
              size="small"
            />
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Discount
            </Typography>
            <TextField
              fullWidth
              type="number"
              inputRef={discountRef}
              defaultValue={0}
              size="small"
            />
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              fullWidth 
              onClick={addItem}
              sx={{ 
                backgroundColor: '#0d6efd',
                '&:hover': {
                  backgroundColor: '#0b5ed7'
                }
              }}
            >
              Add
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <QuotationTable
            data={dataItems}
            deleteByIndex={deleteByIndex}
            clearAllItems={clearAllItems}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
