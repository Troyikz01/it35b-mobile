
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
    const router = useIonRouter();

    const doLogin = () => {
        router.push('/app', 'forward');
    };

    return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonButtons slot='start'>
                    <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonButton expand='full' onClick={doLogin}>
                        Login
                    </IonButton>
                    <h1>Login</h1>
                </IonContent>   
            </IonPage>
    );
};

export default Login;