import { declareChildApplication, start } from 'single-spa';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('react', () => import('./ReactApp1/react.app.js'), pathPrefix('/react'));
declareChildApplication('demo2', () => import('./ReactApp2/src/index'), pathPrefix('/demo2'));
declareChildApplication('demo3', () => import('./ReactApp3/src/index'), pathPrefix('/demo3'));

start();

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
