import React from 'react';
import AppLayout from "@cloudscape-design/components/app-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import HelpPanel from "@cloudscape-design/components/help-panel";
import Box from "@cloudscape-design/components/box";
import TextContent from "@cloudscape-design/components/text-content";
import SpaceBetween from "@cloudscape-design/components/space-between";


import ServiceNavigation from '../components/navigation/SideNavigation';
import TopNavigation from '../components/navigation/TopNavigation';

export default () => {
  return (
    <div>
      <TopNavigation />
      <AppLayout
        navigation={<ServiceNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        content={<Content />}
        contentType="default"
        toolsHide={true}
      />
    </div>
  );
}

const Content = () => (
  <div>
    <TextContent>
      <Box margin="xxl" padding="l">
        <SpaceBetween size="l">
          <div>
            <Container header={<Header>Build Hub Team</Header>}>
              <div>

                <img src="./images/build-process.png" className="intro-screenshot" alt="screenshot" />
                <br />
                <b>Goal: <i>"Our goal is to  enable partners  build solutions consistently across all industry verticals that meet the mandated aws quality bar"</i></b>
                <br /><br />
                We are responsible  in providing partners with design review, technical validation, solution design and architecture, technical enablement, validating solution against  Foundational Technical Review / well architected pillars, building proof of concept on a required basis and publishing the solution to AWS Solution Library / Market Place.
                <br /><br />
                We are also responsible for building reusable assets like foundational building blocks, reusable frameworks, blueprints, etc. These assets will be used by our partners while building industry vertical solutions. These reusable assets will enable partners to focus on primary business drivers rather than spending time on the repeatable process. These assets will enable PSF to scale and speed to market solutions.

              </div>
            </Container>

          </div>
        </SpaceBetween>
      </Box>
    </TextContent>
  </div>
);

const Tools = () => (
  <HelpPanel header={<h2>Help panel</h2>}>
    <p>Help content goes here</p>
  </HelpPanel>
);

