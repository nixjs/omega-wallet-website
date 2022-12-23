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
        | {
            kind: 'moveCall'
            data: MoveCallTransaction
        }
        | {
            kind: 'transferSui'
            data: TransferSuiTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'transferObject'
            data: TransferObjectTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'mergeCoin'
            data: MergeCoinTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'splitCoin'
            data: SplitCoinTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'pay'
            data: PayTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'paySui'
            data: PaySuiTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'payAllSui'
            data: PayAllSuiTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
        }
        | {
            kind: 'publish'
            data: PublishTransaction
            // https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts
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

### register_asset

- Kind: `register_asset`

- Types:

```typescript
    export interface RegisterAssetTransaction {
        assetId: string
    }
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

### transferSui

- Kind: `transferSui`

- Types:

```typescript
interface TransferSuiTransaction {
    suiObjectId: ObjectId;
    gasBudget: number;
    recipient: SuiAddress;
    amount: number | null;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'transferSui',
    data: {
        amount: 1,
        gasBudget: 100,
        recipient: '0x1058a41ebe92ff069b65b692e20e51874a431e8b',
        suiObjectId: '0x42ff19f3bd12855ef2809645ffbfa4b5e75d4de8'
    }
})
```

### moveCall

- Kind: `moveCall`

- Types:

```typescript
interface MoveCallTransaction {
    packageObjectId: ObjectId;
    module: string;
    function: string;
    typeArguments: string[] | TypeTag[];
    arguments: SuiJsonValue[];
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'moveCall',
    data: {
        packageObjectId: '0xxxx';
        module: 'xx',
        function: 'xx',
        typeArguments: ['xx', 'xx']
        arguments: 2,
        gasPayment: '0xxxx,
        gasBudget: 100
    }
})
```

### transferObject

- Kind: `transferObject`

- Types:

```typescript
interface TransferObjectTransaction {
    objectId: ObjectId;
    gasPayment?: ObjectId;
    gasBudget: number;
    recipient: SuiAddress;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'transferObject',
    data: {
        objectId: '0xxx',
        gasPayment: '0xxx',
        gasBudget: 100,
        recipient: '0x1058a41ebe92ff069b65b692e20e51874a431e8b'
    }
})
```

### mergeCoin

- Kind: `mergeCoin`

- Types:

```typescript
interface MergeCoinTransaction {
    primaryCoin: ObjectId;
    coinToMerge: ObjectId;
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'mergeCoin',
    data: {
        primaryCoin: '0xxx',
        coinToMerge: '0xxx',
        gasPayment: '0xxx',
        gasBudget: 100
    }
})
```

### splitCoin

- Kind: `splitCoin`

- Types:

```typescript
interface SplitCoinTransaction {
    coinObjectId: ObjectId;
    splitAmounts: number[];
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'splitCoin',
    data: {
        coinObjectId: '0xxx',
        splitAmounts: '0xxx',
        gasPayment: '0xxx',
        gasBudget: 100
    }
})
```

### pay

- Kind: `pay`

- Types:

```typescript
interface PayTransaction {
    /**
     * use `provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual` to
     * derive a minimal set of coins with combined balance greater than or
     * equal to sent amounts
     */
    inputCoins: ObjectId[];
    recipients: SuiAddress[];
    amounts: number[];
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'pay',
    data: {
        /**
         * use `provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual` to
         * derive a minimal set of coins with combined balance greater than or
         * equal to sent amounts
         */
        inputCoins: ['0xxx', '0xxx'],
        recipients: ['0xxx', '0xxx'],
        amounts: [1, 2],
        gasPayment: '0xxx',
        gasBudget: 100
    }
})
```

### paySui

- Kind: `paySui`

- Types:

```typescript
interface PaySuiTransaction {
    /**
     * use `provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual` to
     * derive a minimal set of coins with combined balance greater than or
     * equal to (sent amounts + gas budget).
     */
    inputCoins: ObjectId[];
    recipients: SuiAddress[];
    amounts: number[];
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'paySui',
    data: {
        /**
         * use `provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual` to
         * derive a minimal set of coins with combined balance greater than or
         * equal to sent amounts
         */
        inputCoins: ['0xxx', '0xxx'],
        recipients: ['0xxx', '0xxx'],
        amounts: [1, 2],
        gasBudget: 100
    }
})
```

### payAllSui

- Kind: `payAllSui`

- Types:

```typescript
interface PayAllSuiTransaction {
    inputCoins: ObjectId[];
    recipient: SuiAddress;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'payAllSui',
    data: {
        inputCoins: ['0xxx', '0xxx'],
        recipient: '0xxx',
        gasBudget: 100
    }
})
```

### publish

- Kind: `publish`

- Types:

```typescript
interface PublishTransaction {
    compiledModules: ArrayLike<string> | ArrayLike<ArrayLike<number>>;
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts>

```typescript
await window.omega.signTransaction({
    kind: 'publish',
    data: {
        compiledModules: [0,2,3,12];
        gasPayment: '0xxx',
        gasBudget: 100;
    }
})
```

## Aptos

> Only work for Aptos blockchain

### signRawTransaction

- Kind: `signRawTransaction`

- Types:

```typescript
interface PublishTransaction {
    compiledModules: ArrayLike<string> | ArrayLike<ArrayLike<number>>;
    gasPayment?: ObjectId;
    gasBudget: number;
}
```

Reference: <<https://aptos.dev/sdks/ts-sdk/index>

### signBCSTransaction

- Kind: `signBCSTransaction`

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

Reference: <https://aptos.dev/sdks/ts-sdk/index>

