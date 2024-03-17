import { Routes, Route, Navigate } from "react-router-dom";

import PlanForm from "./pages/PlanForm";
import UserForm from "./pages/UserForm";
import AddonForm from "./pages/AddonForm";
import Finish from "./pages/Finish";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/plan" element={<PlanForm />} />
        <Route path="/addons" element={<AddonForm />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </>
  );
}

export default App;
