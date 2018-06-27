import { CloudFrontRequestEvent } from 'aws-lambda';
import { GenericLambda } from './GenericLambda';
export declare class CloudFrontRequestLambdaHandler {
    static generate<T extends GenericLambda>(type: {
        new (...args: any[]): T;
    }): import("../node_modules/@types/aws-lambda/index").Handler<CloudFrontRequestEvent, import("../node_modules/@types/aws-lambda/index").CloudFrontRequestResult>;
}
