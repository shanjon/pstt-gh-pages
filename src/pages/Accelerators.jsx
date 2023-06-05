import React from 'react';
// import ReactDOM, { useParams } from 'react-dom';
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import TextContent from "@cloudscape-design/components/text-content";
import SpaceBetween from "@cloudscape-design/components/space-between";
// import HelpPanel from "@cloudscape-design/components/help-panel";clea
import Grid from "@cloudscape-design/components/grid";
import Input from "@cloudscape-design/components/input";
import ServiceNavigation from '../components/navigation/SideNavigation';
import TopNavigation from '../components/navigation/TopNavigation';
import ACards from '../components/common/ACards'; 

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
        <div>
          <Grid className="custom-home__header" disableGutters={true}>
            <Box margin="xxl" padding={{ vertical: 'xl', horizontal: 'l' }}>
              <div className="custom-home__header-title">
                <Box fontSize="heading-xl" fontWeight="bold" color="inherit">
                  Solution Accelerators
                </Box>
              </div>
              <Input
                type="search"
                placeholder="Search"
                ariaLabel="Search"
          />
            </Box>
          </Grid>
        </div>
  
        <Box margin="xxl" padding="l">
          <SpaceBetween size="l">
            <div>
                <ACards /> 
            </div>
          </SpaceBetween>
        </Box>
      </TextContent>
    </div>
  );