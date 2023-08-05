import  * as ethers from 'ethers';

async function getInfo(address: string) {
    const provider = ethers.getDefaultProvider('mainnet');
    const balance = await provider.getBalance(address);
    const transactionCount = await provider.getTransactionCount(address);
    console.log(ethers.formatEther(balance));
    console.log(transactionCount);
}



async function getAccountType(address: string) {
    const provider = ethers.getDefaultProvider('mainnet');
    const code = await provider.getCode(address);
    if (code === '0x') {
        console.log('Externally Owned Account');
    } else {
        console.log('Contract Account');
    }
}

 getInfo("0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85");
getInfo("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
 getInfo("0x3b138FC7eC06B2A44565994CfDe5134A75915995");

getAccountType('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85');
getAccountType('0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C');
 getAccountType('0x3b138FC7eC06B2A44565994CfDe5134A75915995');