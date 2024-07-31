import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, TextField, Grid, Box } from '@mui/material';
import CryptoJS from "crypto-js";

const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
const pinataSecretApiKey = import.meta.env.VITE_PINATA_API_SECRET_KEY;
const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

console.log("pinata api key",pinataApiKey);

function FileUpload({contract, account, provider}) {
const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (file) {
  //     try {
  //       // Read the file as an array buffer
  //       const reader = new FileReader();
  //       reader.readAsArrayBuffer(file);
  //       reader.onloadend = async () => {
  //         // Encrypt the file
  //         const wordArray = CryptoJS.lib.WordArray.create(reader.result);
  //         const encrypted = CryptoJS.AES.encrypt(wordArray, encryptionKey).toString();
          
  //         // Convert encrypted data to a Blob
  //         const encryptedBlob = new Blob([encrypted], { type: file.type });
  //         const formData = new FormData();
  //         formData.append("file", encryptedBlob, file.name);

  //       const resFile = await axios({
  //         method: "post",
  //         url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //         data: formData,
  //         headers: {
  //           pinata_api_key: pinataApiKey,
  //           pinata_secret_api_key: pinataSecretApiKey,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //       const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
  //       contract.add(account,ImgHash);
  //       alert("Successfully Image Uploaded");
  //       setFileName("No image selected");
  //       setFile(null);
  //       }
  //     } catch (e) {
  //       alert("Unable to upload image to Pinata");
  //     }
  //   }
  //   alert("Successfully Image Uploaded");
  //   setFileName("No image selected");
  //   setFile(null);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        // Upload the file to Pinata
        const formData = new FormData();
        formData.append("file", file, file.name);
  
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
            "Content-Type": "multipart/form-data",
          },
        });
  
        // Encrypt the IPFS hash
        const imgHash = resFile.data.IpfsHash;
        const encryptedHash = CryptoJS.AES.encrypt(imgHash, encryptionKey).toString();
        
        // Store the encrypted hash in your contract or database
        await contract.add(account, encryptedHash);
  
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
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
