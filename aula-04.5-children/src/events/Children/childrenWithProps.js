import React from 'react';

export default function childrenWithProps(props) {
    return React.Children.map(props.children, child => { /* parametros do map - (array, elemento do array) */
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}
