//@flow
import * as React from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles

type Props = {};

type State = {};

class Button extends React.Component<Props, State> {
	render() {
		return <button className={styles.button}> Test Button</button>;
	}
}

export { Button };
