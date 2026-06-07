import type { INodeProperties } from 'n8n-workflow';

export const delegationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					]
				}
			},
			"options": [
				{
					"name": "V 1",
					"value": "V 1",
					"action": "V 1",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/delegation/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/delegation/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Nominator",
			"name": "nominator",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nominator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Delegate",
			"name": "delegate",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "delegate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"default": "delegate",
			"type": "options",
			"options": [
				{
					"name": "Delegate",
					"value": "delegate"
				},
				{
					"name": "Undelegate",
					"value": "undelegate"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Is Transfer",
			"name": "is_transfer",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_transfer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Transfer Address",
			"name": "transfer_address",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transfer_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Extrinsic Id",
			"name": "extrinsic_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "extrinsic_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Amount Min",
			"name": "amount_min",
			"description": "Minimum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Amount Max",
			"name": "amount_max",
			"description": "Maximum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Netuid",
			"name": "netuid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "netuid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Block Number",
			"name": "block_number",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "block_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Block Start",
			"name": "block_start",
			"description": "Start of block range (inclusive)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "block_start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Block End",
			"name": "block_end",
			"description": "End of block range (inclusive)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "block_end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Timestamp Start",
			"name": "timestamp_start",
			"description": "Start of timestamp range in Unix timestamp (seconds since 1970-01-01) (inclusive)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp_start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Timestamp End",
			"name": "timestamp_end",
			"description": "End of timestamp range in Unix timestamp (seconds since 1970-01-01) (inclusive)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp_end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"default": "amount_asc",
			"type": "options",
			"options": [
				{
					"name": "Amount Asc",
					"value": "amount_asc"
				},
				{
					"name": "Amount Desc",
					"value": "amount_desc"
				},
				{
					"name": "Block Number Asc",
					"value": "block_number_asc"
				},
				{
					"name": "Block Number Desc",
					"value": "block_number_desc"
				},
				{
					"name": "Timestamp Asc",
					"value": "timestamp_asc"
				},
				{
					"name": "Timestamp Desc",
					"value": "timestamp_desc"
				},
				{
					"name": "Action Asc",
					"value": "action_asc"
				},
				{
					"name": "Action Desc",
					"value": "action_desc"
				},
				{
					"name": "Alpha Asc",
					"value": "alpha_asc"
				},
				{
					"name": "Alpha Desc",
					"value": "alpha_desc"
				},
				{
					"name": "Usd Asc",
					"value": "usd_asc"
				},
				{
					"name": "Usd Desc",
					"value": "usd_desc"
				},
				{
					"name": "Alpha Price In Tao Asc",
					"value": "alpha_price_in_tao_asc"
				},
				{
					"name": "Alpha Price In Tao Desc",
					"value": "alpha_price_in_tao_desc"
				},
				{
					"name": "Alpha Price In Usd Asc",
					"value": "alpha_price_in_usd_asc"
				},
				{
					"name": "Alpha Price In Usd Desc",
					"value": "alpha_price_in_usd_desc"
				},
				{
					"name": "Netuid Asc",
					"value": "netuid_asc"
				},
				{
					"name": "Netuid Desc",
					"value": "netuid_desc"
				},
				{
					"name": "Slippage Asc",
					"value": "slippage_asc"
				},
				{
					"name": "Slippage Desc",
					"value": "slippage_desc"
				},
				{
					"name": "Fee Asc",
					"value": "fee_asc"
				},
				{
					"name": "Fee Desc",
					"value": "fee_desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Api Key API Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api_key (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delegation"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
];
