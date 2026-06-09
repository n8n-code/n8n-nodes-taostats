import type { INodeProperties } from 'n8n-workflow';

export const accountingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
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
							"url": "=/api/accounting/coldkey_report/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/accounting/coldkey_report/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"required": true,
			"description": "Start of date range in YYYY-MM-DD format (inclusive)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Date End",
			"name": "date_end",
			"required": true,
			"description": "End of date range in YYYY-MM-DD format (inclusive). Must be within 12 calendar months of date_start.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
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
			"required": true,
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
						"Accounting"
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
						"Accounting"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
