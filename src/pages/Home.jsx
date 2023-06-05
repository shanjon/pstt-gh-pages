
import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from "@cloudscape-design/components/app-layout";
 import  Container from "@cloudscape-design/components/container";
 import  Header from "@cloudscape-design/components/header";
 import HelpPanel from "@cloudscape-design/components/help-panel";
 import Box from "@cloudscape-design/components/box";
 import  TextContent from "@cloudscape-design/components/text-content";
 import SpaceBetween from "@cloudscape-design/components/space-between";


import ServiceNavigation from '../components/navigation/SideNavigation';
import TopNavigation from '../components/navigation/TopNavigation';

// This is not meant to be a template, rather it is the
// introduction page that you see upon loading the webserver.
export default function Homepage() {
  return (
    <div>
    <TopNavigation />
    <AppLayout
      headerSelector="#top-nav"
      navigation={<ServiceNavigation />} // Navigation panel content imported from '../components/ServiceNavigation.jsx'
      content={<Content />}
      tools={<Tools />}
      disableContentPaddings={true}
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
            <Container header={<Header>What is the Partner Solutions Factory?</Header>}>
              <div>
                  A universal framework designed to help partners consistently build complex industry solutions that meet the mandated quality bar for our customers, operated by partners running on AWS. It is focused on making the process of ideating, building, and selling complex industry solutions as frictionless as possible.
                  <br/><br/>
                  PSF drives partner solution building velocity that accelerates cloud adoption and delivers faster business outcomes for customers. PSF is the APO partner build motion (includes standard solution build model (workflow), guidance, blueprints, and enablement tools) for all partner solutions covering our Industry and Service aligned businesses.
              </div>
            </Container>
          </div>
          <div>
            <Container header={<Header>What value does it drive for partners?</Header>}>
              <div>
              Provides a direct intake mechanism for use cases driven by customer needs, with mechanisms to align a validated ecosystem through the technology stack, to leverage code, accelerators, and blueprints for build, and to leverage GTM templates to co-sell solutions. Additionally, AWS commits support resources during co-build to ensure solutions meet the high bar AWS has on architectures and services.
              </div>
            </Container>
          </div>
          <div>
            <h1></h1>
            <Container header={<Header>How will customers benefit?</Header>}>
              <div>
              Line-of-business customers will be able to easily purchase industry-grade solutions that solve use cases specific to their needs, enabling them to focus on strategic initiatives, transformation, and agility.
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
