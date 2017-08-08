import React from 'react';
import Navbar from 'react-navbar';

export default class test extends React.Component {
  render() {
const menuItems = [{
    title: 'menu.dd1',

    items: [
        {title: 'menu.i11', href: '/resource-1-1'},
        {title: 'menu.i12', href: '/resource-1-2'}
    ]
},
{title: 'menu.i1', href: '/resource-1'},
{title: 'menu.i2', href: '/resource-2'}];

const localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer = {
    menu: {
        dd1: 'Drop-down-1', i11: 'Item-1-1', i12: 'Item-1-2',
         i1: 'Item-1',       i2: 'Item-2',    i3: 'Item-3',
        dd2: 'Drop-down-2', i21: 'Item-2-1', i22: 'Item-2-2'
    }
};

React.render(
    React.createElement(Navbar, {
        menuItems,
        secondaryMenuItems,
        messages: localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer
    }),

    global.document.body
);
}
}