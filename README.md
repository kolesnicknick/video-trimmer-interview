### This repo is resolve of interview task of background video processing
    
#### The main app functionalities (Task that have been solved)

- User can use the mobile app to upload video and define timing parameters. After that, the request must be processed in the background.
- User can see the list of the request with their statuses(done, failed, scheduled, processing).
- User can restart failed requests.
- When a new user starts using a mobile app, the app sends a request to the server for a  unique key which is used to subscribe user requests to identify user.
- API has to return information about all errors in proper format including validation errors.
- All videos should be returned in form of a link to the video and video duration
- We will need to handle different  versions of the app depending for different clients.. That’s why we need API versioning mechanism


#### Manual Deployment without Docker

- Create a `.env` file using the `cp .env.example .env` command and replace the existing env variables with personal settings (MongoDB URL either `srv` or `localhost`)

- Download dependencies using `npm i` or `yarn`

- Start the app in pre-production mode using `npm run start` or `npm run start:dev` for development (the app will be exposed on the port 9000; not to conflict with React, Angular, or Vue)


### Swagger documentation
Swagger docs are production ready and you can use them as you wish
To do that go to /api/json route and you will get json with all routes defined

After issue: https://github.com/nestjs/swagger/issues/932 is fixed - you can use route /api/ to see docs locally

### 🔒 Environment Configuration

By default, the application comes with a config module that can read in every environment variable from the `.env` file.

**APP_ENV** - the application environment to execute as, either in development or production. Determines the type of logging options to utilize. Options: `dev` or `prod`. 

**APP_URL** - the base URL for the application. Made mainly to showcase the power of `ConfigService` and can be removed as it doesn't serve any other purpose

**WEBTOKEN_SECRET_KEY** - the secret key to encrypt/decrypt web tokens with. Make sure to generate a random alphanumeric string for this.

**WEBTOKEN_EXPIRATION_TIME** - **the time in seconds** indicating when the web token will expire; by default, it's 2400 seconds which is 40 mins.

**DB_URL** - the URL to the MongoDB collection

### Full Project install workflow
- set env && yarn install && yarn build
- yarn start:prod for current project
- clone https://github.com/kolesnicknick/video-trimmer-cloud
- go to cloud project => set env && yarn install
- yarn start:prod for cloud project
- If no errors you are set up

### Project usage example
- Learn Swagger documentation for current project
- When done - upload && trim && manage videos following next flow
    - Register
    - Login
    - Create video on current project (you will get _id in response)
    - Using this _id from the previous step upload video file to the cloud project
    - Check status of your uploaded videos using videos/my route
    
    In the background on cloud cron job will:
        - Get video info to trim
        - Find corresponding file in untrimmed folder
        - Trim video
        - Notify video-trimmer-backend with the info on trim status
        - Go to next video trimming
