import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import { useEffect } from "react";
import { getUserAuth } from "./actions";

function App(props) { 
  useEffect(() => {
		props.getUserAuth();
	}, []);
  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="/home" element={<><Header/><Home/></>}/>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
