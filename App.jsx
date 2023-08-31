import AuthNavigator from "./src/Components/Auth/AuthNavigator";
import { AuthProvider } from "./src/Components/Context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}
