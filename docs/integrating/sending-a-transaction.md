---
sidebar_position: 1
---

# Send a Transaction

After your web app is connected to Omega Wallet, the web app can prompt the user to sign and send transactions to the SUI/Aptos blockchain.

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

    export type SignTransactionRequest =
        | {
            kind: 'transfer_coin'
            data: TransferCoinTransaction
        }
        | {
            kind: 'transfer_nft'
            data: TransferNFTTransaction
        }
        | {
            kind: 'register_asset'
            data: RegisterAssetTransaction
        }
        | {
            kind: 'create_collection'
            data: CreateCollectionTransaction
        }
        | {
            kind: 'create_nft'
            data: CreateNFTTransaction
        }
        // Aptos
        | {
          kind: 'aptos_signRawTransaction'
          data: AptosRawTransaction
        }
        | {
            kind: 'aptos_signBCSTransaction'
            data: AptosBCSTransaction
        }
        | {
            kind: 'aptos_registerAsset'
            data: AptosRegisterAssetTransaction
        }
        // SUI
        | {
            kind: 'sui_simulateTransaction'
            data: string | Uint8Array
            // https://github.com/MystenLabs/sui/blob/730529bbd967548be9f5209886ee81f2b6bf09db/sdk/typescript/src/builder/TransactionBlock.ts
        }
        | {
            kind: 'sui_executeTransaction'
            data: string | Uint8Array
            // https://github.com/MystenLabs/sui/blob/730529bbd967548be9f5209886ee81f2b6bf09db/sdk/typescript/src/builder/TransactionBlock.ts
        }
    }
```

## Common

### transfer_coin

- Kind: `transfer_coin`

- Types:

```typescript
export interface TransferCoinTransaction {
    amount: string
    assetId: string
    to: string
    gasLimit?: string
    gasPrice?: string
}
```

- Example:

```typescript
await window.omega.signTransaction({
    kind: 'transfer_coin',
    data: {
        amount: '1',
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
        to: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
    },
})
```

- Example:

```typescript
await window.omega.signTransaction({
    kind: 'register_asset',
    data: {
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>'
    },
})
```

### transfer_nft

- Kind: `transfer_nft`

- Types:

```typescript
export interface TransferNFTTransaction {
    to: string
    NFT: AssetTypes.NFT
    gasLimit?: string
    gasPrice?: string
}
```

- Example:

```typescript
await window.omega.signTransaction({
    kind: 'transfer_nft',
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

- Kind: `create_collection`

Coming soon

### create_nft

- Kind: `create_nft`

Coming soon

## SUI

> Only work for SUI blockchain

### sui_simulateTransaction

Raw transaction is generated from TransactionBlock and serialized or Uint8Array

- Kind: `sui_simulateTransaction`

```typescript
await window.omega.signTransaction({
    kind: 'sui_simulateTransaction',
    data: `{"version":1,"sender":"0x3fd4598d9881475e8a930a25d45b4fef1db1cc43c711d5ab031b8f47401c3558","gasConfig":{"price":"1000","payment":[{"objectId":"0x44303b9ed9c8aa83ab170638a1975078631271c0d558d9e6b6cf3dfd268eab85","digest":"8kqcnWcPSb5hh1GWj2xg8NjpzvpbXW2GGF6FbrrHquE8","version":"22516"}],"budget":"3976000"},"inputs":[{"kind":"Input","value":{"Pure":[0,225,245,5,0,0,0,0]},"index":0,"type":"pure"},{"kind":"Input","value":{"Pure":[227,162,217,68,193,124,133,214,115,17,195,200,15,77,121,134,42,64,249,189,232,242,230,185,161,21,96,78,207,134,173,22]},"index":1,"type":"pure"}],"transactions":[{"kind":"SplitCoins","coin":{"kind":"GasCoin"},"amounts":[{"kind":"Input","value":"100000000","index":0,"type":"pure"}]},{"kind":"TransferObjects","objects":[{"kind":"Result","index":0}],"address":{"kind":"Input","value":"0xe3a2d944c17c85d67311c3c80f4d79862a40f9bde8f2e6b9a115604ecf86ad16","index":1,"type":"pure"}}]}`
})
```

Reference: [https://github.com/MystenLabs/sui/.../TransactionBlock.ts](https://github.com/MystenLabs/sui/blob/730529bbd967548be9f5209886ee81f2b6bf09db/sdk/typescript/src/builder/TransactionBlock.ts)

### sui_executeTransaction

Raw transaction is generated from TransactionBlock and serialized or Uint8Array

- Kind: `sui_executeTransaction`

```typescript
await window.omega.signTransaction({
    kind: 'sui_executeTransaction',
    data: `{"version":1,"sender":"0x3fd4598d9881475e8a930a25d45b4fef1db1cc43c711d5ab031b8f47401c3558","gasConfig":{"price":"1000","payment":[{"objectId":"0x44303b9ed9c8aa83ab170638a1975078631271c0d558d9e6b6cf3dfd268eab85","digest":"8kqcnWcPSb5hh1GWj2xg8NjpzvpbXW2GGF6FbrrHquE8","version":"22516"}],"budget":"3976000"},"inputs":[{"kind":"Input","value":{"Pure":[0,225,245,5,0,0,0,0]},"index":0,"type":"pure"},{"kind":"Input","value":{"Pure":[227,162,217,68,193,124,133,214,115,17,195,200,15,77,121,134,42,64,249,189,232,242,230,185,161,21,96,78,207,134,173,22]},"index":1,"type":"pure"}],"transactions":[{"kind":"SplitCoins","coin":{"kind":"GasCoin"},"amounts":[{"kind":"Input","value":"100000000","index":0,"type":"pure"}]},{"kind":"TransferObjects","objects":[{"kind":"Result","index":0}],"address":{"kind":"Input","value":"0xe3a2d944c17c85d67311c3c80f4d79862a40f9bde8f2e6b9a115604ecf86ad16","index":1,"type":"pure"}}]}`
})
```

Reference: [https://github.com/MystenLabs/sui/.../TransactionBlock.ts](https://github.com/MystenLabs/sui/blob/730529bbd967548be9f5209886ee81f2b6bf09db/sdk/typescript/src/builder/TransactionBlock.ts)

## Aptos

> Only work for Aptos blockchain

### aptos_signRawTransaction

- Kind: `aptos_signRawTransaction`

- Types:

```typescript
interface PublishTransaction {
    compiledModules: ArrayLike<string> | ArrayLike<ArrayLike<number>>;
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://aptos.dev/sdks/ts-sdk/index>

### aptos_signBCSTransaction

- Kind: `aptos_signBCSTransaction`

- Types:

```typescript
interface AptosOptionalRequest {
    gasUnitPrice?: string
    maxGasAmount?: string
    chainId?: number
    expireTimestamp?: string
    sequenceNumber?: string
}

interface AptosEntryPayloadRequest {
    function: string
    /**
     * Type arguments of the function
     */
    type_arguments: Array<string>
    /**
     * Arguments of the function
     */
    arguments: Array<any>
}
interface AptosBCSTransaction {
    payload: AptosEntryPayloadRequest
    optional?: AptosOptionalRequest
}
```

### aptos_registerAsset

- Kind: `aptos_registerAsset`

- Types:

```typescript
export interface AptosRegisterAsset {
    assetId: string
}
```

Reference: <https://aptos.dev/sdks/ts-sdk/index>

## Ethereum

> Only work for Ethereum blockchain

### eth_executeNativeTransaction

- Kind: `eth_executeNativeTransaction`

- Types:

```typescript
interface  ExecuteNativeTransaction` {
    raw: ethers.providers.TransactionRequest; // https://docs.ethers.org/v5/api/providers/types/#providers-TransactionRequest
    speed: GasPriceTypes
}
```

### eth_executeContractTransaction

- Kind: `eth_executeContractTransaction`

- Types:

```typescript
enum GasPriceTypes {
    SLOW = "SLOW",
    AVERAGE = "AVERAGE",
    FAST = "FAST"
}
interface  ExecuteContractTransaction {
   abi: ethers.ContractInterface // https://docs.ethers.org/v5/api/contract/
    contractAddress: PrimitiveHexString
    method: string
    args: any[]
    speed: GasPriceTypes
}
```