import "./App.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./router/Router";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
