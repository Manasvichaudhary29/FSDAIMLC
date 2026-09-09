const container = document.getElementById('container');

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
    'h2',
    { style: { color: 'red' } },
    "Name:Manasvi Chaudhary"
);
const h21 = React.createElement(
    'h2',
    { style: { color: 'red' } },
    "Roll No.:2400321530119"
);
const h23 = React.createElement(
    'h2',
    { style: { color: 'red' } },
    "Branch:AIML"
);
const h31 = React.createElement(
    'h2',
    { style: { color: 'red' } },
    "Section:C"
);
const h1 = React.createElement(
    'h1',
    {},
    "ABES Engineering College"
);

const img = React.createElement(
    'img',
    {
        src: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl8xN2MxMGJhMC0xMTQwLTRkMDEtYmM5Yi05NGZjMTNjZjkzNjgucG5n.png',
        style: {
            height: '100px',
            width: '100px'
        }
    }
);

const div = React.createElement(
    'div',
    {
        style: {
            border: '4px solid red',
            width: '600px'
        }
    },
    h1,
    h2,
    h21,
    h31,
    h23,
    img
);

root.render(div);