import { APIGatewayProxyResult } from 'aws-lambda';
import { S3 } from 'aws-sdk';
import {
    APIGatewayLambdaHandler,
    APIGatewayProxyLambda,
    Lambda,
} from '../util/index';

@Lambda({
    name: 'MyLambda',
})
export class MyLambda extends APIGatewayProxyLambda {
    private testProp: string;

    public handler() {
        const s3 = new S3({
            apiVersion: '2006-03-01',
            region: 'us-east-1',
        });

        console.log(this.event);

        const result: APIGatewayProxyResult = {
            statusCode: 200,
            body: 'Success!',
        };

        this.callback(null, result);
    }
}

export const handler = APIGatewayLambdaHandler.generate(MyLambda);
