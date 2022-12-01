const web3 = new Web3(ethereum)
var minecraftSwordsAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DIAMOND",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "GOLD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "IRON",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "STONE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "WOOD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "diamondTotalLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "diamondTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "goldTotalLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "goldTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "ironTotalLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "ironTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stoneTotalLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "stoneTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "woodTotalLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "woodTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quantidade",
        "type": "uint256"
      }
    ],
    "name": "buyWood",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quantidade",
        "type": "uint256"
      }
    ],
    "name": "buyStone",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quantidade",
        "type": "uint256"
      }
    ],
    "name": "buyIron",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quantidade",
        "type": "uint256"
      }
    ],
    "name": "buyGold",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quantidade",
        "type": "uint256"
      }
    ],
    "name": "buyDiamond",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
];
var minecraftSwordsEndereco = "0xe60946cE4AeB3aE53d4075cd89CdCdb94bD3EA5C";
let minecraftSwordsContrato = new web3.eth.Contract(minecraftSwordsAbi, minecraftSwordsEndereco);
var addressSpan = document.getElementById("address");
addressSpan.innerHTML = `Contract Address: ${minecraftSwordsEndereco}`;
var connectWalletBtn = document.getElementById("connectWalletBtn");
var buyDiamondBtn = document.getElementById("register-diamond-btn");
var buyGoldBtn = document.getElementById("register-gold-btn");
var buyIronBtn = document.getElementById("register-iron-btn");
var buyStoneBtn = document.getElementById("register-stone-btn");
var buyWoodBtn = document.getElementById("register-wood-btn");
var inputQnt = document.getElementById("inputNumberBox");
var qtdWood = document.getElementById("quantidade-wood");
var qtdStone = document.getElementById("quantidade-stone");
var qtdIron = document.getElementById("quantidade-iron");
var qtdGold = document.getElementById("quantidade-gold");
var qtdDiamond = document.getElementById("quantidade-diamond");



async function setQnt(){
    var qtddWood = await minecraftSwordsContrato.methods.woodTotalSupply().call();
    var qtddStone = await minecraftSwordsContrato.methods.stoneTotalSupply().call();
    var qtddIron = await minecraftSwordsContrato.methods.ironTotalSupply().call();
    var qtddGold = await minecraftSwordsContrato.methods.goldTotalSupply().call();
    var qtddDiamond = await minecraftSwordsContrato.methods.diamondTotalSupply().call();

    qtddWood = (2*10**5) - qtddWood;
    qtddStone = (2*10**4) - qtddStone;
    qtddIron = (2*10**3) - qtddIron;
    qtddGold = (2*10**2) - qtddGold;
    qtddDiamond = (2*10) - qtddDiamond;

    qtdWood.innerHTML = qtddWood;
    qtdStone.innerHTML = qtddStone;
    qtdIron.innerHTML = qtddIron;
    qtdGold.innerHTML = qtddGold;
    qtdDiamond.innerHTML = qtddDiamond;
}

setQnt();

async function connectWallet(){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            return accounts[0];
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

connectWalletBtn.addEventListener("click",()=>{
    connectWallet().then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function buyDiamond(_quantidade){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            let account = accounts[0];
            let price = bigInt(5 * 10 ** 17);
            let value = _quantidade * price;
            let call = await minecraftSwordsContrato.methods.buyDiamond(_quantidade).send({from:account, value:value});
            return call;
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

buyDiamondBtn.addEventListener("click",()=>{
    buyDiamond(inputQnt.value).then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function buyGold(_quantidade){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            let account = accounts[0];
            let price = 1 * 10 ** 16;
            let value = _quantidade * price;
            let call = await minecraftSwordsContrato.methods.buyGold(_quantidade).send({from:account, value:value});
            return call;
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

buyGoldBtn.addEventListener("click",()=>{
    buyGold(inputQnt.value).then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function buyIron(_quantidade){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            let account = accounts[0];
            let price = 5 * 10 ** 15;
            let value = _quantidade * price;
            let call = await minecraftSwordsContrato.methods.buyIron(_quantidade).send({from:account, value:value});
            return call;
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

buyIronBtn.addEventListener("click",()=>{
    buyIron(inputQnt.value).then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function buyStone(_quantidade){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            let account = accounts[0];
            let price = 1 * 10 ** 15;
            let value = _quantidade * price;
            let call = await minecraftSwordsContrato.methods.buyStone(_quantidade).send({from:account, value:value});
            return call;
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

buyStoneBtn.addEventListener("click",()=>{
    buyStone(inputQnt.value).then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function buyWood(_quantidade){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            let account = accounts[0];
            let price = 1 * 10 ** 14;
            let value = _quantidade * price;
            let call = await minecraftSwordsContrato.methods.buyWood(_quantidade).send({from:account, value:value});
            return call;
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
};

buyWoodBtn.addEventListener("click",()=>{
    buyWood(inputQnt.value).then((call)=>{
        alert(call)
    }).catch((error)=>{})
})
