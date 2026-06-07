import type { INodeProperties } from 'n8n-workflow';

export const otcDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
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
							"url": "=/api/otc/listing/history/v1"
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
							"url": "=/api/otc/listing/history/v2"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/otc/listing/history/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Listing Id",
			"name": "listing_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listing_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Event Type",
			"name": "event_type",
			"default": "created",
			"type": "options",
			"options": [
				{
					"name": "Created",
					"value": "created"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "Taken",
					"value": "taken"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "event_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Seller",
			"name": "seller",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "seller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Buyer",
			"name": "buyer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Hotkey",
			"name": "hotkey",
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
						"Otc"
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
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Block Start",
			"name": "block_start",
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
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Block End",
			"name": "block_end",
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
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Timestamp Start",
			"name": "timestamp_start",
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
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "Timestamp End",
			"name": "timestamp_end",
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
						"Otc"
					],
					"operation": [
						"V 1"
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
						"Otc"
					],
					"operation": [
						"V 1"
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
						"Otc"
					],
					"operation": [
						"V 1"
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
						"Otc"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
		{
			"displayName": "GET /api/otc/listing/history/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Listing Id",
			"name": "listing_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listing_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Event Type",
			"name": "event_type",
			"default": "created",
			"type": "options",
			"options": [
				{
					"name": "Created",
					"value": "created"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "Taken",
					"value": "taken"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "event_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Seller",
			"name": "seller",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "seller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
		{
			"displayName": "Buyer",
			"name": "buyer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
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
						"Otc"
					],
					"operation": [
						"V 2"
					]
				}
			}
		},
];
