import './ExploreContainer.css';
import { IonInput, IonInputPasswordToggle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
  );
};

export default ExploreContainer;
