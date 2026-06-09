import type { INodeProperties } from 'n8n-workflow';

export const extrinsicDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
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
							"url": "=/api/extrinsic/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/extrinsic/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"default": "finney",
			"type": "options",
			"options": [
				{
					"name": "Finney",
					"value": "finney"
				},
				{
					"name": "Nakamoto",
					"value": "nakamoto"
				},
				{
					"name": "Kusanagi",
					"value": "kusanagi"
				},
				{
					"name": "Testnet",
					"value": "testnet"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "network",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
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
						"Extrinsic"
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
						"Extrinsic"
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
						"Extrinsic"
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
						"Extrinsic"
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
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Hash",
			"name": "hash",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Full Name",
			"name": "full_name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "full_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
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
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Success",
			"name": "success",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "success",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
		{
			"displayName": "Signer Address",
			"name": "signer_address",
			"description": "SS58 or hex format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "signer_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extrinsic"
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
						"Extrinsic"
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
						"Extrinsic"
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
					"name": "ID Asc",
					"value": "id_asc"
				},
				{
					"name": "ID Desc",
					"value": "id_desc"
				},
				{
					"name": "Success Asc",
					"value": "success_asc"
				},
				{
					"name": "Success Desc",
					"value": "success_desc"
				},
				{
					"name": "Signer Address Asc",
					"value": "signer_address_asc"
				},
				{
					"name": "Signer Address Desc",
					"value": "signer_address_desc"
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
						"Extrinsic"
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
						"Extrinsic"
					],
					"operation": [
						"v1"
					]
				}
			}
		},
];
