import { CustomAuthorizerEvent as AuthorizerEvent } from 'aws-lambda';
import { APIGatewayEventRequestContext } from './APIGatewayEventRequestContext';
export declare class CustomAuthorizerEvent implements AuthorizerEvent {
    type: string;
    methodArn: string;
    authorizationToken?: string;
    headers?: {
        [name: string]: string;
    };
    pathParameters?: {
        [name: string]: string;
    } | null;
    queryStringParameters?: {
        [name: string]: string;
    } | null;
    requestContext?: APIGatewayEventRequestContext;
    constructor();
}
