import { Injectable } from '@angular/core';

declare let require: any;
declare let window: any;

const Web3 = require('../../assets/scripts/web3.min.js');

@Injectable()
export class EthereumService {
  private account: string = null;
  public web3: any;

  private contract: any;
  private contractAddress: string;

  constructor() {
    // if (typeof window.web3 !== 'undefined') {
    //   // Use Mist/MetaMask's provider
    //   this.web3 = new Web3(window.web3.currentProvider);
    //
    //   this.web3.eth.getAccounts(function (error, accounts) {
    //     return accounts[0];
    //   }).then(a => this.account = a[0]);
    //
    //   interval(2000).subscribe(() => {
    //     this.web3.eth.getAccounts(function (error, accounts) {
    //       return accounts[0];
    //     }).then(a => this.account = a[0]);
    //   });
    //
    // } else {
    //   console.warn(
    //     'Please use a dapp browser like mist or MetaMask plugin for Chrome'
    //   );
    // }
  }

  // loaded(): boolean {
  //   return this.crowdsaleContract && this.tokenContract && this.vaultContract;
  // }
  //
  // isCrowdsaleOwner(): Promise<boolean> {
  //   return this.crowdsaleContract.methods.owner().call()
  //     .then(owner => owner === this.account);
  // }
  //
  // getCurrentAccount(): string {
  //   return this.account;
  // }

  // getTokenBalance(account: string): Promise<any> {
  //   return this.tokenContract.methods.balanceOf(account).call()
  //     .then(balance => this.web3.utils.fromWei(balance, 'ether'));
  // }
}
