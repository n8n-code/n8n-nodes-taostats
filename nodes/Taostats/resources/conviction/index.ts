import type { INodeProperties } from 'n8n-workflow';

export const convictionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conviction"
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
							"url": "=/api/conviction/history/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/conviction/history/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conviction"
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
						"Conviction"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Hotkey",
			"name": "hotkey",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hotkey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conviction"
					],
					"operation": [
						"v1"
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
						"Conviction"
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
						"Conviction"
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
						"Conviction"
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
						"Conviction"
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
						"Conviction"
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
						"Conviction"
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
						"Conviction"
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
			"default": "coldkey_asc",
			"type": "options",
			"options": [
				{
					"name": "Coldkey Asc",
					"value": "coldkey_asc"
				},
				{
					"name": "Coldkey Desc",
					"value": "coldkey_desc"
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
						"Conviction"
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
						"Conviction"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
