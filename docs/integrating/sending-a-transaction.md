---
sidebar_position: 1
---

# Send a Transaction

A web app can also request the user to send a transaction, by using Omega Wallet API:

## Interface

```typescript
export namespace DappTypes {
    export interface TransferCoinTransaction {
        amount: string
        assetId: string
        to: string
        gasLimit?: string
        gasPrice?: string
    }
    export interface TransferNFTTransaction {
        to: string
        NFT: AssetTypes.NFT
        gasLimit?: string
        gasPrice?: string
    }
    export interface RegisterAssetTransaction {
        assetId: string
    }
    export interface CreateCollectionTransaction {
        // Coming soon
    }
    export interface CreateNFTTransaction {}
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
}
```

### transfer_coin

```typescript
await window.omega.signTransaction({
    type: 'transfer_coin',
    data: {
        amount: '1',
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
        to: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
    },
})
```

### register_asset

```typescript
await window.omega.signTransaction({
    type: 'register_asset',
    data: {
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>'
    },
})
```

### transfer_nft

```typescript
await window.omega.signTransaction({
    type: 'transfer_nft',
    data: {
            NFT: {
            collection: 'Collection',
            id: '0x8e11ce8',
            name: 'NFT',
            description: 'This is a NFT',
            creator: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
            uri: 'https://www.omega-wallet.app/img/omega-dark.svg'
        }
    },
})
```

### create_collection

Coming soon

### create_nft

Coming soon
