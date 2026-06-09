import type { INodeProperties } from 'n8n-workflow';

export const liquidityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
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
							"url": "=/api/dtao/liquidity/distribution/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dtao/liquidity/distribution/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
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
			"required": true,
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
						"Liquidity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Min Price",
			"name": "min_price",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Max Price",
			"name": "max_price",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Num Points",
			"name": "num_points",
			"description": "Number of data points to return (default: 200, max: 1000)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "num_points",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Log Scale",
			"name": "log_scale",
			"description": "Use logarithmic scale for price distribution (default: true)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "log_scale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Liquidity"
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
						"Liquidity"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
