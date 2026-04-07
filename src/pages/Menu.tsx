import React from 'react';
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonPage,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';

const Menu: React.FC = () => {

    const path = {
        {name:'Home', url: "/app/home", icon:homeOutline},
        {name:'About', url: "/app/about", icon:informationCircleOutline},


    }
    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>

                            {Path2D.map((item, index) => (
                                <IonItem key={index} routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            ))}
                        <IonList>
                            <IonItem routerLink="/app/home">
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>
                    <Route exact path="/app/home" component={Home} />
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;