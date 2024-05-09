const React = require('react');
const ReactDOMServer = require('react-dom/server');

function MyComponent() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
            <p>Hola que tal</p>
        </div>
    );
}

module.exports = async function (context, req) {
    const html = ReactDOMServer.renderToString(<MyComponent />);
    
    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: html
    };
};
