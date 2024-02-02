import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEtided: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}


export const InputTask: React.FC<InputTaskProps> = ({
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