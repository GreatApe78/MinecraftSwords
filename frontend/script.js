const web3 = new Web3(ethereum)
import dadosMinecraftSwords from '../build/contracts/MinecraftSwords.json' assert {type:'json'};
var minecraftSwordsAbi = dadosMinecraftSwords.abi;
var minecraftSwordsEndereco = dadosMinecraftSwords.networks[5].address;
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

window.onload = setQnt();

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