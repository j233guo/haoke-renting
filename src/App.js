import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
    return (
        <Router className="App">
            <div>
                {/* Configure navigation */}
                <ul>
                    <li>
                        <Link to="/home">首页</Link>
                    </li>
                    <li>
                        <Link to="/citylist">导航菜单</Link>
                    </li>
                </ul>

                {/* Configure routers */}
                <Route path="/home" component={Home}></Route>
                <Route path="/citylist" component={CityList}></Route>
            </div>
        </Router>
    );
}

export default App;
