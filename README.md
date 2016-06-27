# pei-optus

This repository contains code for coding test I did for a role at Optus.

## Instructions

Clone the repository.

Go to the directory where you have cloned the repo and run

```npm install```

## To run

The application uses Gulp task runner. To run the application locally execute

```gulp serve```

You can now browse the application at http://localhost:9000

## To test

There are two types of tests I have written. 

1. Unit tests for Data Service
2. End-To-End tests

You can run the unit tests by opening **tests/specRunner.html** in your browser

End-To-End tests use Protractor. 

Install protractor cli 

```npm install -g protractor```

If you get errors with above statement then try running it with **sudo**

Run the tests from command line by executing

```npm test```

This will test the live instance of applicaiton hosted at http://kapoor.io/pei-optus

# To build for deployment

The live code you see at http://kapoor.io/pei-optus is optimized for production.

Optimization includes contatination, minifying and uglifying assets.

To get a version ready for deployment run

```gulp dist```

This will created optimized files in dist folder

Any problems? Send me an email at kapoordeepak@gmail.com
