import React from 'react';
import Loadable from 'react-loadable';
import LoadingPage from 'app/components/LoadingPage';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <LoadingPage />,
  delay: 500, // Avoiding Flash Of Loading Component
  timeout: 10000, // Timing out when the loader is taking too long
});