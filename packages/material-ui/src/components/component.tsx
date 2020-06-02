import * as React from 'react';
import { IMaterialComponent } from '@iceworks/material-utils';
import * as styles from './component.module.scss';

export const MaterialComponent: React.FC<{
  dataSource: IMaterialComponent,
  onClick?: (dataSource: IMaterialComponent) => void,
}> = ({ dataSource, onClick }) => {
  function handleClick() {
    onClick && onClick(dataSource);
  }

  return (
    <div className={styles.container}>
      <div onClick={handleClick}>
        <h5 className={styles.title}>{dataSource.name}</h5>
        <p className={styles.desc}>{dataSource.description || dataSource.name}</p>
      </div>
      <div className={styles.actions}>
        <a
          href={dataSource.homepage}
          rel="noopener noreferrer"
          target="_blank"
          className={styles.button}
        >
          Document
        </a>
        <a
          className={styles.button}
          rel="noopener noreferrer"
          target="_blank"
          href={dataSource.repository}
        >
          Code
        </a>
      </div>
    </div>
  );
};