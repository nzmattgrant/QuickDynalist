# Getting Started with Quick Add Dynalist

This was created to give the ability to quickly add things to the a dynalist inbox. This site is already hosted (on github pages) at 
[https://nzmattgrant.github.io/QuickDynalist/](https://nzmattgrant.github.io/QuickDynalist/). Feel free to fork the code and set up your own version on [github pages](https://pages.github.com/). To do this you will also need to update the homepage setting in the package.json file to be your github pages hosting location (note this is the github.io url not the code repository url).

The idea is that a shortcut could be saved on mobile phones or used in a browser so that you don't have to find the right document to add your quick note to when opening dynalist. It is very simple for now and requires giving up your developer api key which you aren't supposed to do (though this is never saved anywhere as you will be able to see from the code).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.