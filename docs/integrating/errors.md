---
sidebar_position: 1
---

# Errors

When making requests to Omega Wallet in Establishing a Connection, Sending a Transaction, or Signing a Message, Omega Wallet may respond with an error. The following is a list of all possible error codes and their meanings.

|    Code     | Title                  | Description                             |
| :---------: | :--------------------- | :-------------------------------------- |
| `10010000`  | `AN_ERROR_OCCURRED`    | An error occurred                       |
| `10010001`  | `LOGIN_REJECT`         | User rejected login request             |
| `10010002`  | `SIGN_REJECT`          | User rejected sign transaction request  |
| `10010003`  | `PERSONAL_SIGN_REJECT` | User rejected the personal sign request |
| `10010004`  | `DISCONNECT_REJECT`    | User rejected disconnect                |
| `10010005`  | `CONNECT_REJECT`       | User rejected connect                   |
| `10010006`  | `GET_PROVIDER_FAILED`  | Failed to get provider                  |
| `10010007`  | `GET_NETWORKS_FAILED`  | Failed to get networks                  |
| `10010008`  | `GET_NETWORK_FAILED`   | Failed to get network                   |
| `10010009`  | `GET_ACCOUNTS_FAILED`  | Failed to get accounts                  |
| `10010010`  | `GET_ACCOUNT_FAILED`   | Failed to get account                   |
| `100100011` | `CONNECT_FAILED`       | Failed to connect wallet                |
| `100100012` | `DISCONNECT_FAILED`    | Failed to disconnect wallet             |
| `100100013` | `SIGN_FAILED`          | Failed to sign transaction              |
| `100100014` | `PERSONAL_SIGN_FAILED` | Failed to sign message                  |
| `100100015` | `GET_BALANCE_FAILED`   | Failed to get balance                   |
| `100100016` | `GET_BALANCE_FAILED`   | Failed to get balances                  |
| `100100017` | `GET_ASSET_FAILED`     | Failed to get asset                     |
| `100100031` | `PROVIDER_NOT_FOUND`   | Failed to get provider (blockchain type)|
| `100100032` | `INVALID_PARAMETERS`   | Invalid parameters                      |

Typically, these errors will be easily parsable and have both a code and an explanation. For example:

```javascript
try {
  await window.omega.getAccount();
} catch (err) {
  //    {code: 10010001, message: 'User rejected login request'}
}
```
