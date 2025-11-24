const heading = React.createElement('div',
    {id:'Parent'},
        [
            React.createElement('div',{id:'child1'},
            [ 
                React.createElement('h1',{},'this is h1 tag'),
                React.createElement('h2',{},'this is h2 tag')
            ]),
            React.createElement('div',{id:'child2'},
            [ 
                React.createElement('h1',{},'this is h1 tag'),
                React.createElement('h2',{},'this is h2 tag')
            ])
        ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

{/* <div id="parent">
    <div id="child1">
        <h1>this is h1 tag</h1>
        <h2>this is h2 tag</h2>
    </div>
    <div id="child2">
        <h1>this is h1 tag</h1>
        <h2>this is h2 tag</h2>
    </div>
</div> */}