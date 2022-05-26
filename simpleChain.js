const SHA256 = require("crypto-js/sha256")

/* ================ Block Class =================
    Class with a constructor for block
    ===========================================*/

class Block {
    constructor(data){
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousBlockHash = ""
    }
}

/* ================ Block Class =================
    Class with a constructor for new blockchain
    ===========================================*/

class Blockchain {
    constructor(){
        this.chain = [],
        this.addBlock(new Block("First block in the chain - Genesis block"));
    }

    addBlock (newBlock) {
        if(this.chain.length > 0){
            newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
}