import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    Callback,
    CloudFrontRequestCallback,
    CloudFrontRequestEvent,
    CloudFrontRequestHandler,
    Context,
} from 'aws-lambda';
import { LambdaOptions } from './LambdaOptions';

export function Lambda(options: LambdaOptions) {
    return <T extends { new (...args: any[]): {} }> (target: T) => {
        console.log(`Registered ${options.name} as a Lambda`);
        return class extends target {
            public event: APIGatewayProxyEvent;
            public context: Context;
            public callback: APIGatewayProxyCallback;

            constructor(...args: any[]) {
                super();
                this.event = args[0];
                this.context = args[1];
                this.callback = args[2];
            }
        };
    };
}
