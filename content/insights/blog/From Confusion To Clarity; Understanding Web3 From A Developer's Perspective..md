![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/web3.webp)

You’re a developer. 

You wake up every day as usual. 

You take your phone and open X (formerly Twitter), heading straight to the trends section. 

The first items on the trend list are WEB3, Blockchain, Bitcoin, Ethereum. 

Your next thought is, "What the hell happened tonight?" 

And yeah, Bitcoin's price is through the roof, and next, you say to yourself, "Another bubble." 

But wait, the next step on your agenda is to open LinkedIn and read some news. You review your feed and something is off—a lot of requests from HR recruiters looking for blockchain developers. 

Which is good, but you don't know anything about **Web3** and blockchain; you've lost your opportunity! 

And let me say something to you: at the time when I'm writing this article, understanding how **Web3** works is confusing.

## How To Deal With The Web3 Puzzle Environment?

"Well, I’m going to dive into this puzzle using Ethereum. The first step to accomplish is understanding what Web 1, Web 2, and Web 3 are.  [’The Introduction to Web 3 - The Ethereum Blog’](https://ethereum.org/en/web3/) can help you understand what Web3 means in a deep way if you’re a complete newbie. If not, in a summarized way, here are the main characteristics of Web 3: 

- **Web3 is decentralized:** Instead of large swathes of the internet being controlled and owned by centralized entities, ownership is distributed among its builders and users.

![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/descentral.webp)

- **Web3 is permissionless:** Everyone has equal access to participate in Web3, and no one is excluded. For example, [ChainList](https://chainlist.org/)  is a directory of EVM (Ethereum Virtual Machine) networks. Users can utilize this information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID, ensuring they connect to the correct chain.

![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/permissionless.webp)

- **Web3 has native payments & It’s trustless:** Web3 uses cryptocurrency for spending and sending money online, instead of relying on the outdated infrastructure of banks and payment processors. It operates using incentives and economic mechanisms, rather than depending on trusted third parties.

![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/payment-model.webp)

If you come from the Web2 sector, the best way to understand these concepts is to consider that behind the scenes, there are many servers to which anyone can connect and execute actions. The benefit is that every action executed is encrypted and replicated across the network. If one of these servers crashes, don’t worry! The data still exists on the others, and best of all, none of this relies on third parties. 
## How To Self-Host One Server And What Are The Requirements?

First of all, we should adjust our terminology: in a distributed network, instead of using the word 'server' (the connection point), we refer to it as a  [’Node’.](https://ethereum.org/en/developers/docs/nodes-and-clients/) 

To self-host a Network Node on the Ethereum Network, it's important to understand that a Node consists of two separate pieces of software (known as 'clients'): 

- **The Execution Client:** This listens for new transactions broadcasted on the network, executes them in the Ethereum Virtual Machine (EVM), and maintains the latest state and database of all current Ethereum data. 

- **The Consensus Client:** implements the [proof-of-stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) consensus algorithm, enabling the network to achieve agreement based on validated data from the execution client. 

The machine where you plan to self-host a node must meet certain [requirements](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/), but the purpose of this blog is not to delve deeply into this topic. Instead, it's to provide you with useful links and a basic explanatory idea to help you understand Web3. 

Now, you have all the knowledge needed to send requests to an Ethereum Network. If you want to learn how, I invite you to read ‘[**How To Perform Json-RPC Calls To The Ethereum Blockchain’.**](https://www.jussmor.com/insights/blog/how-to-perform-json-rpc-calls-to-the-ethereum-blockchain/) 

Congratulations if you have read up to this point—you're about to blow your mind with new and exciting concepts!.

![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/puppy.webp)

Now you understand what a Decentralized Network is, and if you've read the [Json-RPC blog,](https://www.jussmor.com/insights/blog/how-to-perform-json-rpc-calls-to-the-ethereum-blockchain/) you know how to connect directly to the network. 

You're probably thinking: 'Okay, Web3 is revolutionizing the current state of the web. It can be applied to DeFi (Decentralized Finance), DAOs (Decentralized Autonomous Organizations), NFTs (Non-Fungible Tokens), and decentralized social networks.' Indeed, it seems that Web3 is carving out a niche in nearly every existing sector, prompting developer communities and companies to develop new tools and technologies, which is truly exciting. 

Your next thought might be: I’m ready to start writing programs. “Wait! My little Padawan, there's more to learn first." 
## Understanding More Core Concepts. 

The most extensive use case for distributed networks is cryptocurrencies, and this is likely why you've ventured into the world of Web3. At this point, you might think it's daunting because you've heard news stories about people losing millions of dollars due to forgotten keys to their crypto accounts. You've probably also encountered some perplexing concepts like gas, transfer fees, private keys, gas limits, blocks, and more. These terms can seem overwhelming at first, but they are crucial components of how cryptocurrencies operate. 

I’m going to try to simplify this concepts as much as possible: 

- Accounts 
- Transactions 
- Blocks 
- Gas 
After understanding these concepts, you can read:  [Smart Contracts for Noobs.](https://dev.to/paulinebanye/writing-your-first-smart-contract-with-remix-3b2d) 
## Accounts

Operating in the Web3 world requires an account, similar to Web2 services, but there are some differences. In Web2, personal data such as your name, last name, address, email address, and password are required and must be entered multiple times across different service providers. 

In Web3, you can have multiple accounts, but only one is needed to verify your ownership. This account can hold cash, or in this case, crypto money like ETH. That’s one of the benefits of decentralization. 

To create an ETH account you can use something called a  [Wallets.](https://cryptonews.com/cryptocurrency/best-crypto-wallets/) For a more detailed guide, check out the YouTube video: [Setup a MetaMask Wallet.](https://www.youtube.com/watch?v=-HTubEJ61zU&t=18s)

Note: An account is not a wallet. An account refers to the keypair that identifies your ownership of an ETH account. A wallet, on the other hand, is an interface or application that lets you interact with your ETH account. 
## Transactions 

In a simple analogy, sending money in the Web3 world is like transferring funds from one bank account to another. However, in a more technical sense, transactions are cryptographically signed instructions issued by accounts. 

A submitted transaction typically includes the following information: 

- **from** – the address of the sender, that will be signing the transaction. This will be an externally-owned account as contract accounts cannot send transactions. 
- **to** – the receiving address (if an externally-owned account, the transaction will transfer value. If a contract account, the transaction will execute the contract code). 
- **signature** – the identifier of the sender. This is generated when the sender's private key signs the transaction and confirms the sender has authorized this transaction. 
- **nonce** - a sequentially incrementing counter which indicates the transaction number from the account. 
- **value** – amount of ETH to transfer from sender to recipient (denominated in WEI, where 1ETH equals 1e+18wei). 
- **input data** – optional field to include arbitrary data. 
- **gasLimit** – the maximum amount of gas units that can be consumed by the transaction. The [EVM](https://ethereum.org/en/developers/docs/evm/opcodes/) specifies the units of gas required by each computational step. 
- **maxPriorityFeePerGas** - the maximum price of the consumed gas to be included as a tip to the validator. 
- **maxFeePerGas** - the maximum fee per unit of gas willing to be paid for the transaction (inclusive of **baseFeePerGas** and **maxPriorityFeePerGas**). 

If you need a more visual perspective [The Ethereum Blockchain Explorer](https://etherscan.io/) can help you. 

## Gas

Gas refers to the computational effort required to execute a transaction on the Ethereum network, which is processed by a validator. Users must pay a fee for this computation. The '**gasLimit**' and '**maxPriorityFeePerGas**' are used to determine the maximum fee that will be paid to the validator for processing the transaction. 

If you want to understand how gas fees are calculated, refer to these [docs.](https://ethereum.org/en/developers/docs/gas/)

## Blocks

Blocks act as batches of transactions that are cryptographically linked together in a chain, ensuring the integrity of the transaction history. Each block contains a reference to the preceding block, establishing a strict sequential order. The transactions within these blocks are also strictly ordered. Any alteration to a block would invalidate all subsequent blocks due to changes in their hashes, thus preventing fraud. The [Consensus](https://ethereum.org/en/developers/docs/consensus-mechanisms/) among network participants ensures agreement on the state of the blockchain. Validators, selected randomly, assemble these blocks and propagate them throughout the network. Ethereum's [proof-of-stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) protocol governs this entire process.

![](https://photos.jussmor.com/insights/blog/From%20Confusion%20To%20Clarity%20Understanding%20Web3%20From%20A%20Developers%20Perspective/block.webp)

I hope this introductory content has been valuable. If you want to learn more, please refer to the  [ETH Docs.](https://ethereum.org/en/developers/docs/)  Special thanks to them for their amazing documentation.