---
sidebar_position: 1
---

# Detecting the Provider

To detect if a user has already installed Omega Wallet, a web application should check for the existence of a `omega` object. Omega's browser extension and mobile in-app browser will both inject a `omega` object into the window of any web application the user visits, provided that site is using `https://`, on `localhost`, or is `127.0.0.1`.

If a `omega` object exists, Dapps can interact with Aptos/SUI/Ethereum via the API found at `window.omega`. This `omega` object is also available at `window.omega` to support legacy integrations.

If Omega wallet is not installed, we recommend you redirect your users to our website. Altogether, this may look like the following.

```javascript
const getProvider = () => {
  if ("omega" in window) {
    return(window.omega);
  }
  window.open("https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak", "_blank");
};
```