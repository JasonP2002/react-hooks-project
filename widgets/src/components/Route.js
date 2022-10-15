//Route mapping for navigation
const Route = ({ path, children }) => {
    return window.location.pathname 
        === path ? children : null;
};

export default Route;