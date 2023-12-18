import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.js";
import AuthLayout from "./_auth/AuthLayout.js";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm.jsx";
import RootLayout from "./_root/RootLayout.js";
import { Home, Explore } from "./_root/pages";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
