import type { INodeProperties } from 'n8n-workflow';

export const evmDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Evm"
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
							"url": "=/api/evm/address_from_ss58/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/evm/address_from_ss58/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Evm"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Ss 58 Address",
			"name": "ss58_address",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ss58_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Evm"
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
						"Evm"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
