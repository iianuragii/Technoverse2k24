import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Upload from "../../../artifacts/contracts/Upload.sol/Upload.json";
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import FileUpload from './FileUpload';
import Modal from "./Modal";
import Display from './Display';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import './Global.css';

const Dashboard = () => {
  const theme = useTheme();
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
      <Navbar />
      <Grid item xs={12}>
        <div className="ellipse"></div>
      </Grid>
      <Container>
        <Chatbot />
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Grid sx={{
            alignItems:"center",
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <Typography 
            variant='h2' 
            gutterBottom
            className="hero-text" 
            style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
          >
            <span style={{ color: '#8A6FF2' }}>Dash</span>board
          </Typography>

          <Typography variant="h6" sx={{ color: 'white' }}>
            Account: {account}
          </Typography>
          </Grid>
          <Grid container justifyContent="flex-start" spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Display contract={contract} account={account} />
            </Grid>
          </Grid>
        </Box>
        <Grid sx={{
          position:'relative'
        }}>
        <Box sx={{
          position: 'center',
          background: 'linear-gradient(108.01deg, #A18EFE 10.49%, #351A6C 101.01%)' ,
          borderradius: '14px',
          borderRadius: '10px',
          padding: '30px',
          color: '#FFF',
          textAlign: 'center',
          mt: 4
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Keep All Your Files Secured with FlickFile
          </Typography>
          <Box sx={{
            position:'center',
            border: '2px dashed #FFF',
            background: 'rgba(37, 37, 43, 1)',
            borderRadius: '10px',
            padding: '80px',
            mb: 4
          }}>
            <CloudUploadIcon sx={{ fontSize: '48px', color: '#FFF' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Supports JPG, PNG, MP4
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
              <FileUpload account={account} provider={provider} contract={contract} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 4 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#03DAC5', color: '#000', borderRadius: '10px', ml: 2 }}
              onClick={() => setModalOpen(true)}
            >
              Share Now
            </Button>
          </Box>
        </Box>
        </Grid>
      </Container>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract} />
      )}
    </>
  );
};

export default Dashboard;
