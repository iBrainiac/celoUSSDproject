
const celoKIT = require('@celo/contractkit')
const nodeURL = 'https://celo-alfajores.infura.io/v3/a631ac9cf5834bc3b6673e67888c3160'

const kit = celoKIT.newKit(nodeURL)

// console.log("kit connected", kit)

//Create wallet generate
const generateWalletAddress = async () => {
    const account = await kit.web3.eth.accounts.create()
    console.log("account", account)
    return account
}

generateWalletAddress()
