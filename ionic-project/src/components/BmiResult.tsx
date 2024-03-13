import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import {IonRow, IonCol, } from '@ionic/react';

const BMIResult: React.FC<{result: number}> = props => {
  console.log();
  return (
    <>
      <IonRow>
        <IonCol>
            <IonCard>
                <IonCardContent className="ion-text-center">
                    <h2>Your Body-Mass-Index</h2>
                    <h2>{props.result.toFixed(2)}</h2>
                </IonCardContent>
            </IonCard>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BMIResult;
