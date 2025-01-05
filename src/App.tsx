import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center text-white bg-primary">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
