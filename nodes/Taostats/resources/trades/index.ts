import type { INodeProperties } from 'n8n-workflow';

export const tradesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
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
							"url": "=/api/dtao/trade/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dtao/trade/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Coldkey",
			"name": "coldkey",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "coldkey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Extrinsic ID",
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
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "From Name",
			"name": "from_name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "To Name",
			"name": "to_name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "to_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Tao Value Min",
			"name": "tao_value_min",
			"description": "Minimum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tao_value_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Tao Value Max",
			"name": "tao_value_max",
			"description": "Maximum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tao_value_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Usd Value Min",
			"name": "usd_value_min",
			"description": "Minimum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usd_value_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Usd Value Max",
			"name": "usd_value_max",
			"description": "Maximum amount (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usd_value_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trades"
					],
					"operation": [
						"v1"
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
						"Trades"
					],
					"operation": [
						"v1"
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
						"Trades"
					],
					"operation": [
						"v1"
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
						"Trades"
					],
					"operation": [
						"v1"
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
						"Trades"
					],
					"operation": [
						"v1"
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
						"Trades"
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
						"Trades"
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
						"Trades"
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
			"default": "block_number_asc",
			"type": "options",
			"options": [
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
					"name": "From Amount Asc",
					"value": "from_amount_asc"
				},
				{
					"name": "From Amount Desc",
					"value": "from_amount_desc"
				},
				{
					"name": "To Amount Asc",
					"value": "to_amount_asc"
				},
				{
					"name": "To Amount Desc",
					"value": "to_amount_desc"
				},
				{
					"name": "Tao Value Asc",
					"value": "tao_value_asc"
				},
				{
					"name": "Tao Value Desc",
					"value": "tao_value_desc"
				},
				{
					"name": "Usd Value Asc",
					"value": "usd_value_asc"
				},
				{
					"name": "Usd Value Desc",
					"value": "usd_value_desc"
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
						"Trades"
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
						"Trades"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
