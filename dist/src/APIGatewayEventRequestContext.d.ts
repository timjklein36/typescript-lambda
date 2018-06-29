import { APIGatewayEventRequestContext as EventRequestContext, AuthResponseContext } from 'aws-lambda';
export declare class APIGatewayEventRequestContext implements EventRequestContext {
    accountId: string;
    apiId: string;
    authorizer?: AuthResponseContext | null;
    httpMethod: string;
    identity: {
        accessKey: string | null;
        accountId: string | null;
        apiKey: string | null;
        apiKeyId: string | null;
        caller: string | null;
        cognitoAuthenticationProvider: string | null;
        cognitoAuthenticationType: string | null;
        cognitoIdentityId: string | null;
        cognitoIdentityPoolId: string | null;
        sourceIp: string;
        user: string | null;
        userAgent: string | null;
        userArn: string | null;
    };
    path: string;
    stage: string;
    requestId: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
    constructor();
}
