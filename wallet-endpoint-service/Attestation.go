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
const StoreABI = "[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"attestations\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"email\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"phone\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"verified\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"relationship\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"credentials\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getAttestation\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"email\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"phone\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"verified\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"relationship\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"credentials\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_email\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_phone\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_verified\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"_realtionship\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_credentials\",\"type\":\"string\"}],\"name\":\"setAttestion\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"

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

// Attestations is a free data retrieval call binding the contract method 0x01daf26b.
//
// Solidity: function attestations(uint256 ) constant returns(address owner, string name, string email, string phone, bool verified, string relationship, string credentials)
func (_Store *StoreCaller) Attestations(opts *bind.CallOpts, arg0 *big.Int) (struct {
	Owner        common.Address
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Relationship string
	Credentials  string
}, error) {
	ret := new(struct {
		Owner        common.Address
		Name         string
		Email        string
		Phone        string
		Verified     bool
		Relationship string
		Credentials  string
	})
	out := ret
	err := _Store.contract.Call(opts, out, "attestations", arg0)
	return *ret, err
}

// Attestations is a free data retrieval call binding the contract method 0x01daf26b.
//
// Solidity: function attestations(uint256 ) constant returns(address owner, string name, string email, string phone, bool verified, string relationship, string credentials)
func (_Store *StoreSession) Attestations(arg0 *big.Int) (struct {
	Owner        common.Address
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Relationship string
	Credentials  string
}, error) {
	return _Store.Contract.Attestations(&_Store.CallOpts, arg0)
}

// Attestations is a free data retrieval call binding the contract method 0x01daf26b.
//
// Solidity: function attestations(uint256 ) constant returns(address owner, string name, string email, string phone, bool verified, string relationship, string credentials)
func (_Store *StoreCallerSession) Attestations(arg0 *big.Int) (struct {
	Owner        common.Address
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Relationship string
	Credentials  string
}, error) {
	return _Store.Contract.Attestations(&_Store.CallOpts, arg0)
}

// GetAttestation is a free data retrieval call binding the contract method 0x29be4db2.
//
// Solidity: function getAttestation(uint256 _index) constant returns(string name, string email, string phone, bool verified, address owner, string relationship, string credentials)
func (_Store *StoreCaller) GetAttestation(opts *bind.CallOpts, _index *big.Int) (struct {
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Owner        common.Address
	Relationship string
	Credentials  string
}, error) {
	ret := new(struct {
		Name         string
		Email        string
		Phone        string
		Verified     bool
		Owner        common.Address
		Relationship string
		Credentials  string
	})
	out := ret
	err := _Store.contract.Call(opts, out, "getAttestation", _index)
	return *ret, err
}

// GetAttestation is a free data retrieval call binding the contract method 0x29be4db2.
//
// Solidity: function getAttestation(uint256 _index) constant returns(string name, string email, string phone, bool verified, address owner, string relationship, string credentials)
func (_Store *StoreSession) GetAttestation(_index *big.Int) (struct {
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Owner        common.Address
	Relationship string
	Credentials  string
}, error) {
	return _Store.Contract.GetAttestation(&_Store.CallOpts, _index)
}

// GetAttestation is a free data retrieval call binding the contract method 0x29be4db2.
//
// Solidity: function getAttestation(uint256 _index) constant returns(string name, string email, string phone, bool verified, address owner, string relationship, string credentials)
func (_Store *StoreCallerSession) GetAttestation(_index *big.Int) (struct {
	Name         string
	Email        string
	Phone        string
	Verified     bool
	Owner        common.Address
	Relationship string
	Credentials  string
}, error) {
	return _Store.Contract.GetAttestation(&_Store.CallOpts, _index)
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

// SetAttestion is a paid mutator transaction binding the contract method 0x6a12bc2a.
//
// Solidity: function setAttestion(string _name, string _email, string _phone, bool _verified, string _realtionship, string _credentials) returns()
func (_Store *StoreTransactor) SetAttestion(opts *bind.TransactOpts, _name string, _email string, _phone string, _verified bool, _realtionship string, _credentials string) (*types.Transaction, error) {
	return _Store.contract.Transact(opts, "setAttestion", _name, _email, _phone, _verified, _realtionship, _credentials)
}

// SetAttestion is a paid mutator transaction binding the contract method 0x6a12bc2a.
//
// Solidity: function setAttestion(string _name, string _email, string _phone, bool _verified, string _realtionship, string _credentials) returns()
func (_Store *StoreSession) SetAttestion(_name string, _email string, _phone string, _verified bool, _realtionship string, _credentials string) (*types.Transaction, error) {
	return _Store.Contract.SetAttestion(&_Store.TransactOpts, _name, _email, _phone, _verified, _realtionship, _credentials)
}

// SetAttestion is a paid mutator transaction binding the contract method 0x6a12bc2a.
//
// Solidity: function setAttestion(string _name, string _email, string _phone, bool _verified, string _realtionship, string _credentials) returns()
func (_Store *StoreTransactorSession) SetAttestion(_name string, _email string, _phone string, _verified bool, _realtionship string, _credentials string) (*types.Transaction, error) {
	return _Store.Contract.SetAttestion(&_Store.TransactOpts, _name, _email, _phone, _verified, _realtionship, _credentials)
}
