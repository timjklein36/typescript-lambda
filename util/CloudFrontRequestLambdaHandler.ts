import {
    CloudFrontRequestCallback,
    CloudFrontRequestEvent,
    CloudFrontRequestHandler,
    Context,
} from 'aws-lambda';
import { GenericLambda } from './GenericLambda';

export class CloudFrontRequestLambdaHandler {
    public static generate<T extends GenericLambda>(type: { new (...args: any[]): T }) {
        const handler: CloudFrontRequestHandler = (
            event: CloudFrontRequestEvent,
            context: Context,
            callback: CloudFrontRequestCallback,
        ) => {
            new type(event, context, callback).handler();
        };
        return handler;
    }
}
