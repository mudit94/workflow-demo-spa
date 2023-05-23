import HelloName from '../components/HelloName';
import styles from '../styles/helloName.module.css';
export async function getServerSideProps() {
  const name = process.env.NAME || 'Default Name';
  const test = process.env.TEST || 'Default Test';
    const testbymudit = process.env.MUDITTEST || 'Default Test';
  return { props: { name, test,testbymudit } };
}

export default function Index({ name, test,testbymudit }: { name: string, test: string,testbymudit: string }) {
  return <div className={styles.center}>
    <HelloName name={`NAME : ${name}`} />
    <HelloName name={`TEST : ${test}`} />
    <HelloName name={`MUDITTEST : ${testbymudit}`} />
  </div>;
}
