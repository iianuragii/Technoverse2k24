import React from 'react'
import { useState } from "react";
import { Box, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

function Display({ contract, account }) {

    
    const [data, setData] = useState("");
    const getdata = async () => {
      let dataArray;
      const Otheraddress = document.querySelector(".address").value;
      try {
        if (Otheraddress) {
          dataArray = await contract.display(Otheraddress);
          console.log(dataArray);
        } else {
          dataArray = await contract.display(account);
        }
      } catch (e) {
        alert("You don't have access");
      }
      const isEmpty = Object.keys(dataArray).length === 0;
  
      if (!isEmpty) {
        const str = dataArray.toString();
        const str_array = str.split(",");
        // console.log(str);
        // console.log(str_array);
        const images = str_array.map((item, i) => {
          return (
            <a href={item} key={i} target="_blank">
              <img
                key={i}
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="new"
                className="image-list"
              ></img>
            </a>
          );
        });
        setData(images);
      } else {
        alert("No image to display");
      }
    };
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            label="Enter Address"
            variant="outlined"
            className="address"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={getdata}
            className="center button"
          >
            Get Data
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Display
