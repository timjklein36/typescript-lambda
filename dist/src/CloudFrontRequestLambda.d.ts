import { CloudFrontRequestCallback, CloudFrontRequestEvent, Context } from 'aws-lambda';
import { GenericLambda } from './GenericLambda';
export declare abstract class CloudFrontRequestLambda extends GenericLambda {
    protected event: CloudFrontRequestEvent;
    protected context: Context;
    protected callback: CloudFrontRequestCallback;
}
