import React from 'react';
import ReactDOM from 'react-dom/client';

const val = React.createElement("h1",{
key: 1011
},
"I kow")

var target = ReactDOM.createRoot(document.getElementById("header"));
target.render(val);
