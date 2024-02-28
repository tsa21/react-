        //------------- SImple heading ----------
        // // {} - this is the place for attributes. like id ="head_1"
        // const heading =React.createElement("h1",{id:"heading"},"Hello world from react script");
        // console.log(heading);
        // // while create heading using create element it returns an object. it includes props.
        // // contains "hello wor...." as children and id ..
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);



// -------nested element-----------
// const parent = React.createElement(
//         "div",
//         {id:"parent"},
//         React.createElement(
//                 "div",
//                 {id:"child"},
//                 React.createElement("h1",{},"I am an h1 tag")
//         )
// );

// if we need to send multiple children make an array. [react.creteele...]
const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
                "div",
                {id:"child"},
                [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h3",{},"I am an h3 tag")]
        )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);







        