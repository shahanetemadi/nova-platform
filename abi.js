// abi.js
const ABI = [
  {"inputs":[{"internalType":"contract IOrigin","name":"_origin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[],"name":"AlreadyPurchased","type":"error"},
  {"inputs":[],"name":"AlreadyRegistered","type":"error"},
  {"inputs":[],"name":"AlreadyWithdrawn","type":"error"},
  {"inputs":[],"name":"InvalidLength","type":"error"},
  {"inputs":[],"name":"InvalidUsername","type":"error"},
  {"inputs":[],"name":"MaximumLegs2","type":"error"},
  {"inputs":[],"name":"MinimumWithdrawal","type":"error"},
  {"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},
  {"inputs":[],"name":"Ref1NotPurchased","type":"error"},
  {"inputs":[],"name":"Ref2NotPurchased","type":"error"},
  {"inputs":[],"name":"SelfReferralNotAllowed","type":"error"},
  {"inputs":[],"name":"TakenUsername","type":"error"},
  {"inputs":[],"name":"Terminated","type":"error"},

  {
    "inputs":[{"internalType":"string","name":"refer1","type":"string"},{"internalType":"string","name":"refer2","type":"string"}],
    "name":"Purchase",
    "outputs":[],
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "inputs":[{"internalType":"string","name":"username","type":"string"}],
    "name":"Register",
    "outputs":[],
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "inputs":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"bool","name":"showNotifications","type":"bool"}],
    "name":"UserBulkInfo",
    "outputs":[
      {"internalType":"string","name":"username","type":"string"},
      {
        "components":[
          {"internalType":"uint256","name":"uniUsd","type":"uint256"},
          {"internalType":"uint256","name":"biUsd","type":"uint256"},
          {"internalType":"uint256","name":"vou","type":"uint256"},
          {"internalType":"uint256","name":"mileUsd","type":"uint256"}
        ],
        "internalType":"struct BackBone.Balance",
        "name":"latest",
        "type":"tuple"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },

  {"inputs":[],"name":"UserCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

export default ABI;
