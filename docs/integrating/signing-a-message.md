---
sidebar_position: 1
---

# Signing a Message

A web app can also request the user to sign a message, by using Omega Wallet API:

```javascript
await window.omega.sign(message: string): Promise<{signature: HexString}>
```
