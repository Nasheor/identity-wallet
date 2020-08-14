# Decentralized Identity Wallet
This prototype was developed as a proof of concept as to how distributed computing and decentralized storage provides an effective solution for User Identity Management and Protection on the Internet. The full research document based of which the application was built can be found in the document `Digial_Identity_Management_using_DLT.pdf`.

## Description
The aim of the Identity management solution is to build transparency and trust in an environment where the privacy of a user's data is protected and the user's control over the data in regards to who can access it and what parts of the data that the external entity can view and store. How well the blockchain solution performs in providing a truly decentralized, transparent and immutable environment.

## Architecture
![Digital Identity Management Solution](https://i.ibb.co/R6XF4L0/final-architecture.png)

## Technologies Used
1. Solidity
2. Infura
3. IPFS -libp2p 
4. Postman
5. Truffle framework - Drizzle and Ganache
6. Javascript - ES6
7. VueJS
8. Vuex
9. SCSS
10. Vuetify 
11. Golang
12. GoKit

## Setup and Running the Application
### Prequisites
1. Node Pacakage Manager
2. Truffle
3. Vue Cli
4. Metamask browser extension
5. Ganache
6. Golang

#### Step 1
After cloning this repository, open up Ganache and set up a new workspace. Now copy the path to the file `truffle-config.js` in the directory `wallet-web-app`. Paste this path in the `ganache->settings->Truffle Projects`. Save and restart ganache.

#### Step 2
Next open up the browser where `Metamask` extension has been added. Click on metamask and create a `custom RPC` network. We'll be linking Metamask to Ganache now. The ganache workspace by default is run on the localhost port 7545. Enter this URL in `New RPC URL` and give this metamask network a name. Name can be anything. For the sake of simplicity, I'm calling it `identity_wallet`. Restart metamask and switch to the network `identity_ wallet`. You'll be able to see the account information present on Ganache via Metamask.

#### Step 3
From within the `wallet-web-app` directory, run the command `npm install`. Once this finishes run the command `npm run serve`. This will open the web application on you localhost port `8090`. When you try to open this application on a browser, Metamask will autodetect this application as DApp and ask if you wish to link your metamask account with the web app. Click yes and link the account to the application. 

#### Step 4
Navigate to the directory `wallet-endpoint-service` and run the command `go get ./...`. Next run `go run *.go`. This will run the token authenticator microservice on port `8080`. 

#### Step 5
You can now login to the web app using any of the account addresses present on Ganache. 
