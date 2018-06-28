import { APIGatewayEventRequestContext, APIGatewayProxyEvent as ProxyEventInterface } from 'aws-lambda';
export declare class APIGatewayProxyEvent implements ProxyEventInterface {
    body: string;
    headers: {
        [name: string]: string;
    };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: {
        [name: string]: string;
    } | null;
    queryStringParameters: {
        [name: string]: string;
    } | null;
    stageVariables: {
        [name: string]: string;
    } | null;
    requestContext: APIGatewayEventRequestContext;
    resource: string;
    constructor();
}
