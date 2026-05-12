
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonIcon } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from '../lib/supabaseClient';

const Login: React.FC = () => {
    const navigation = useIonRouter();
    const dologin =  () => {
        navigation.push('/app','forward', 'replace');
    }

    const signInWithGoogle =  async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/app`
            }
        });
    }

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
                    <IonButton expand="full" onClick={signInWithGoogle} fill="outline">
                        <IonIcon icon={logoGoogle} />
                        Sign in with Google
                    </IonButton>  
                    <h1></h1>
                </IonContent>   
            </IonPage>
    );
};

export default Login;