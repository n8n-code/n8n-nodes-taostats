import type { INodeProperties } from 'n8n-workflow';

export const coldkeySwapDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Coldkey Swap"
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
							"url": "=/api/pending_coldkey_swap/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/pending_coldkey_swap/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Coldkey Swap"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
];
