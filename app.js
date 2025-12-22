async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask");
    return;
  }

  try {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });

    document.getElementById("status").innerText =
      "Connected: " + accounts[0];

    await switchToBSC();
    await initContract();
  } catch (err) {
    console.error(err);
  }
}

async function switchToBSC() {
  const bscChainId = "0x38"; // 56

  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: bscChainId }]
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: bscChainId,
            chainName: "Binance Smart Chain",
            nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18
            },
            rpcUrls: ["https://bsc-dataseed.binance.org/"],
            blockExplorerUrls: ["https://bscscan.com"]
          }
        ]
      });
    }
  }
}

async function readContract() {
  if (!contract) {
    alert("Contract not initialized");
    return;
  }

  try {
    const name = await contract.methods.name().call();
    const supply = await contract.methods.totalSupply().call();

    document.getElementById("output").innerText =
      "Token Name: " + name + "\nTotal Supply: " + supply;
  } catch (err) {
    console.error(err);
  }
}
