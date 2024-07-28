
// import React from 'react'
// import { useEffect } from "react";
// import { Box, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// const Modal = ({ setModalOpen, contract }) => {
//     const sharing = async () => {
//         const address = document.querySelector(".address").value;
//         await contract.allow(address);
//         setModalOpen(false);
//       };
//       useEffect(() => {
//         const accessList = async () => {
//           const addressList = await contract.shareAccess();
//           let select = document.querySelector("#selectNumber");
//           const options = addressList;
    
//           for (let i = 0; i < options.length; i++) {
//             let opt = options[i];
//             let e1 = document.createElement("option");
//             e1.textContent = opt;
//             e1.value = opt;
//             select.appendChild(e1);
//           }
//         };
//         contract && accessList();
//       }, [contract]);
//   return (
//     <Box sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 1000,
//       }}>
//         <Box sx={{
//           width: 400,
//           padding: 4,
//           backgroundColor: 'white',
//           borderRadius: 2,
//           boxShadow: 3,
//         }}>
//           <Typography variant="h6" component="div" gutterBottom>
//             Share with
//           </Typography>
//           <Box component="form" noValidate autoComplete="off">
//             <TextField
//               fullWidth
//               label="Enter Address"
//               variant="outlined"
//               margin="normal"
//               className="address"
//             />
//             <FormControl fullWidth variant="outlined" margin="normal">
//               <InputLabel id="select-label">People With Access</InputLabel>
//               <Select
//                 labelId="select-label"
//                 id="selectNumber"
//                 label="People With Access"
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={() => setModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={sharing}
//             >
//               Share
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     );
// }

// export default Modal
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Modal = ({ setModalOpen, contract }) => {
  const [address, setAddress] = useState("");
  const [accessList, setAccessList] = useState([]);

  const sharing = async () => {
    if (!address) {
      alert("Please enter a valid address");
      return;
    }
    await contract.allow(address);
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchAccessList = async () => {
      const addressList = await contract.shareAccess();
      setAccessList(addressList);
    };
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
          Share with
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
              value=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {accessList.map((addr, index) => (
                <MenuItem key={index} value={addr}>
                  {addr}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;

