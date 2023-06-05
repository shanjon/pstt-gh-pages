import React, { createRef, useState, useEffect } from 'react';
import ReactDOM, { useParams } from 'react-dom';
import AppLayout from "@cloudscape-design/components/app-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import HelpPanel from "@cloudscape-design/components/help-panel";
import Box from "@cloudscape-design/components/box";
import TextContent from "@cloudscape-design/components/text-content";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/space-between";
import ContentLayout from "@cloudscape-design/components/space-between";
import Pagination from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/space-between";
import Tabs from "@cloudscape-design/components/tabs";

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
                        <Container header={<Header>Build Hub Team Activities</Header>}>
                            <div>

                                <Tabs
                                    tabs={[
                                        {
                                            label: "Ideation",
                                            id: "first",
                                            content: <IdeationData />,
                                        },
                                        {
                                            label: "Build",
                                            id: "second",
                                            content: <BuildData/>
                                        },
                                        {
                                            label: "Validate",
                                            id: "third",
                                            content: "Third tab content area"
                                        },
                                        {
                                            label: "Publish",
                                            id: "fourth",
                                            content: "Fourth tab content area",
                                        }
                                    ]}
                                />
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

function IdeationData() {
    return (
        <div>
            <h3>Inputs (prerequisites)</h3><hr/>
            <ol>
                <li>Solution Definition Document (template provided in SIM ticket)</li>
                <li>Partner leadership support including development funding secured</li>
                <li>Partner solution owner available</li>
                <li>Partner technical team available</li>
                <li>Solution design document</li>
            </ol>




            <h3>Activities</h3><hr/>
            <ol>
                <li>Form "V-Team" with the right SAs needed for this solution</li>
                <li>Run build kickoff workshop (2-3 hours)</li>
                <ul>
                    <li>Review Inputs:</li>
                    <ul>
                        <li>Review the SIM submission</li>
                        <li>Review customer need</li>
                        <li>Review solution requirements</li>
                        <li>Review solution design proposal including architecture diagram</li>
                    </ul>
                    <li>Define MVP Solution and performance criteria</li>
                    <li>Define published solution capabilities and deployment/support method</li>
                    <li>Identify additional technical resources needed for build phase which may include:</li>
                    <ul>
                        <li>Public and internal technical resources (V-Team SAs will select these)</li>

                        <li>Introduction to additional partners</li>
                        <li>Introduction to internal AWS builder teams</li>
                        <li>Introduction to ProServe</li>
                    </ul>
                </ul>
            </ol>


            <h3>Outputs</h3><hr/>
            <ol>
                <li>Partner solution (ready for validation - through our team or partner internal team)</li>
            </ol>

            <h3>AWS SA Inputs and Goals</h3><hr/>
            <ol>
                <li>The SA inputs should (generally speaking) map to the following SA goals:</li>
                <li>Strategic Enablement</li>
            </ol>
            <br/>
            <h2>Resources</h2><hr/>
            <ol>
                <li><a href="https://aws.amazon.com/architecture/icons/" target='_blank'> AWS Architecture Icons</a></li>
            </ol>
        </div>
    );
}

function BuildData() {
    return (
        <div>
            <h3>Inputs (prerequisites)</h3><hr/>
            <ol>
                <li>Solution Definition Document (template provided in SIM ticket)</li>
                <li>Partner leadership support including development funding secured</li>
                <li>Partner solution owner available</li>
                <li>Partner technical team available</li>
                <li>Solution design document</li>
            </ol>




            <h3>Activities</h3><hr/>
            <ol>
                <li>Form "V-Team" with the right SAs needed for this solution</li>
                <li>Run build kickoff workshop (2-3 hours)</li>
                <ul>
                    <li>Review Inputs:</li>
                    <ul>
                        <li>Review the SIM submission</li>
                        <li>Review customer need</li>
                        <li>Review solution requirements</li>
                        <li>Review solution design proposal including architecture diagram</li>
                    </ul>
                    <li>Define MVP Solution and performance criteria</li>
                    <li>Define published solution capabilities and deployment/support method</li>
                    <li>Identify additional technical resources needed for build phase which may include:</li>
                    <ul>
                        <li>Public and internal technical resources (V-Team SAs will select these)</li>

                        <li>Introduction to additional partners</li>
                        <li>Introduction to internal AWS builder teams</li>
                        <li>Introduction to ProServe</li>
                    </ul>
                </ul>
            </ol>


            <h3>Outputs</h3><hr/>
            <ol>
                <li>Partner solution (ready for validation - through our team or partner internal team)</li>
            </ol>

            <h3>AWS SA Inputs and Goals</h3><hr/>
            <ol>
                <li>The SA inputs should (generally speaking) map to the following SA goals:</li>
                <li>Strategic Enablement</li>
            </ol>
            <br/>
            <h2>Build Resources</h2><hr/>
            <h3>Enablement & Training</h3><hr/>
            <ol>
                
                <li><a href="https://workshops.aws/" target='_blank'> AWS Workshops</a></li>
                <li><a href="https://www.aws.training/" target='_blank'> AWS Training and Certification</a></li>
            </ol>

            <h3>Developer Tools</h3><hr/>
            <ol>
                <li><a href="https://aws.amazon.com/developer/tools/" target='_blank'> AWS Developer Tools</a></li>
                <li><a href="https://aws.amazon.com/codewhisperer/" target='_blank'> Amazon CodeWhisperer</a></li>
            </ol>

            <h3>Sample Code Repos</h3><hr/>
            <ol>
                <li><a href="https://github.com/aws" target='_blank'> AWS (aws cli, aws cdk, chalice, etc.)</a></li>
                <li><a href="https://github.com/aws-samples" target='_blank'> AWS Samples</a></li>
                <li>A<a href="https://github.com/awslabs/" target='_blank'> WS Labs</a></li>
                <li><a href="https://github.com/aws-amplify" target='_blank'> AWS Amplify</a></li>
            </ol>

            <h3>Architecture</h3><hr/>
            <ol>
                <li><a href="AWS Architecture Center" target='_blank'> AWS Architecture Center</a></li>
                <li><a href="https://aws.amazon.com/architecture/well-architected" target='_blank'> AWS Well Architected Tools</a></li>
                <li><a href="AWS Well Architected Labs" target='_blank'> AWS Well Architected Labs</a></li>
            </ol>

            <h3>Published Content</h3><hr/>
            <ol>
                <li><a href="https://aws.amazon.com/blogs" target='_blank'> AWS Blogs</a></li>
            </ol>

            <h3>Partner Resources</h3><hr/>
            <ol>
                <li><a href="https://aws.amazon.com/blogs/apn/" target='_blank'> AWS Partner Network (APN Blogs)</a></li>
            </ol>

            <h3>AWS Services</h3><hr/>
            <ol>
                <li><a href="https://docs.aws.amazon.com/" target='_blank'> Service Documentation</a></li>
                <li><a href="https://www.honeycode.aws/" target='_blank'> Amazon Honeycode</a></li>
            </ol>

            <h3>Solutions</h3><hr/>
            <ol>
                <li><a href="https://aws.amazon.com/solutions/" target='_blank'> AWS Solutions Library</a></li>
            </ol>
        </div>
    );
}