import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, TextField, Grid, Box } from '@mui/material';

function FileUpload({contract, account, provider}) {
const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `a1f30b008accb9fba5d3`,
            pinata_secret_api_key: `3bf674db8fd405b357a7bb9c901fe1d5b83ca824b6d195d5bcfcaf2073a138fe`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            component="label"
            disabled={!account}
          >
            Choose Image
            <input
              type="file"
              hidden
              onChange={retrieveFile}
            />
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="body1">Image: {fileName}</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!file}
            sx={{
              backgroundColor: !file ? 'lightgrey' : 'primary.main',
              '&:disabled': {
                color: 'white',
              },
            }}
            onClick={handleSubmit}
          >
            Upload File
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FileUpload
