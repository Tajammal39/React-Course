import Header from "./components/Header";
import "./App.css";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/contact-form/ContactForm";
const App = () => {
  return (
    <div>
      <Header />;
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 72px)",
        }}
      >
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
