import type { INodeProperties } from 'n8n-workflow';

export const validatorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
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
							"url": "=/api/dtao/validator/available/v1"
						}
					}
				},
				{
					"name": "V 1 Post",
					"value": "V 1 Post",
					"action": "V 1 Post",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/dtao/validator/yield/latest/v1"
						}
					}
				},
				{
					"name": "V 2",
					"value": "V 2",
					"action": "V 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/validator/weights/history/v2"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dtao/validator/available/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1"
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
						"Validator"
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
						"Validator"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "POST /api/dtao/validator/yield/latest/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"displayName": "Min Stake",
			"name": "min_stake",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "min_stake",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "options",
			"default": "netuid_asc",
			"options": [
				{
					"name": "Netuid Asc",
					"value": "netuid_asc"
				},
				{
					"name": "Netuid Desc",
					"value": "netuid_desc"
				},
				{
					"name": "Name Asc",
					"value": "name_asc"
				},
				{
					"name": "Name Desc",
					"value": "name_desc"
				},
				{
					"name": "Stake Asc",
					"value": "stake_asc"
				},
				{
					"name": "Stake Desc",
					"value": "stake_desc"
				},
				{
					"name": "One Hour Apy Asc",
					"value": "one_hour_apy_asc"
				},
				{
					"name": "One Hour Apy Desc",
					"value": "one_hour_apy_desc"
				},
				{
					"name": "One Day Apy Asc",
					"value": "one_day_apy_asc"
				},
				{
					"name": "One Day Apy Desc",
					"value": "one_day_apy_desc"
				},
				{
					"name": "Seven Day Apy Asc",
					"value": "seven_day_apy_asc"
				},
				{
					"name": "Seven Day Apy Desc",
					"value": "seven_day_apy_desc"
				},
				{
					"name": "Thirty Day Apy Asc",
					"value": "thirty_day_apy_asc"
				},
				{
					"name": "Thirty Day Apy Desc",
					"value": "thirty_day_apy_desc"
				}
			],
			"routing": {
				"send": {
					"property": "order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "page",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Positions",
			"name": "positions",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "positions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 1 Post"
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
						"Validator"
					],
					"operation": [
						"V 1 Post"
					]
				}
			}
		},
		{
			"displayName": "GET /api/validator/weights/history/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Uid",
			"name": "uid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "uid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Validator"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Block Number",
			"name": "block_number",
			"description": "Start of block range (inclusive)",
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
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
						"Validator"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
];
