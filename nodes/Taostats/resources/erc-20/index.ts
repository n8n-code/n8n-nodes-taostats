import type { INodeProperties } from 'n8n-workflow';

export const erc20Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					]
				}
			},
			"options": [
				{
					"name": "v1",
					"value": "v1",
					"action": "v1",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/evm/erc20/account/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/evm/erc20/account/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Token Name",
			"name": "token_name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Token Symbol",
			"name": "token_symbol",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token_symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Token Address",
			"name": "token_address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Balance Min",
			"name": "balance_min",
			"description": "Minimum balance (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "balance_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Balance Max",
			"name": "balance_max",
			"description": "Maximum balance (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "balance_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Erc 20"
					],
					"operation": [
						"v1"
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
						"Erc 20"
					],
					"operation": [
						"v1"
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
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"default": "last_active_block_number_asc",
			"type": "options",
			"options": [
				{
					"name": "Last Active Block Number Asc",
					"value": "last_active_block_number_asc"
				},
				{
					"name": "Last Active Block Number Desc",
					"value": "last_active_block_number_desc"
				},
				{
					"name": "Last Active Timestamp Asc",
					"value": "last_active_timestamp_asc"
				},
				{
					"name": "Last Active Timestamp Desc",
					"value": "last_active_timestamp_desc"
				},
				{
					"name": "First Active Block Number Asc",
					"value": "first_active_block_number_asc"
				},
				{
					"name": "First Active Block Number Desc",
					"value": "first_active_block_number_desc"
				},
				{
					"name": "First Active Timestamp Asc",
					"value": "first_active_timestamp_asc"
				},
				{
					"name": "First Active Timestamp Desc",
					"value": "first_active_timestamp_desc"
				},
				{
					"name": "Balance Asc",
					"value": "balance_asc"
				},
				{
					"name": "Balance Desc",
					"value": "balance_desc"
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
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
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
						"Erc 20"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
