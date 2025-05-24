import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayouts from "../Layouts/DashBoardLayouts";
import Intro from "../pages/dashboard/Intro";
import Counter from "../pages/dashboard/Counter";
import Calculator from "../pages/dashboard/Calculator";
import TodoList from "../pages/dashboard/TodoList";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayouts />}>
        <Route path="/dashboard/intro" element={<Intro />} />
        <Route path="/dashboard/counter" element={<Counter />} />
        <Route path="/dashboard/calc" element={<Calculator />} />
        <Route path="/dashboard/todo-list" element={<TodoList />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}