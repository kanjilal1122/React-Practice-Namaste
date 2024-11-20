// const heading = document.createElement("h1");
// heading.innerHTML = " Namaste React ";
// const root = document.getElementById("root");
// root.appendChild(heading);





const heading  = React.createElement("div" , {},[
    React.createElement('div',{class:'paragraph'},[
        React.createElement('section',{},[
            React.createElement('p',{},'This is a paragraph.'),
            React.createElement('p',{},'This is another paragraph.'),
        ])
    ]),
    React.createElement('h1',{class:'h1'},'Hello I am a Heading 1'),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)