## How to use this repo
- Clone this repo to your local machine
- Do `npm install`
- Create `.env` file with the following information:
  ```
  USERNAME=<Salesforce username>
  PASSWORd=<Salesforce user password>
  SECURITY_TOKEN=<Salesforce user security token>
  LOGIN_URL=<Use https://login.salesforce.com if you are connecting to a production org or https://test.salesforce.com if you are connecting to a sandbox>
  TOPIC=<Name of the push topic that you are trying to subscribe to e.g. NewAccount>
- Execute the script with the following command `npm run start`