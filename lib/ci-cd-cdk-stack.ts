import * as cdk from 'aws-cdk-lib';
import { CodePipeline } from 'aws-cdk-lib/aws-events-targets';
import { CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CiCdCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'pipeline', {
      piplineName: 'Test Pipeline' 
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('satheeshcm/ci-cd-cdk', 'main'),
        commands:['npm ci',
                  'npm run build',
                  'npx cdk synth']
      })
    })
    
  }
}
