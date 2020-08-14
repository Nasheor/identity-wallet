// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package main

import (
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = abi.U256
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// StoreABI is the input ABI used to generate the binding from.
const StoreABI = "[{\"inputs\":[],\"name\":\"getCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getToken\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"token_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"file_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"file_address\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"credential_data\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"timestamp\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"revokeToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_token_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_file_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_file_address\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_credential_data\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_timestamp\",\"type\":\"string\"}],\"name\":\"setToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"token_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"file_hash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"file_address\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"credential_data\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"timestamp\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"

// Store is an auto generated Go binding around an Ethereum contract.
type Store struct {
	StoreCaller     // Read-only binding to the contract
	StoreTransactor // Write-only binding to the contract
	StoreFilterer   // Log filterer for contract events
}

// StoreCaller is an auto generated read-only Go binding around an Ethereum contract.
type StoreCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// StoreTransactor is an auto generated write-only Go binding around an Ethereum contract.
type StoreTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// StoreFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type StoreFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// StoreSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type StoreSession struct {
	Contract     *Store            // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// StoreCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type StoreCallerSession struct {
	Contract *StoreCaller  // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts // Call options to use throughout this session
}

// StoreTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type StoreTransactorSession struct {
	Contract     *StoreTransactor  // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// StoreRaw is an auto generated low-level Go binding around an Ethereum contract.
type StoreRaw struct {
	Contract *Store // Generic contract binding to access the raw methods on
}

// StoreCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type StoreCallerRaw struct {
	Contract *StoreCaller // Generic read-only contract binding to access the raw methods on
}

// StoreTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type StoreTransactorRaw struct {
	Contract *StoreTransactor // Generic write-only contract binding to access the raw methods on
}

// NewStore creates a new instance of Store, bound to a specific deployed contract.
func NewStore(address common.Address, backend bind.ContractBackend) (*Store, error) {
	contract, err := bindStore(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &Store{StoreCaller: StoreCaller{contract: contract}, StoreTransactor: StoreTransactor{contract: contract}, StoreFilterer: StoreFilterer{contract: contract}}, nil
}

// NewStoreCaller creates a new read-only instance of Store, bound to a specific deployed contract.
func NewStoreCaller(address common.Address, caller bind.ContractCaller) (*StoreCaller, error) {
	contract, err := bindStore(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &StoreCaller{contract: contract}, nil
}

// NewStoreTransactor creates a new write-only instance of Store, bound to a specific deployed contract.
func NewStoreTransactor(address common.Address, transactor bind.ContractTransactor) (*StoreTransactor, error) {
	contract, err := bindStore(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &StoreTransactor{contract: contract}, nil
}

// NewStoreFilterer creates a new log filterer instance of Store, bound to a specific deployed contract.
func NewStoreFilterer(address common.Address, filterer bind.ContractFilterer) (*StoreFilterer, error) {
	contract, err := bindStore(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &StoreFilterer{contract: contract}, nil
}

// bindStore binds a generic wrapper to an already deployed contract.
func bindStore(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(StoreABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Store *StoreRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Store.Contract.StoreCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Store *StoreRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Store.Contract.StoreTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Store *StoreRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Store.Contract.StoreTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Store *StoreCallerRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Store.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Store *StoreTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Store.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Store *StoreTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Store.Contract.contract.Transact(opts, method, params...)
}

// GetCounter is a free data retrieval call binding the contract method 0x8ada066e.
//
// Solidity: function getCounter() constant returns(uint256)
func (_Store *StoreCaller) GetCounter(opts *bind.CallOpts) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Store.contract.Call(opts, out, "getCounter")
	return *ret0, err
}

// GetCounter is a free data retrieval call binding the contract method 0x8ada066e.
//
// Solidity: function getCounter() constant returns(uint256)
func (_Store *StoreSession) GetCounter() (*big.Int, error) {
	return _Store.Contract.GetCounter(&_Store.CallOpts)
}

// GetCounter is a free data retrieval call binding the contract method 0x8ada066e.
//
// Solidity: function getCounter() constant returns(uint256)
func (_Store *StoreCallerSession) GetCounter() (*big.Int, error) {
	return _Store.Contract.GetCounter(&_Store.CallOpts)
}

// GetToken is a free data retrieval call binding the contract method 0xe4b50cb8.
//
// Solidity: function getToken(uint256 _index) constant returns(string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreCaller) GetToken(opts *bind.CallOpts, _index *big.Int) (struct {
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	ret := new(struct {
		Name           string
		TokenHash      string
		FileHash       string
		FileAddress    string
		CredentialData string
		Timestamp      string
		Active         bool
	})
	out := ret
	err := _Store.contract.Call(opts, out, "getToken", _index)
	return *ret, err
}

// GetToken is a free data retrieval call binding the contract method 0xe4b50cb8.
//
// Solidity: function getToken(uint256 _index) constant returns(string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreSession) GetToken(_index *big.Int) (struct {
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	return _Store.Contract.GetToken(&_Store.CallOpts, _index)
}

// GetToken is a free data retrieval call binding the contract method 0xe4b50cb8.
//
// Solidity: function getToken(uint256 _index) constant returns(string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreCallerSession) GetToken(_index *big.Int) (struct {
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	return _Store.Contract.GetToken(&_Store.CallOpts, _index)
}

// Tokens is a free data retrieval call binding the contract method 0x4f64b2be.
//
// Solidity: function tokens(uint256 ) constant returns(address owner, string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreCaller) Tokens(opts *bind.CallOpts, arg0 *big.Int) (struct {
	Owner          common.Address
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	ret := new(struct {
		Owner          common.Address
		Name           string
		TokenHash      string
		FileHash       string
		FileAddress    string
		CredentialData string
		Timestamp      string
		Active         bool
	})
	out := ret
	err := _Store.contract.Call(opts, out, "tokens", arg0)
	return *ret, err
}

// Tokens is a free data retrieval call binding the contract method 0x4f64b2be.
//
// Solidity: function tokens(uint256 ) constant returns(address owner, string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreSession) Tokens(arg0 *big.Int) (struct {
	Owner          common.Address
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	return _Store.Contract.Tokens(&_Store.CallOpts, arg0)
}

// Tokens is a free data retrieval call binding the contract method 0x4f64b2be.
//
// Solidity: function tokens(uint256 ) constant returns(address owner, string name, string token_hash, string file_hash, string file_address, string credential_data, string timestamp, bool active)
func (_Store *StoreCallerSession) Tokens(arg0 *big.Int) (struct {
	Owner          common.Address
	Name           string
	TokenHash      string
	FileHash       string
	FileAddress    string
	CredentialData string
	Timestamp      string
	Active         bool
}, error) {
	return _Store.Contract.Tokens(&_Store.CallOpts, arg0)
}

// RevokeToken is a paid mutator transaction binding the contract method 0x7dc9e79b.
//
// Solidity: function revokeToken(uint256 _index) returns()
func (_Store *StoreTransactor) RevokeToken(opts *bind.TransactOpts, _index *big.Int) (*types.Transaction, error) {
	return _Store.contract.Transact(opts, "revokeToken", _index)
}

// RevokeToken is a paid mutator transaction binding the contract method 0x7dc9e79b.
//
// Solidity: function revokeToken(uint256 _index) returns()
func (_Store *StoreSession) RevokeToken(_index *big.Int) (*types.Transaction, error) {
	return _Store.Contract.RevokeToken(&_Store.TransactOpts, _index)
}

// RevokeToken is a paid mutator transaction binding the contract method 0x7dc9e79b.
//
// Solidity: function revokeToken(uint256 _index) returns()
func (_Store *StoreTransactorSession) RevokeToken(_index *big.Int) (*types.Transaction, error) {
	return _Store.Contract.RevokeToken(&_Store.TransactOpts, _index)
}

// SetToken is a paid mutator transaction binding the contract method 0xd3104ba5.
//
// Solidity: function setToken(string _name, string _token_hash, string _file_hash, string _file_address, string _credential_data, string _timestamp) returns()
func (_Store *StoreTransactor) SetToken(opts *bind.TransactOpts, _name string, _token_hash string, _file_hash string, _file_address string, _credential_data string, _timestamp string) (*types.Transaction, error) {
	return _Store.contract.Transact(opts, "setToken", _name, _token_hash, _file_hash, _file_address, _credential_data, _timestamp)
}

// SetToken is a paid mutator transaction binding the contract method 0xd3104ba5.
//
// Solidity: function setToken(string _name, string _token_hash, string _file_hash, string _file_address, string _credential_data, string _timestamp) returns()
func (_Store *StoreSession) SetToken(_name string, _token_hash string, _file_hash string, _file_address string, _credential_data string, _timestamp string) (*types.Transaction, error) {
	return _Store.Contract.SetToken(&_Store.TransactOpts, _name, _token_hash, _file_hash, _file_address, _credential_data, _timestamp)
}

// SetToken is a paid mutator transaction binding the contract method 0xd3104ba5.
//
// Solidity: function setToken(string _name, string _token_hash, string _file_hash, string _file_address, string _credential_data, string _timestamp) returns()
func (_Store *StoreTransactorSession) SetToken(_name string, _token_hash string, _file_hash string, _file_address string, _credential_data string, _timestamp string) (*types.Transaction, error) {
	return _Store.Contract.SetToken(&_Store.TransactOpts, _name, _token_hash, _file_hash, _file_address, _credential_data, _timestamp)
}
