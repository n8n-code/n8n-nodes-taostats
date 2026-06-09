import type { INodeProperties } from 'n8n-workflow';

export const identityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity"
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
							"url": "=/api/identity/history/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/identity/history/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity"
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
			"description": "SS58 or hex format",
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
						"Identity"
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
						"Identity"
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
						"Identity"
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
						"Identity"
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
						"Identity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
