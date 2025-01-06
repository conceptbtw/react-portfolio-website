import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="min-h-svh center flex-col text-white bg-[url('/bg.svg')] bg-center bg-cover">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
