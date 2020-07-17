import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app'
import './index.css';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';






const store = configureStore();
 
/* Define your translations */
let i18nConfig = {
  locale: 'el',
  messages: {
    "acceuille.page.title":" فيديوات حديثة",
    "header.title":"Video Listing Project",
    "menu.acceuille.title":" الرئيسية ",
    "menu.bibiotheque.title":" المكتبة ",
    "menu.tendence.title":" الأشهر " ,
    "menu.about.title":" حول الموقع ",
    "home.welcome": "Καλώς 'Ηρθατε στο {name}!",
    "home.declarative": "Δηλωτικό",    
  }
};


render(
    <ReduxProvider store={store}>
        <Router>
            <IntlProvider
                locale={i18nConfig.locale}
                defaultLocale={i18nConfig.locale}
                messages={i18nConfig.messages}>        
                <App/>        
            </IntlProvider>
        </Router>    
    </ReduxProvider>
    ,

    document.getElementById("app")
 ); 