//Jquery
declare let window: any;

window.jQuery = window.$ = require("jquery");

// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';

//Socket io client side
// import 'socket.io-client';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

require('./style/styles.less');
