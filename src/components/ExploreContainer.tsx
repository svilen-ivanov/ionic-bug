import './ExploreContainer.css';
import {IonInput, IonRadio, IonRadioGroup} from "@ionic/react";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
        <IonRadioGroup value="1" onIonChange={(event) => alert(event.detail.value)}>
            <IonInput type="text" placeholder="Enter Input"></IonInput>
            <IonRadio value="1"/>
            <IonRadio value="2"/>
        </IonRadioGroup>
    </div>
  );
};

export default ExploreContainer;
