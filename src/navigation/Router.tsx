import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ParticipantAppPage from '../pages/ParticipantAppPage';
import AdjudicatorAppPage from '../pages/AdjudicatorAppPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.landingPage()} element={<LandingPage />}>
          <Route
            path={appRoutes.participantSignUp()}
            element={<SignUpPage />}
          />
          <Route
            path={appRoutes.participantSignIn()}
            element={<SignInPage />}
          />

          <Route
            path={appRoutes.adjudicatorSignUp()}
            element={<SignUpPage />}
          />
          <Route
            path={appRoutes.adjudicatorSignIn()}
            element={<SignInPage />}
          />
        </Route>

        <Route
          path={appRoutes.participantApp()}
          element={<ParticipantAppPage />}
        ></Route>

        <Route
          path={appRoutes.adjudicatorApp()}
          element={<AdjudicatorAppPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
