function timer(){
    const ele1 = `
    <h1>React Real DOM</h1>
    <input />
    <span>${new Date().toLocaleTimeString()}</span>
    `
    document.getElementById('container1').innerHTML = ele1;

    const ele2 = React.createElement('div', null, 
    React.createElement('h1', null, 'React virtual DOM'),
    React.createElement('input', { type: "text" }),
    React.createElement('span', null, `${new Date().toLocaleTimeString()}`),
    )
    ReactDOM.render(ele2, document.getElementById('container2') )
}

setInterval(timer, 1000)
