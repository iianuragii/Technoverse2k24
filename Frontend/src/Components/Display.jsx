import React, { useState } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  const [data, setData] = useState([]);

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
      return;
    }
    if (dataArray && dataArray.length > 0) {
      const str_array = dataArray.toString().split(",");
      const images = str_array.map((item, i) => {
        let cleanItem = item;

        if (item.startsWith("ipfs://")) {
          cleanItem = item.substring(7);
        } else if (item.startsWith("https://gateway.pinata.cloud/ipfs/")) {
          cleanItem = item.substring(28);
        }

        cleanItem = cleanItem.replace('/fs/', '');

        const imageUrl = `https://gateway.pinata.cloud/ipfs/${cleanItem}`;

        return {
          url: imageUrl,
          key: i,
        };
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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%', overflow: 'auto' }}>
            <Grid container spacing={2} justifyContent="center">
              {data.map(({ url, key }) => (
                <Grid item key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={url}
                      alt={`Image_${key}`}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '10px' }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/100?text=Image+Not+Found';
                        console.error(`Failed to load image at ${url}`);
                      }}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
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
  );
}

export default Display;
