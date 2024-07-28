import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from "ethers";
import Upload from "../../../artifacts/contracts/Upload.sol/Upload.json"
import { Button, Typography, Box, Grid, Container} from '@mui/material';
import FileUpload from './FileUpload'
import Modal from "./Modal"
import Display from './Display';
const Dashboard = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum)//to read data from blockchain

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
  return(
    
    <Container>
    <Box
    sx={{
        position: 'fixed',
        top: 80,
        right: 16,
        zIndex: 1000,
    }}
    >
    {!modalOpen && (
        <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        >
        Share
        </Button>
    )}
    </Box>

    {modalOpen && (
    <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
    )}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
            <Grid item>
            <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                Dashboard
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6">
                Account: {account ? account : 'Not connected'}
            </Typography>
            </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={4} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
            <FileUpload account={account} provider={provider} contract={contract} />
            </Grid>
            <Grid item xs={12} md={6}>
            <Display contract={contract} account={account} />
            </Grid>
        </Grid>
    </Container>
  )
}
export default Dashboard
