import React from "react";
import "./Pai.css";

import Filho from '../Filho/Filho';
import childrenWithProps from '../../events/Children/childrenWithProps';

export default (props) => (
    <div>
        <h1>
            {props.nome} {props.sobrenome}
        </h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome="Carlo" />
        </ul>
        <h2>Filhas</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
);
