import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
