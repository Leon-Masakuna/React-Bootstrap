import { ThemeProvider } from "styled-components";
import "./App.css";
import { Container } from "./components/styles/Container.styled";
// import NavBar from "./components/NavBar";
// import OffcanvasExample from "./components/OffcanvasExample";
// import NewFile from "./components/NewFile";
import Header from "./components/Header";
import GlobalStyles from "./components/Global";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {/* <div className="mt-3"> */}
          {/* <OffcanvasExample />
      <NavBar />
      <NewFile /> */}
          <h1>Hello, I am learning styled components</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
