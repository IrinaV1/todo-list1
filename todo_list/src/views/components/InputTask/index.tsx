import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEtided: (id: string, value: string) => void;
    onRemoved: (id: string) => void;
}


export const InputPlus: React.FC<InputTaskProps> = ({
    id,
    title,
    onDone,
    onEtided,
    onRemoved
}) => {

   
return(
    <div className={styles.inputPlus}>
 
    </div>
)
};