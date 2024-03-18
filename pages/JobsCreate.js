import React, { useEffect, useState } from 'react';
import { Flex } from '@aws-amplify/ui-react';

const JobsList = () => {
    const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
        { domLoaded && (
            <Flex>
                <h1>
                    Hello this is create window
                </h1>
            </Flex>
        )}
    </>
  );
};

export default JobsList;
