import { APIGatewayEventRequestContext, APIGatewayProxyEvent } from 'aws-lambda';

export class APIGatewayProxyEventObject implements APIGatewayProxyEvent {
    body: string;
    headers: { [name: string]: string };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: APIGatewayEventRequestContext;
    resource: string;

    constructor() {}
}
