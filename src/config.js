export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GuI8UDyCRFuyK4FkN7NpD7G9yonb5kGv9Q22iG0Bez5EWIc67uNjLubnWGq19lqC3PaUylwiJiJxf5FOTXolJMv00OgvzbNjP",
    s3: {
      REGION: "ap-south-1",
      BUCKET: "notes-app-uploads-katti"
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://opt61iwzzi.execute-api.ap-south-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_LBinifpEU",
      APP_CLIENT_ID: "50jh61akmuert83ltu4f18t0i2",
      IDENTITY_POOL_ID: "ap-south-1:d96663ed-c627-4c5c-ba97-8ca1ab070292"
    }
  };