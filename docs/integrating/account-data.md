---
sidebar_position: 1
---

# Account Data

## getAccount

```javascript
await window.omega.getAccount(): Promise<{
        index: number
        name: string
        address: string
        derivationPath: string
        publicKey?: string
        display: boolean
    }>
```

## getAccounts

```javascript
await window.omega.getAccounts(): Promise<{
        index: number
        name: string
        address: string
        derivationPath: string
        publicKey?: string
        display: boolean
    }[]>
```

## getNetwork

```javascript
await window.omega.getNetwork(): Promise<{
        chainID: string
        name: string
        nodeURL: string
        faucetURL: string
        explorerURL: string
        nativeToken: string
        type: 'testnet' | 'mainnet' | 'Devnet'
    }>
```

## getNetworks

```javascript
await window.omega.getNetworks(): Promise<{
        chainID: string
        name: string
        nodeURL: string
        faucetURL: string
        explorerURL: string
        nativeToken: string
        type: 'testnet' | 'mainnet' | 'Devnet'
    }[]>
```

## getBalance

```javascript
await window.omega.getBalance(): Promise<{
        amount: string
    }>
```

## getAsset

```javascript
await window.omega.getAsset(): Promise<{
        data: AssetTypes.Asset[],
        version: number
    }>
```

