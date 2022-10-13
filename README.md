# DigiVet 
A React-Native Survey app to identify if the pet of a user is showing any symptoms. The user answers a series of questions retrieved by and api and then this is submitted.

Note: the app has only been built and tested for iOS devices. Android functionality may vary.


## Getting Started
1. Complete the [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started.html) setup instructions.

2. Clone the repo:
- `git clone https://github.com/vishant101/VetSurvey.git`

3. Install node modules:
- `npm i`

4. Run DigiVet:
- iOS: `npx react-native run-ios`

## ScreenRecording
![](https://github.com/vishant101/VetSurvey/blob/main/Recording.gif)

## Architecture
The app is a multipage application built with react-naviagtion for routing. State is managed using Redux.

When the app is opened a fetchQuestions async action is dispatched from the main screen. This action calls api request which fetches a JSON file hosted here: https://api.jsonbin.io/v3/b/634325480e6a79321e22ca04

Once the request is finished the data is loaded into redux and the UI elements on the home page are displayed. When the user navigates to the next screen the questions are loaded from redux into a flatlist. Currently 4 question formats are supported:
- Multiple Choice - Single Answer
- Multiple Choice - Multiple Answers
- Numerical Scale 
- Free Text Input

When the user answers questions the values of these are stored in redux and at any point the user has access to a reset button which will clear the form. Once the user has answered the questions they wish they can click the submit button. The submit button creates an alert that informs the user that their submission has been recieved and returns them to the start of the app.


## License
MIT
