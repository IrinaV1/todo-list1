import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}


export const InputTask: React.FC<InputTaskProps> = ({
    id,
    title,
    onDone,
    onEdited,
    onRemoved
}) => {

    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [value, setValue] = useState(title);
   
return(
    <div className={styles.InputTask}>
        <label className={styles.InputTaskLabel}>
            <input 
            type="checkbox" 
            disabled={isEditMode}
            checked={checked}
            className={styles.InputTaskChecked}
            onChange={(evt) => {
setChecked(evt.target.checked);
if (evt.target.checked) {
    onDone(id)
}

            }}
            />
            { isEditMode ? 
            (<input 
                className={styles.InputTaskEditTitle} 
                value={value} 
                onChange={(evt) => {
                    setValue(evt.target.value);
                }} 
                onKeyDown={(evt) => {
                    if(evt.key === 'Enter') {
                        onEdited(id, value);
                        setIsEditMode(false);
                    }
                }}
                />
                 ) : (
            <h3 className={styles.InputTaskTitle}>{title}</h3>
            )}
        </label>
  { isEditMode ? (
 <button
 aria-label='Save'
 className={styles.InputTaskSave}
onClick={() => {
onEdited(id, value);
setIsEditMode(false)
}}
 />
  ) : (
  <button
 aria-label='Edit'
 className={styles.InputTaskEdit}
onClick={() => {
setIsEditMode(true)
}}
 />
 )}
 <button 
 aria-label='Remove'
 className={styles.InputTaskRemove}
onClick={() => {
    if(confirm('Are you sure?')) {
        onRemoved(id);
    }
}}
 />
    </div>
)
};