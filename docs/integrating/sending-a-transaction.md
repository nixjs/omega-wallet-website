---
sidebar_position: 1
---

# Send a Transaction

A web app can also request the user to send a transaction, by using Omega Wallet API:

```javascript
export type TypeRequest = 'transfer_coin' | 'transfer_nft' | 'register_asset' | 'create_collection' | 'create_nft'
export type SignTransactionRequest =
    | {
          type: 'transfer_coin'
          data: TransferCoinTransaction
      }
    | {
          type: 'transfer_nft'
          data: TransferNFTTransaction
      }
    | {
          type: 'register_asset'
          data: RegisterAssetTransaction
      }
    | {
          type: 'create_collection'
          data: CreateCollectionTransaction
      }
    | {
          type: 'create_nft'
          data: CreateNFTTransaction
      }

await (window as any). omega.signTransaction({
    type: 'transfer_coin',
    data: {
        amount: '1',
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
        to: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
    },
})
```
