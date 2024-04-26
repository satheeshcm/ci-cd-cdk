#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdCdkStack } from '../lib/ci-cd-cdk-stack';

const app = new cdk.App();
new CiCdCdkStack(app, 'CiCdCdkStack', {
env: {
  account: '679739898484',
  region: 'eu-north-1',
}
});

app.synth();