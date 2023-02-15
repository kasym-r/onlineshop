import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logo } from './assets';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { FirebaseDB } from './db/db';
import { RootState } from "./store/store"

const styles = {
  app: "text-center",
  app__h1: "text-red-500"
};

// const db = FirebaseDB();

function App() {
  const { getProducts } = FirebaseDB();
  const { products } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  }, [products]);

  return (
    <div className={styles.app}>
      <Header logo={logo} />
      <h1 className={styles.app__h1}>Hello Tailwind!</h1>
      <Main />
      {products?.map((item) => (
        <Card {...item} />
      ))}
      <Footer logo={logo} />
    </div>
  );
}

export default App;
