# Update of ImageAnalysis - iam_apikey and new versions
# ISSUE INVALID CALLBACK : 
> node app.js

listening at: 3000
fs.js:137
    throw new ERR_INVALID_CALLBACK();
    ^

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
    at makeCallback (fs.js:137:11)
    at Object.unlink (fs.js:936:14)
    at /Users/pcomte/Documents/GitHub/ImageAnalysis/routes/vr.js:43:10
    at Request._callback (/Users/pcomte/Documents/GitHub/ImageAnalysis/node_modules/watson-developer-cloud/lib/requestwrapper.js:125:9)
    at Request.self.callback (/Users/pcomte/Documents/GitHub/ImageAnalysis/node_modules/request/request.js:185:22)
    at Request.emit (events.js:182:13)
    at Request.<anonymous> (/Users/pcomte/Documents/GitHub/ImageAnalysis/node_modules/request/request.js:1157:10)
    at Request.emit (events.js:182:13)
    at Gunzip.<anonymous> (/Users/pcomte/Documents/GitHub/ImageAnalysis/node_modules/request/request.js:1079:12)
    at Object.onceWrapper (events.js:273:13)
---------------------------
jan 24 2019 
Image Analysis

The Image Analysis app let you recognize items in images and speak the resulting description. It uses Visual Recognition to identify objects in images, Machine Translation to translate the description into another language, and Text to Speech to pronounce the resulting translation.

## Lab Instructions: INSTRUCTIONS**

Demo: http://image-analysis.mybluemix.net/.  TO BE DEPLOYED 
## Running locally

The application uses Node.js and npm so you will have to download and install them as part of the steps below.

    1.Copy the credentials from your visual-recognition and text-to-speech service in IBM Cloud 
    to vr.js and tts.js, 
    you can see the credentials by going to cloud.ibm.com.

    2.Install Node.js

    3.Go to the project folder in a terminal and run: npm install

    4.Start the application

    5.node app.js

    6.Go to http://localhost:3000

## Troubleshooting

Explain how to see the deploy logs

## License

This sample code is licensed under Apache 2.0. Full license text is available in COPYING.

## Open Source @ IBM

Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
