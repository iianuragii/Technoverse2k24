import React, { useState } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CryptoJS from "crypto-js";

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
    '& input': {
      color: 'white', // Text color for the input field
    },
  },
  height: '46px', // Set the same height as the Button
});

const CustomButton = styled(Button)({
  backgroundColor: '#8A6FF2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#7B5EDB',
  },
  height: '46px', // Set the same height as the TextField
});

const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

function Display({ contract, account }) {
  const [data, setData] = useState([]);
  const [otherAddress, setOtherAddress] = useState("");

  const handleAddressChange = (e) => {
    setOtherAddress(e.target.value);
  };

  const getdata = async () => {
    let dataArray = [];

    try {
      if (otherAddress) {
        // Fetch data for the address entered in the input field
        const otherAccountData = await contract.display(otherAddress);
        dataArray = dataArray.concat(otherAccountData);
        console.log("dataArray", dataArray);
        console.log("Other Address", otherAddress);
        console.log("Other account data", otherAccountData);
      }

      // Fetch data for the current logged-in account
      const currentAccountData = await contract.display(account);
      dataArray = dataArray.concat(currentAccountData);
      console.log("dataArray", dataArray);

    } catch (e) {
      alert("You don't have access");
      return;
    }

    if (dataArray.length > 0) {
      const str_array = dataArray.toString().split(",");
      const images = str_array.map((item, i) => {
        let cleanItem = item;

        if (item.startsWith("ipfs://")) {
          cleanItem = item.substring(7);
        } else if (item.startsWith("https://gateway.pinata.cloud/ipfs/")) {
          cleanItem = item.substring(34);
        }

        cleanItem = cleanItem.replace('/fs/', '');

        //Decrypting the item
        // const decrypted = CryptoJS.AES.decrypt(cleanItem, encryptionKey);
        // const decryptedStr = CryptoJS.enc.Utf8.stringify(decrypted);
        // console.log("Decrypted data:", decryptedStr);
        let decryptedStr = cleanItem;

        try {
          // Try to decrypt
          const bytes = CryptoJS.AES.decrypt(cleanItem, encryptionKey);
          decryptedStr = CryptoJS.enc.Utf8.stringify(bytes);
        } catch (error) {
          // If decryption fails, assume it's already a valid format
          console.warn("Decryption failed or not required:", error);
        }

        const imageUrl = `https://gateway.pinata.cloud/ipfs/${decryptedStr}`;

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
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
          <CustomTextField
            label="Enter Address"
            variant="outlined"
            className="address"
            sx={{ flex: 1, marginRight: 2, width: '300px' }}
            InputProps={{ style: { height: '46px' } }} // Ensuring the text field's height
            value={otherAddress}
            onChange={handleAddressChange}
          />
          <CustomButton
            variant="contained"
            onClick={getdata}
            className="center button"
          >
            Get Data
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Display;
