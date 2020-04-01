module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Voopik',
        contact: {
            name: 'Amol Saini',
            email: 'amol.saini567@gmail.com'
        }
    },
    servers: [{
            url: 'http://localhost:2345/',
            description: 'Local server'
        },
        // {
        //   url: 'https://api_url_testing',
        //   description: 'Testing server'
        // },
        {
            url: 'https://voopik-backend.herokuapp.com',
            description: 'Production server'
        }
    ],
    tags: [{
        name: 'Suggestion API'
    }],
    paths: {
        '/suggestions': {
            get: {
                tags: ['Suggestion API'],
                description: 'Get City Suggestion',
                operationId: 'getCity',
                parameters: [{
                        name: 'q',
                        in: 'query',
                        schema: {
                            type: 'string'
                        },
                        required: true
                    },
                    {
                        name: 'latitude',
                        in: 'query',
                        schema: {
                            type: 'number',
                            minimum: -90,
                            maximum: 90
                        },
                        required: false
                    },
                    {
                        name: 'longitude',
                        in: 'query',
                        schema: {
                            type: 'number',
                            minimum: -180,
                            maximum: 180
                        },
                        required: false
                    }
                ],
                responses: {
                    '200': {
                        description: 'Suggestions were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    suggestions: {
                                        type: 'array',
                                        city: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                latitude: {
                                                    type: 'integer',
                                                },
                                                longitude: {
                                                    type: 'integer',
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '422': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    errors: {
                                        type: 'array',
                                        error: {
                                            type: 'object',
                                            properties: {
                                                msg: {
                                                    type: 'string'
                                                },
                                                param: {
                                                    type: 'string'
                                                },
                                                location: {
                                                    type: 'string'
                                                }
                                            }
                                        }
                                    }
                                },
                                example: {
                                    "errors": [
                                        {
                                            "msg": "Invalid value",
                                            "param": "q",
                                            "location": "query"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        schemas: {
            City: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number'
                    },
                    name: {
                        type: 'string'
                    },
                    ascii: {
                        type: 'string'
                    },
                    alt_name: {
                        type: 'string'
                    },
                    lat: {
                        type: 'number'
                    },
                    long: {
                        type: 'number'
                    },
                    feat_class: {
                        type: 'string'
                    },
                    country: {
                        type: 'string'
                    },
                    cc2: {
                        type: 'string'
                    },
                    admin1: {
                        type: 'number'
                    },
                    admin2: {
                        type: 'number'
                    },
                    admin3: {
                        type: 'number'
                    },
                    admin4: {
                        type: 'number'
                    },
                    population: {
                        type: 'number'
                    },
                    elevation: {
                        type: 'number'
                    },
                    dem: {
                        type: 'number'
                    },
                    tz: {
                        type: 'string'
                    }
                }
            }
        }
    }
};