import React, {useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Rutas from "./view/Rutas";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import axios from 'axios'

axios.interceptors.request.use(
  req => {
    req.headers['token'] = localStorage.getItem('token')
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

/*axios.interceptors.response.use(undefined, function valida(err) {
   
  if (err.response.status === 401 || err.response.data.isAuth) {
    localStorage.clear()
  }
  
  return Promise.reject(err);
})*/


const theme = createMuiTheme({
  status: {},
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Rutas />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals