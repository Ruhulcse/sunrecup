import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { multiStepContext } from '../context/FormDataProvider';

const Privateroute = ({children}) => {
    const {formdata} = useContext(multiStepContext)
    if (!formdata) {
        return children;
      }
    
     

      return <Navigate to="/" />;
  
}

export default Privateroute