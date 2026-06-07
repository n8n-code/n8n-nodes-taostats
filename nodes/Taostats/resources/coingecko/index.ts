import type { INodeProperties } from 'n8n-workflow';

export const coingeckoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Coingecko"
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
							"url": "=/api/coingecko/asset"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/coingecko/asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Coingecko"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "integer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Coingecko"
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
						"Coingecko"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
];
