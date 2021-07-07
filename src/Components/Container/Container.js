import { div } from 'prelude-ls';
import React from 'react';
import styles from  './Container.module.css';

console.log(styles);

const Container = ({children}) => <div className={styles.Container}>{children}</div>;

export default Container;