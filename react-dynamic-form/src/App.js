import Form from "./components/Form";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2937",
      white: "#ffffff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
  },
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
