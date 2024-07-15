import styles from './Nav.module.css';
import IcSharpMenu from './(icon)/IcSharpMenu';
import ChatProcessing from './(icon)/ChatProcessing';
import Button from './Button';

export default function Nav() {
    const buttonText = "Log In";
  return (
    <nav className={styles.container}>
        <IcSharpMenu className={styles.icon} />
        <ChatProcessing className={styles.chatProcessing} />
        <Button label={buttonText} />
    </nav>
  );
}
