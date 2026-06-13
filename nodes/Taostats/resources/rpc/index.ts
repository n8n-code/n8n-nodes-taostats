import type { INodeProperties } from 'n8n-workflow';

export const rpcDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					]
				}
			},
			"options": [
				{
					"name": "HTTP",
					"value": "HTTP",
					"action": "HTTP",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/rpc/http"
						}
					}
				},
				{
					"name": "Ws",
					"value": "Ws",
					"action": "Ws",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/rpc/ws/{{$parameter[\"target\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/rpc/http",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					],
					"operation": [
						"HTTP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request",
			"name": "request",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					],
					"operation": [
						"HTTP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target",
			"name": "target",
			"type": "options",
			"default": "finney_lite",
			"options": [
				{
					"name": "Finney Lite",
					"value": "finney_lite"
				},
				{
					"name": "Finney Archive",
					"value": "finney_archive"
				}
			],
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					],
					"operation": [
						"HTTP"
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
						"RPC"
					],
					"operation": [
						"HTTP"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/rpc/ws/{target}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					],
					"operation": [
						"Ws"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"required": true,
			"default": "finney_lite",
			"type": "options",
			"options": [
				{
					"name": "Finney Lite",
					"value": "finney_lite"
				},
				{
					"name": "Finney Archive",
					"value": "finney_archive"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"RPC"
					],
					"operation": [
						"Ws"
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
						"RPC"
					],
					"operation": [
						"Ws"
					]
				}
			}
		},
];
