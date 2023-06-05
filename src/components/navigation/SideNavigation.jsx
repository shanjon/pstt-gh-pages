import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { withRouter } from 'react-router-dom';


function ServiceNavigation(props) {
  // If the provided link is empty, do not redirect pages
  function onFollowHandler(ev) {
    ev.preventDefault();
    if (ev.detail.href) {
      props.history.push(ev.detail.href.substring(1));
    }
  }

  return (
    <SideNavigation
      header={{ text: 'PSF-Build', href: '#' }}
      items={items}
      activeHref={`#${props.location.pathname}`}
      onFollow={onFollowHandler}
    />
  );
}

  
      const items=[
        { type: "link", text: "Home", href: "/" },
        { type: "link", text: "About Us", href: "#/about" },
        { type: "link", text: "Engagement", href: "#/engagement" },
        { type: "link", text: "Activities ", href: "#/activities" },
        { type: "divider" },
        { type: "link", text: "Build Assets", href: "#/assets" },
        { type: "link", text: "Solution Blueprints", href: "#/blueprints" },
        { type: "link", text: "Solution Accelerators", href: "#/accelerators" },
        { type: "link", text: "Interlinks", href: "#/interlinks" },
        { type: "divider" },
        { type: "link", text: "Contact Us", href: "#/contact" },
        { type: "divider" },
        {
          type: "link",
          text: "Documentation",
          href: "https://w.amazon.com/bin/view/AWS/Teams/Partner_Solutions/SA/IoT/PSFBuild",
          external: true
        }
      ];

      export default withRouter(ServiceNavigation);