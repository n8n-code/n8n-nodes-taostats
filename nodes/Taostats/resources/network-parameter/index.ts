import type { INodeProperties } from 'n8n-workflow';

export const networkParameterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Network Parameter"
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
							"url": "=/api/network_parameter/latest/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/network_parameter/latest/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Parameter"
					],
					"operation": [
						"V 1"
					]
				}
			}
		},
];
