// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

// module.exports = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Upload", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UploadModule", (m) => {
  const upload = m.contract("Upload", []);

  return { upload };
});
