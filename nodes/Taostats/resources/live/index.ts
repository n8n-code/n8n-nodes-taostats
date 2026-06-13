import type { INodeProperties } from 'n8n-workflow';

export const liveDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					]
				}
			},
			"options": [
				{
					"name": "Account Balance Info",
					"value": "Account Balance Info",
					"action": "Account Balance Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/accounts/{{$parameter[\"address\"]}}/balance-info"
						}
					}
				},
				{
					"name": "Block Get Range",
					"value": "Block Get Range",
					"action": "Block Get Range",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/blocks"
						}
					}
				},
				{
					"name": "Block Get Head",
					"value": "Block Get Head",
					"action": "Block Get Head",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/blocks/head"
						}
					}
				},
				{
					"name": "Block Get By Height",
					"value": "Block Get By Height",
					"action": "Block Get By Height",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/blocks/{{$parameter[\"height\"]}}"
						}
					}
				},
				{
					"name": "Block Raw Get By Height",
					"value": "Block Raw Get By Height",
					"action": "Block Raw Get By Height",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/blocks/{{$parameter[\"height\"]}}/extrinsics-raw"
						}
					}
				},
				{
					"name": "Extrinsic Get By Block And Index",
					"value": "Extrinsic Get By Block And Index",
					"action": "Extrinsic Get By Block And Index",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/blocks/{{$parameter[\"height\"]}}/extrinsics/{{$parameter[\"index\"]}}"
						}
					}
				},
				{
					"name": "Pool Get",
					"value": "Pool Get",
					"action": "Pool Get",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/node/transaction-pool"
						}
					}
				},
				{
					"name": "Version Info",
					"value": "Version Info",
					"action": "Version Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/node/version"
						}
					}
				},
				{
					"name": "Const Get All",
					"value": "Const Get All",
					"action": "Const Get All",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/consts"
						}
					}
				},
				{
					"name": "Const Get By ID",
					"value": "Const Get By ID",
					"action": "Const Get By ID",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/consts/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Event Get All",
					"value": "Event Get All",
					"action": "Event Get All",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/events"
						}
					}
				},
				{
					"name": "Event Get By ID",
					"value": "Event Get By ID",
					"action": "Event Get By ID",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/events/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Storage Get All",
					"value": "Storage Get All",
					"action": "Storage Get All",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/storage"
						}
					}
				},
				{
					"name": "Storage Get By ID",
					"value": "Storage Get By ID",
					"action": "Storage Get By ID",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/live/pallets/{{$parameter[\"pallet_id\"]}}/storage/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/live/accounts/{address}/balance-info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Account Balance Info"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Account Balance Info"
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
						"Live"
					],
					"operation": [
						"Account Balance Info"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/blocks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Get Range"
					]
				}
			}
		},
		{
			"displayName": "Block Start",
			"name": "block_start",
			"required": true,
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
						"Live"
					],
					"operation": [
						"Block Get Range"
					]
				}
			}
		},
		{
			"displayName": "Block End",
			"name": "block_end",
			"required": true,
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
						"Live"
					],
					"operation": [
						"Block Get Range"
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
						"Live"
					],
					"operation": [
						"Block Get Range"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/blocks/head",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Get Head"
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
						"Live"
					],
					"operation": [
						"Block Get Head"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/blocks/{height}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Get By Height"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Get By Height"
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
						"Live"
					],
					"operation": [
						"Block Get By Height"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/blocks/{height}/extrinsics-raw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Raw Get By Height"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Block Raw Get By Height"
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
						"Live"
					],
					"operation": [
						"Block Raw Get By Height"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/blocks/{height}/extrinsics/{index}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Extrinsic Get By Block And Index"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Extrinsic Get By Block And Index"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Extrinsic Get By Block And Index"
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
						"Live"
					],
					"operation": [
						"Extrinsic Get By Block And Index"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/node/transaction-pool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Pool Get"
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
						"Live"
					],
					"operation": [
						"Pool Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/node/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Version Info"
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
						"Live"
					],
					"operation": [
						"Version Info"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/consts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Const Get All"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Const Get All"
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
						"Live"
					],
					"operation": [
						"Const Get All"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/consts/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Const Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Const Get By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Const Get By ID"
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
						"Live"
					],
					"operation": [
						"Const Get By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Event Get All"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Event Get All"
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
						"Live"
					],
					"operation": [
						"Event Get All"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/events/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Event Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Event Get By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Event Get By ID"
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
						"Live"
					],
					"operation": [
						"Event Get By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/storage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Storage Get All"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Storage Get All"
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
						"Live"
					],
					"operation": [
						"Storage Get All"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/live/pallets/{pallet_id}/storage/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Storage Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Pallet ID",
			"name": "pallet_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Storage Get By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Live"
					],
					"operation": [
						"Storage Get By ID"
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
						"Live"
					],
					"operation": [
						"Storage Get By ID"
					]
				}
			}
		},
];
