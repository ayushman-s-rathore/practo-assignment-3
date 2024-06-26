
import React, { useEffect } from 'react';

const ErrorComponent = () => {
    useEffect(() => {
      throw new Error('This is a test error for Sentry!');
    }, []);
  
    return(
      <div>This component has an error. </div>
    )
  }

export default ErrorComponent;
