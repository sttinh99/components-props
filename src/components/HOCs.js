

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const HOCs = (WrapComponent) => {
    console.log(WrapComponent, 'Component');
    const randomColor = getRandomColor();
    return (props) => {
        console.log(props, 'props');
        return (
            <div style={{ color: randomColor }}>
                <WrapComponent {...props} />
            </div>
        )
    }
}
export default HOCs