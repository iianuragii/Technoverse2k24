// import React, { useState, useEffect } from "react";
// import { Box, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// const Modal = ({ setModalOpen, contract }) => {
//   const [address, setAddress] = useState("");
//   const [accessList, setAccessList] = useState([]);

//   const sharing = async () => {
//     if (!address) {
//       alert("Please enter a valid address");
//       return;
//     }
//     await contract.allow(address);
//     setModalOpen(false);
//   };

//   useEffect(() => {
//     const fetchAccessList = async () => {
//       const addressList = await contract.shareAccess();
//       setAccessList(addressList);
//     };
//     if (contract) {
//       fetchAccessList();
//     }
//   }, [contract]);

//   return (
//     <Box sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       zIndex: 1000,
//     }}>
//       <Box sx={{
//         width: 400,
//         padding: 4,
//         backgroundColor: 'white',
//         borderRadius: 2,
//         boxShadow: 3,
//       }}>
//         <Typography variant="h6" component="div" gutterBottom>
//           Share with
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Enter Address"
//             variant="outlined"
//             margin="normal"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <FormControl fullWidth variant="outlined" margin="normal">
//             <InputLabel id="select-label">People With Access</InputLabel>
//             <Select
//               labelId="select-label"
//               id="selectNumber"
//               label="People With Access"
//               value=""
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               {accessList.map((addr, index) => (
//                 <MenuItem key={index} value={addr}>
//                   {addr}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => setModalOpen(false)}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={sharing}
//           >
//             Share
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Modal;
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Modal = ({ setModalOpen, contract }) => {
  const [address, setAddress] = useState("");
  const [accessList, setAccessList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  const fetchAccessList = async () => {
    try {
      const addressList = await contract.shareAccess();
      setAccessList(addressList);
      console.log("Fetched access list:", addressList);
    } catch (error) {
      console.error("Error fetching access list:", error);
    }
  };

  const sharing = async () => {
    if (!address) {
      alert("Please enter a valid address");
      return;
    }
    try {
      await contract.allow(address);
      await fetchAccessList(); // Fetch updated list
      setModalOpen(false);
    } catch (error) {
      console.error("Error sharing access:", error);
      alert("Failed to share access. Please try again.");
    }
  };

  const revokeAccess = async () => {
    if (!selectedAddress) {
      alert("Please select an address to revoke access");
      return;
    }

    try {
      await contract.disallow(selectedAddress);
      await fetchAccessList(); // Fetch updated list after revoking
      setModalOpen(false);
    } catch (error) {
      console.error("Error revoking access:", error);
      alert("Failed to revoke access. Please try again.");
    }
  };

  useEffect(() => {
    if (contract) {
      fetchAccessList();
    }
  }, [contract]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
    }}>
      <Box sx={{
        width: 400,
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}>
        <Typography variant="h6" component="div" gutterBottom>
          Share or Revoke Access
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Enter Address"
            variant="outlined"
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="select-label">People With Access</InputLabel>
            <Select
              labelId="select-label"
              id="selectNumber"
              label="People With Access"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {accessList.map((addr, index) => (
                <MenuItem key={index} value={addr.user}>
                  {addr.user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={sharing}
          >
            Share
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={revokeAccess}
          >
            Revoke
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
