# Get Things Done

A simple Todo app that aims to let you Get Things Done.

A React, Typescript and Redux project.

## Getting Started

### Pre-Requisites

#### OAuth

The application allows users to sign-in using their own Google Account. This service is completed using MongoDB Realm to handle authentication and uses the Google as the Authentication Provider. Details on setting this up can be seen [here](https://docs.mongodb.com/realm/authentication/google/#set-up-a-project-in-the-google-api-console).

#### Environment Variables

You will need the following `.env` variables set to enable oauth to the application.

| Name                         | Value                                     |
| ---------------------------- | ----------------------------------------- |
| `REACT_APP_REALM_APP_ID`     | Realm App ID                              |
| `REACT_APP_GOOGLE_CLIENT_ID` | Client ID for the project on google oauth |

### Development

1. Install packages

    `yarn run install`

2. Start development server

    `yarn run start`

## Deployment

The application is currently deployed using Heroku. To setup heroku, follow [this link](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote) for further details.

Once setup, you will need to manually push to the heroku remote.

``` bash
git push heroku main
```
