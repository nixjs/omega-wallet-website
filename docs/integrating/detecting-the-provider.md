---
sidebar_position: 1
---

# Detecting the Provider

To detect if a user has already installed Omega Wallet, a web application should check for the existence of a `omega` object. Nix MOVE's browser extension and mobile in-app browser will both inject a `omega` object into the window of any web application the user visits, provided that site is using `https://`, on `localhost`, or is `127.0.0.1`.

If a `omega` object exists, Aptos/SUI apps can interact with Aptos/SUI via the API found at `window.omega`. This `omega` object is also available at `window.omega` to support legacy integrations.

To detect if Omega Wallet is installed, an application should check for an additional `isOmega` flag.

```javascript
window.omega?.isOmega: boolean
```
