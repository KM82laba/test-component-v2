import React, { useEffect, useState } from 'react';
import { Flex } from '@aws-amplify/ui-react';
import BodyJobCreate from '../src/ui-components/BodyJobCreate.jsx';


const JobsList = () => {
    const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
        { domLoaded && (
            <BodyJobCreate/>
        )}
    </>
  );
};

export default JobsList;
