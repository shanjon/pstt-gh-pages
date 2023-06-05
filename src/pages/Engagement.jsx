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
                        <Container header={<Header>Build Hub Team - Engagement</Header>}>
                            <div>
                                <br />
                                <b>Overview:</b> The partner build hub is a mechanism to request assistance from the partner solution technical team (PSTT) to help AWS partners design, build, validate and publish AWS solutions. We are part of the parter Service Acceleration Team. We enable internal AWS personnel and teams to request and get assistance with any of the 4 services we offer:
                                Build team can support end to end build process as well as indivisual build activites (see the list below) for detail.
                                <br /><br />
                                <div>
                                    <ul>
                                        <li><b>Ideation:</b> Working backwards from the customer, guide the partner to design solutions.</li>
                                        <li><b>Build:</b> Provide technical resources, guidance and even connections with other partners to build solutions.</li>
                                        <li><b>Validate:</b> Review and validate the solution architecture according to AWS Well-Architected principles.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                
                            <b>Engage our team: </b> Engage with our team via a single <a href="#" target='_blank'>  SIM ticket</a> where you will need to provide:
                            <br /><br />
                            <ol>
                                <li>AWS Team and Partner contact information</li>
                                <li>SFDC opportunity related to this solution</li>
                                <li>Select one or multiple of the 4 services</li>
                                <li>Attach Solution Design document (template will be provided). The purpose of this is to provide details of the customer challenge and solution requirements so our team is able to bring together the right set of resources to work on the engagement.</li>
                                <li>Validate that each of the pre-requisites are completed (details and guidance is provided in the sections below)</li>
                            </ol>

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

