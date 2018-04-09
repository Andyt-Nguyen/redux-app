To begin developing you would need to download "redux react-redux and redux-thunk"
to have boilerplate react redux application.

Step 1:
	- Create a reducers file in the ./src/reducers file
	- In there create a reducer "bookReducer.js" and export an array of dummy data
	- Create an index.js file inside the reducers folder. From there you want to
	  import bookReducer and combineReducers from redux so that when you have multiple
		reducers you have a way import all of them inside of a single object
		ex:"combineReducers({books:bookReducer...})". Lastly export default that index file.

		./src/reducers/bookReducer.js
		const bookReducer = (state=[], action) {
			return [
				{ title: 'Into The Wild' },
				{ title: 'John Lennon' },
				...
			]
		}
		export default bookReducer;

		./src/reducers/index.js
		import { combineReducers } from 'redux';
		import bookReducer from './bookReducer';

		const rootReducer = combineReducers({
			books:bookReducer,
			...
		});

		export default rootReducer;

Step 3:
	- In the root folder ./src we are going to create a store folder. ./src/store
		Inside store create a file called index.js (./src/store/index.js). This file
		is what is going to hold all of our predictable data/app level state. Now first
		things first we want to import a couple modules. The first module would be
		{ createStore, applyMiddleware } from 'redux'. The first function createStore()
		will obviously create our app level state. applyMiddleware() will actually let
		us dispatch async request. And Lastly import our rootReducer which we will call
		reducers when we import it. So now all we have to do is create a const called
		store and call the function createStore(). The createStore() can take our
		our two functions reducers and applyMiddleware. Now with applyMiddleware it can
		take in multiple params but we would have to download other modules for that such as
		redux-thunk. Well anyways export default store and we are good to go.

		import { createStore, applyMiddleware } from 'redux';
		import thunk from 'redux-thunk';
		import reducers from '../reducers';

		const store = createStore(reducers, applyMiddleware(thunk));
		export default store;


Step 3:
	- In the root folder of ./src go to your index.js file. You would want to import
		2 modules. The Provider and the store that we created earlier. From there you would
		want to wrap you <Provider></Provider> over the App component. The Provider can take
		an attribute which happens to be store. So in order to provide our many components
		we would use the store attribute and equal it to the store that we created.
		ex: "<Provider store={store}><App /></Provider>". Now our whole app can be connected
		to the Container Component

		...
		import { Provider } from 'react-redux';
		import store from './store';

		render(
			<Provider store={store}>
				<App/>
			</Provider>, document.getElementById('root')
		)

Step 4:
	- Create a folder in your ./src called Containers. The Containers folder is what you
		you think should have access to the redux-store. In there I created a components called
		./BookList.js from their to test if your component is connected to the store we would
		first create our boiler plate container/smart/class component and inside the render
		console.log(this.props). Now before we run the app we need to import the { connect }
		from react-redux. After that at the bottom of your file where you exported your component
		you want to call the connect() with two arguments but for the sake of testing we
		will only provide one argument. The first argument will take a function called
		mapStateToProps(). Now this does not exist so we would have to create it ourselves
		Above the export default we want to create a function called mapStateToProps() in that
		function its going to take a parameter called state. "state" is the object that is holding
		our data. Next we want to return an object. In the object this is where we can call our
		data whatever we want. So for my example I'm going to name the key books. I call it that
		books it makes sense and this is what will console log out when we use this.props.books.
		ok next for the value we want to call we called our reducer key that we named in our reducers
		remember it was {books:bookReducer}. To get the value all we need to is call state.books.
		and finally for the second parameter of our connect we want to pass null and wrap out component
		with another parenthesis to that component. Run your program and check out your console.
		Boom Baby.

		const mapStateToProps = state => {
			return {
				books: state.books
			}
		}
		export default connect(mapStateToProps,null)(BookList);
