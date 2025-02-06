import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Simuler RootNavigator avec quelques pages
const Home = () => <PageContainer>Bienvenue sur Timeless Flow</PageContainer>;
const Login = () => <PageContainer>Connexion</PageContainer>;
const Dashboard = () => <PageContainer>Tableau de bord</PageContainer>;

// Styles
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 24px;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

// Monter l'application React
const root = createRoot(document.getElementById("root"));
root.render(<App />);
