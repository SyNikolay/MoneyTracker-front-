import React from 'react';

import { Navigate } from 'react-router-dom';
import { useUser } from '../store/UserStore';

const PrivateComponent = (children: any) => {
  const isAuth = useUser((state) => state.isAuth);

  if (isAuth === false) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default PrivateComponent;
