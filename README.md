# @n8n-dev/n8n-nodes-taostats

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-taostats.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-taostats)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing taostats API integrations by hand.**

Every time you connect n8n to taostats, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to taostats took 5 minutes, not half a day?**

This node gives you **40+ resources** out of the box: **Account**, **Accounting**, **Block**, **Call**, **Coingecko**, and 35 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-taostats
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-taostats`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **taostats API** → paste your API key
3. Drag the **taostats** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Account | GET V 1 |
| Accounting | GET V 1 |
| Block | GET V 1 |
| Call | GET V 1 |
| Coingecko | GET V 1 |
| Delegation | GET V 1 |
| Dev Activity | GET V 1 |
| Dev Changelog | GET Get Changelog |
| Dtao | GET V 1 |
| Erc 20 | GET V 1 |
| Conviction | GET V 1 |
| Contract Event | GET V 1 |
| Event | GET V 1 |
| Evm | GET V 1 |
| Exchange | GET V 1 |
| Hotkey | GET V 1 |
| Identity | GET V 1 |
| Liquidity | GET V 1 |
| Pool | GET V 1 |
| Trades | GET V 1 |
| Metagraph | GET V 1 |
| Validator | GET V 1, POST V 1 Post, GET V 2 |
| Extrinsic | GET V 1 |
| Miner | GET V 1 |
| Network Parameter | GET V 1 |
| Neuron | GET V 1 |
| Otc | GET V 1, GET V 2 |
| Coldkey Swap | GET V 1 |
| Price | GET V 1 |
| Proxy Call | GET V 1 |
| Live | GET Account Balance Info, GET Block Get Range, GET Block Get Head, GET Block Get By Height, GET Block Raw Get By Height, GET Extrinsic Get By Block And Index, GET Pool Get, GET Version Info, GET Const Get All, GET Const Get By Id, GET Event Get All, GET Event Get By Id, GET Storage Get All, GET Storage Get By Id |
| Rpc | POST Http, GET Ws |
| Runtime Version | GET V 1 |
| Seal Blob | POST V 1 |
| Stake Balance | GET V 1 |
| Stats | GET V 1 |
| Status | GET V 1 |
| Subnet | GET V 1 |
| Transfer | GET V 1 |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from taostats docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official taostats OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **taostats** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the taostats API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
