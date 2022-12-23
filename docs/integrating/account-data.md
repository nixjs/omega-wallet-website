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
        type: 'testnet' | 'mainnet' | 'devnet'
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
        type: 'testnet' | 'mainnet' | 'devnet'
    }[]>
```

## getBalance

```javascript
await window.omega.getBalance(): Promise<{
        amount: string
    }>
```

## getBalances

```javascript
await window.omega.getBalances(): Promise<Array<{
        amount: string
        assetId: string
    }>>
```

## getAsset

```javascript
await window.omega.getAsset(): Promise<{
        data: AssetTypes.Asset[],
        version: number
    }>
```

