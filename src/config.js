const dev = {
  STRIPE_KEY: "pk_test_51GuI8UDyCRFuyK4FkN7NpD7G9yonb5kGv9Q22iG0Bez5EWIc67uNjLubnWGq19lqC3PaUylwiJiJxf5FOTXolJMv00OgvzbNjP",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-z21hh95y5oor"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://pb2u5b5ang.execute-api.ap-south-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_D55ggEg9c",
    APP_CLIENT_ID: "1vlivq90h51pufeac75q97l6cg",
    IDENTITY_POOL_ID: "ap-south-1:62ca6d08-5d63-4684-ab8d-6cd2b31f1445"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GuI8UDyCRFuyK4FkN7NpD7G9yonb5kGv9Q22iG0Bez5EWIc67uNjLubnWGq19lqC3PaUylwiJiJxf5FOTXolJMv00OgvzbNjP",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-9v39njspao7j"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://c9egmu7p7e.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_OAiwZZvRU",
    APP_CLIENT_ID: "3u9g70ovkjqfpksovfpvs7163j",
    IDENTITY_POOL_ID: "ap-south-1:60c1912d-0882-494d-8024-b5cecccd1210"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};