'use strict';

const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  
  console.log(formData);

  const emailParams = {
    Source: 'iwanttoknowmore@3pt.design',
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ['bryan@3pt.design'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Good news, everyone! We just got a submission from the ThreePoint Contact Form from ${formData.name}\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage\n${formData.message}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `ThreePoint contact form submission from ${formData.company}`,
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, callback) => {
  const formData = event;
  
  sendEmail(formData, function mailCB(err, data) {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };
    
    callback(null, response);
  });
};
