import type { INodeProperties } from 'n8n-workflow';

export const devChangelogDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Changelog"
					]
				}
			},
			"options": [
				{
					"name": "Get Changelog",
					"value": "Get Changelog",
					"action": "Get Changelog",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dev_changelog/v1"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dev_changelog/v1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Repo",
			"name": "repo",
			"description": "Repository in \"owner/repo:branch\" format.\nBranch defaults to \"main\" if omitted.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Netuid",
			"name": "netuid",
			"description": "Filter to a specific subnet by netuid.",
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
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"description": "Period: daily, weekly, or monthly (default: daily).",
			"default": "daily",
			"type": "options",
			"options": [
				{
					"name": "Daily",
					"value": "daily"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				},
				{
					"name": "Monthly",
					"value": "monthly"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "period",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "Exact date (YYYY-MM-DD for daily, YYYY-Www for weekly, YYYY-MM for monthly).\nCannot be combined with date_start/date_end.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Date Start",
			"name": "date_start",
			"description": "Start of date range (inclusive, YYYY-MM-DD).",
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
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Date End",
			"name": "date_end",
			"description": "End of date range (inclusive, YYYY-MM-DD).",
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
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Max results to return (default 10, max 200).",
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
						"Dev Changelog"
					],
					"operation": [
						"Get Changelog"
					]
				}
			}
		},
];
