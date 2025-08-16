---
title: How to perform Json-RPC calls to the Ethereum Blockchain.
description: Transform from confusion to clarity in Web3 development with this practical guide. Learn Ethereum fundamentals—from decentralization, nodes, accounts, transactions, gas, to smart contracts—and gain the confidence to build blockchain apps.
date: 2024-05-14
tags:
  - crypto
seoImage: https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./ethereum-rpc.webp
---

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./ethereum-rpc.webp)


If you find yourself lacking the resources to directly connect to the blockchain network, fear not! You're in the right place to learn how to navigate this space effectively. 

In this blog, you are going to learn: 

- What is a Network? 
- How to find  **RPC Server Addresses** and their types. 
- How to use Postman to make JSON-RPC requests to a Blockchain Network
## What Is A Network?

Ethereum operates as a decentralized network, comprising a global consortium of computers, also known as nodes. These nodes collectively maintain a shared database and execute smart contracts. Here’s a breakdown of the types of networks in Ethereum: 

1. **Mainnet**: The Ethereum mainnet is the live, operational network where actual transactions and smart contracts are executed. It serves as the primary platform for users to interact with Ethereum’s native cryptocurrency, Ether (ETH), and to deploy decentralized applications (DApps). 

2. **Testnets**: Testnets are separate Ethereum networks designated for testing. They enable developers to experiment with smart contracts and DApps without spending real Ether or facing real-world consequences. Notable examples include the Ropsten, Rinkeby, and Goerli testnets. 

3. **Private or Consortium Networks**: These are Ethereum-based networks that operate privately and are not open to the general public. They are typically utilized by organizations or consortia for proprietary blockchain solutions. Only known and trusted entities participate, with access restricted to approved members. An example of a permissioned Ethereum network is Quorum, developed by J.P. Morgan. 

4. **Sidechains**: Sidechains are independent blockchains that are interoperable with the Ethereum mainnet. They are employed to alleviate transaction loads from the mainnet, enhance scalability, or add specific features. Projects like Polygon (formerly Matic Network) provide sidechain solutions to Ethereum, offering faster and cheaper transactions. 

Each network type fulfills distinct roles within the Ethereum ecosystem, addressing diverse development, testing, and operational needs.
## List Of EVM Networks.

[ChainList](https://chainlist.org/?search=&testnets=false) acts as a repository where you can find various EVM networks.

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./chainlist.webp)

Here, you can find various networks with the option to include or exclude TestNets.

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./chainlist-eth.webp)

When you click over a Network, in this case, The Ethereum Mainet; a list of RPC Server Addresses is displayed. 
## Using Postman To Test Json-RPC Request

- Open Postman or any Rest Client. 
- Choose an RPC server address.

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./rpc.png)

- Refer to the [Json-RPC Docs](https://ethereum.org/en/developers/docs/apis/json-rpc/#web3_clientversion) documentation. In our case, we are going to use the method web3_clientVersion, which returns the current client version.

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./rpc-body.png)

- Now, when you press 'Send', you will receive the response.

![](https://photos.jussmor.com/insights/blog/How%20To%20Perform%20Json-RPC%20Calls%20To%20The%20Ethereum%20Blockchain./rpc-call.webp)

Great! You now have the ability to connect to an Ethereum network and perform direct calls. This is your time to explore further—read the documentation and conduct more experiments. I recommend using the Testnets for practice.
