import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import Sidemenu from '../src/ui-components/Sidemenu.jsx';
import Header from '../src/ui-components/Header.jsx';
import { Flex, View } from '@aws-amplify/ui-react';

// Dynamically import JobsList and JobsCreate components
const JobsList = dynamic(() => import('./JobsList'));
const JobsCreate = dynamic(() => import('./JobsCreate'));

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <BrowserRouter>
          <Flex>
            <Sidemenu height="100vh" position="fixed" />
            <Flex direction="column" width="100vw" grow={1} paddingLeft={67}>
              <Header />
              <View grow={1}>
                <Routes>
                  <Route path="/" element={<JobsList />} />
                  <Route path="/createjob" element={<JobsCreate />} />
                </Routes>
              </View>
            </Flex>
          </Flex>
        </BrowserRouter>
      )}
    </>
  );
};

export default Home;
