import React from 'react';

const styles = {
  app: "w-4/5 text-center bg-red-300 h-[800px] hover:bg-blue-500 transition-all duration-500",
  h1: "text-red-500"
};

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Hello Tailwind!</h1>
    </div>
  );
}

export default App;
