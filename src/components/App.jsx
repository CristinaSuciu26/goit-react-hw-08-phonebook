import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './shared-layout/SharedLayout';
import RegisterForm from './pages/register-form/RegisterForm';
import LoginForm from './pages/login-from/LoginForm';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
