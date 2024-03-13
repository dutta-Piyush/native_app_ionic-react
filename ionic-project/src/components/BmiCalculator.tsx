import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { calculatorOutline, enter, refreshOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import BMIResult from "./BmiResult";
// import InputControl from "./InputControl";

const BMICalculator: React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const [calculateBmi, setCalculateBmi] = useState<number>();
  const [error, setError] = useState<string>();

  const calculate = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (
      !enteredWeight ||
      !enteredHeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter the valid number");
      console.log("Inside the BMI Error Setter ", error);
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculateBmi(bmi);
    console.log("BMI ", bmi, calculateBmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearInput = () => {
    setError("");
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "OK", handler: clearInput }]}
      ></IonAlert>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle className="ion-text-center">BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol>
            {/* <InputControl value="mkg"/> */}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="ion-text-center">
              <IonInput
                label="Height"
                labelPlacement="floating"
                placeholder="Enter Your Height"
                ref={heightInputRef}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="ion-text-center">
              <IonInput
                label="Weight"
                labelPlacement="floating"
                placeholder="Enter Your Weight"
                ref={weightInputRef}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton onClick={calculate}>
              <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
              Calculate
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton onClick={resetInputs}>
              <IonIcon slot="start" icon={refreshOutline}></IonIcon>
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
        {calculateBmi ? <BMIResult result={calculateBmi} /> : null}
      </IonContent>
    </>
  );
};

export default BMICalculator;
