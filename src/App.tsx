import React, { useEffect } from 'react';
import { logo } from './assets';
import Header from './components/Header';
import { FirebaseDB } from './db/db';

const styles = {
  app: "text-center",
  app__h1: "text-red-500"
};

const db = new FirebaseDB();

function App() {

  useEffect(() => {
    //@ts-ignore
    db.getProducts();
  }, []);

  return (
    <div className={styles.app}>
      <Header logo={logo} />
      <h1 className={styles.app__h1}>Hello Tailwind!</h1>
    </div>
  );
}

export default App;
