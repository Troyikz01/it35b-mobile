import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Feed from './feed';

const Favorite: React.FC = () => {
    return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonButtons slot='start'>
                    <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Favorite</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                 <h1>Favorite</h1>
                </IonContent>   
            </IonPage>
    );
};

export default Favorite;