import styles from './Example.module.scss';

export function Example() {
  console.log(styles);
  return (
    <div>
      <h1>Модульный scss</h1>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam
        harum exercitationem nostrum quisquam. Molestiae quibusdam modi quaerat
        quae libero.
      </p>
    </div>
  );
}
