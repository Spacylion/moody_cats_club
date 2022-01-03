import { React } from 'react'
import Web3Connect from 'web3connect'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'

function ModalConnect() {
  return (
    <>
      <Web3Connect.Button
        network="mainnet" // optional
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: 'INFURA_ID', // required
            },
          },
        }}
        onConnect={(provider: any) => {
          const web3 = new Web3(provider) // add provider to web3
        }}
        onClose={() => {
          console.log('Web3Connect Modal Closed') // modal has closed 

          
        }}
      />
      ;
    </>
  )
}

export default ModalConnect
