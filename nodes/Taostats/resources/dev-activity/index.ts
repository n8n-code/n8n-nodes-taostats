import type { INodeProperties } from 'n8n-workflow';

export const devActivityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Activity"
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
							"url": "=/api/dev_activity/history/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dev_activity/history/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Activity"
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
			"description": "CSV of netuids (e.g. 1,2,3)",
			"default": "1,16,21",
			"type": "string",
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
						"Dev Activity"
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
			"description": "Start date inclusive (YYYY-MM-DD)",
			"default": "2025-01-01",
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
						"Dev Activity"
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
			"description": "End date inclusive (YYYY-MM-DD)",
			"default": "2025-01-31",
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
						"Dev Activity"
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
						"Dev Activity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
