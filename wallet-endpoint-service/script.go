package main

import (
	"log"
	"fmt"
	"context"
    "github.com/ethereum/go-ethereum/common"
    "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
	client, err := ethclient.Dial("http://localhost:7545")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("We have a connection")
	address  := common.HexToAddress("0x36F51940843A3d3e871402B063428C081ca845D9")
	bytecode, err := client.CodeAt(context.Background(), address, nil)
	instance, err := store.NewStore(address, client)
	
	if err != nil {
		log.Fatal(err)
	}

	isContract := len(bytecode) > 0
	fmt.Printf(instance)
	fmt.Printf("Is Contract: %v\n", isContract)


}

