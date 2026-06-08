import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { accountingDescription } from './resources/accounting';
import { blockDescription } from './resources/block';
import { callDescription } from './resources/call';
import { coingeckoDescription } from './resources/coingecko';
import { delegationDescription } from './resources/delegation';
import { devActivityDescription } from './resources/dev-activity';
import { devChangelogDescription } from './resources/dev-changelog';
import { dtaoDescription } from './resources/dtao';
import { erc20Description } from './resources/erc-20';
import { convictionDescription } from './resources/conviction';
import { contractEventDescription } from './resources/contract-event';
import { eventDescription } from './resources/event';
import { evmDescription } from './resources/evm';
import { exchangeDescription } from './resources/exchange';
import { hotkeyDescription } from './resources/hotkey';
import { identityDescription } from './resources/identity';
import { liquidityDescription } from './resources/liquidity';
import { poolDescription } from './resources/pool';
import { tradesDescription } from './resources/trades';
import { metagraphDescription } from './resources/metagraph';
import { validatorDescription } from './resources/validator';
import { extrinsicDescription } from './resources/extrinsic';
import { minerDescription } from './resources/miner';
import { networkParameterDescription } from './resources/network-parameter';
import { neuronDescription } from './resources/neuron';
import { otcDescription } from './resources/otc';
import { coldkeySwapDescription } from './resources/coldkey-swap';
import { priceDescription } from './resources/price';
import { proxyCallDescription } from './resources/proxy-call';
import { liveDescription } from './resources/live';
import { rpcDescription } from './resources/rpc';
import { runtimeVersionDescription } from './resources/runtime-version';
import { sealBlobDescription } from './resources/seal-blob';
import { stakeBalanceDescription } from './resources/stake-balance';
import { statsDescription } from './resources/stats';
import { statusDescription } from './resources/status';
import { subnetDescription } from './resources/subnet';
import { transferDescription } from './resources/transfer';

export class Taostats implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'taostats',
		name: 'N8nDevTaostats',
		icon: { light: 'file:./taostats.png', dark: 'file:./taostats.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'TaoStats official Bittensor block explorer and analytics platform for staking portfolio tracking and subnet discovery',
		defaults: { name: 'taostats' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTaostatsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": "Account related endpoints"
				},
				{
					"name": "Accounting",
					"value": "Accounting",
					"description": "Accounting related endpoints"
				},
				{
					"name": "Block",
					"value": "Block",
					"description": "Block related endpoints"
				},
				{
					"name": "Call",
					"value": "Call",
					"description": "Call related endpoints"
				},
				{
					"name": "Coingecko",
					"value": "Coingecko",
					"description": ""
				},
				{
					"name": "Delegation",
					"value": "Delegation",
					"description": "Delegation related endpoints"
				},
				{
					"name": "Dev Activity",
					"value": "Dev Activity",
					"description": "Developer activity related endpoints"
				},
				{
					"name": "Dev Changelog",
					"value": "Dev Changelog",
					"description": "Developer changelog endpoints"
				},
				{
					"name": "Dtao",
					"value": "Dtao",
					"description": "dTao related endpoints"
				},
				{
					"name": "Erc 20",
					"value": "Erc 20",
					"description": "ERC20 related endpoints"
				},
				{
					"name": "Conviction",
					"value": "Conviction",
					"description": "Conviction lock related endpoints"
				},
				{
					"name": "Contract Event",
					"value": "Contract Event",
					"description": "Contract event related endpoints"
				},
				{
					"name": "Event",
					"value": "Event",
					"description": "Event related endpoints"
				},
				{
					"name": "Evm",
					"value": "Evm",
					"description": "EVM related endpoints"
				},
				{
					"name": "Exchange",
					"value": "Exchange",
					"description": "Exchange related endpoints"
				},
				{
					"name": "Hotkey",
					"value": "Hotkey",
					"description": "Hotkey related endpoints"
				},
				{
					"name": "Identity",
					"value": "Identity",
					"description": "Identity related endpoints"
				},
				{
					"name": "Liquidity",
					"value": "Liquidity",
					"description": "Liquidity related endpoints"
				},
				{
					"name": "Pool",
					"value": "Pool",
					"description": "pool related endpoints"
				},
				{
					"name": "Trades",
					"value": "Trades",
					"description": ""
				},
				{
					"name": "Metagraph",
					"value": "Metagraph",
					"description": "Metagraph related endpoints"
				},
				{
					"name": "Validator",
					"value": "Validator",
					"description": "Validator related endpoints"
				},
				{
					"name": "Extrinsic",
					"value": "Extrinsic",
					"description": ""
				},
				{
					"name": "Miner",
					"value": "Miner",
					"description": "Miner related endpoints"
				},
				{
					"name": "Network Parameter",
					"value": "Network Parameter",
					"description": ""
				},
				{
					"name": "Neuron",
					"value": "Neuron",
					"description": ""
				},
				{
					"name": "Otc",
					"value": "Otc",
					"description": "OTC related endpoints"
				},
				{
					"name": "Coldkey Swap",
					"value": "Coldkey Swap",
					"description": ""
				},
				{
					"name": "Price",
					"value": "Price",
					"description": ""
				},
				{
					"name": "Proxy Call",
					"value": "Proxy Call",
					"description": ""
				},
				{
					"name": "Live",
					"value": "Live",
					"description": "Sidecar related endpoints"
				},
				{
					"name": "Rpc",
					"value": "Rpc",
					"description": "RPC related endpoints"
				},
				{
					"name": "Runtime Version",
					"value": "Runtime Version",
					"description": "Runtime version related endpoints"
				},
				{
					"name": "Seal Blob",
					"value": "Seal Blob",
					"description": "Seal blob encryption endpoints"
				},
				{
					"name": "Stake Balance",
					"value": "Stake Balance",
					"description": "Stake balance related endpoints"
				},
				{
					"name": "Stats",
					"value": "Stats",
					"description": "Stats related endpoints"
				},
				{
					"name": "Status",
					"value": "Status",
					"description": "Status related endpoints"
				},
				{
					"name": "Subnet",
					"value": "Subnet",
					"description": "Subnet related endpoints"
				},
				{
					"name": "Transfer",
					"value": "Transfer",
					"description": "Transfer related endpoints"
				}
			],
			"default": ""
		},
		...accountDescription,
		...accountingDescription,
		...blockDescription,
		...callDescription,
		...coingeckoDescription,
		...delegationDescription,
		...devActivityDescription,
		...devChangelogDescription,
		...dtaoDescription,
		...erc20Description,
		...convictionDescription,
		...contractEventDescription,
		...eventDescription,
		...evmDescription,
		...exchangeDescription,
		...hotkeyDescription,
		...identityDescription,
		...liquidityDescription,
		...poolDescription,
		...tradesDescription,
		...metagraphDescription,
		...validatorDescription,
		...extrinsicDescription,
		...minerDescription,
		...networkParameterDescription,
		...neuronDescription,
		...otcDescription,
		...coldkeySwapDescription,
		...priceDescription,
		...proxyCallDescription,
		...liveDescription,
		...rpcDescription,
		...runtimeVersionDescription,
		...sealBlobDescription,
		...stakeBalanceDescription,
		...statsDescription,
		...statusDescription,
		...subnetDescription,
		...transferDescription
		],
	};
}
