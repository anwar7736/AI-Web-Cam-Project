import React from 'react';

const Context = React.createContext();

const DadaProvider = Context.Provider;
const PutiConsumer = Context.Consumer;

export {DadaProvider,PutiConsumer};