import type { INodeProperties } from 'n8n-workflow';

export const sealBlobDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Seal Blob"
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
							"method": "POST",
							"url": "=/api/seal_blob/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/seal_blob/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Seal Blob"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Pk Hex",
			"name": "pk_hex",
			"type": "string",
			"default": "",
			"description": "Public key in hex format",
			"routing": {
				"send": {
					"property": "pk_hex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Seal Blob"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tx Hex",
			"name": "tx_hex",
			"type": "string",
			"default": "",
			"description": "Transaction/plaintext in hex format",
			"routing": {
				"send": {
					"property": "tx_hex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Seal Blob"
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
						"Seal Blob"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
];
