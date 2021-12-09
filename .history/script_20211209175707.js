// Initialize Firebase
var config = {
  apiKey: "AIzaSyCmPI4ru55XGnnZPXpbMCQ1HcdlNI2jv0A",
  authDomain: "reactlikes.firebaseapp.com",
  databaseURL: "https://reactlikes.firebaseio.com",
  projectId: "reactlikes",
  storageBucket: "reactlikes.appspot.com",
  messagingSenderId: "868005245222"
};

firebase.initializeApp(config);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: '-'
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const countRef = rootRef.child('count');
    countRef.on('value', snap => {
      this.setState({
        count: snap.val()
      })
    })
  }

  handleChange(e) {
    e.preventDefault();
    const rootRef = firebase.database().ref();
    const countRef = rootRef.child('count').transaction(val => val + 1);
    rootRef.push(countRef);
  }

  render() {
    return (
      <main>
			<div class="card" onClick={this.handleChange}>
				<svg title="SVG Heart Icon" viewBox="-11 -11 122 111" width="100" height="100">
					<path d="
						 M 50 0,
						 A 1 1 0 1 0 0 50, 
						 L50,100, 
						 L100,50,
						 A 1 1 0 1 0 50 0"
						/>
					</svg>
        <h1>{this.state.count}</h1>
				</div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));