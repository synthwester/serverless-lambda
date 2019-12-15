# Serverless Node.js starter pack

## Start project from scratch:

Install **serverless**:
`npm i -g serverless`

Create directory:
`mkdir serverless-lambda`

Move into directory:
`cd serverless-lambda`

Create **serverless** Node.js template:
`serverless create --template aws-nodejs`

Add credentials:
`serverless config credentials --provider aws --key aws_key --secret aws_secret`

Run lambda function locally:
`serverless invoke local --function functionName`

Deploy to lambda:
`serverless deploy`
