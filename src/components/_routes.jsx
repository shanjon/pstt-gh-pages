import React from "react";
import { BrowserRouter,Switch, Route, Routes } from "react-router-dom";

import Homepage from '../pages/Home.jsx';
import AboutPage from '../pages/About.jsx';
import EngagementPage from "../pages/Engagement.jsx";
import ActivitiesPage from "../pages/Activities.jsx";
import AssetsPage from "../pages/Assets.jsx";
import AcceleratorsPage from "../pages/Accelerators.jsx";



const RoutesPage = () => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/engagement" component={EngagementPage} />
            <Route exact path="/activities" component={ActivitiesPage} />
            <Route exact path="/assets" component={AssetsPage} />
            <Route exact path="/accelerators" component={AcceleratorsPage} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default RoutesPage;