import * as React from "react";
import ACards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";

export default () => {
  return (
    <ACards
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.name}`,
        selectionGroupLabel: "Item selection"
      }}  
      cardDefinition={{
        header: item => (
          <Link fontSize="heading-m">{item.name}</Link>
        ),
        sections: [
          {
            id: "description",
            header: "Description",
            content: item => item.description
          },
          {
            id: "vertical",
            header: "Vertical",
            content: item => item.vertical
          },
          {
            id: "partner",
            header: "Partner",
            content: item => item.partner
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 4 }
      ]}
      items={[
        {
          name: "GenAI Accelerator",
          alt: "IoT",
          description: "Get started with GenAI.",
          vertical: "IoT",
          partner: "PSF-Internal"
        },
        {
          name: "GenAI Production ML Ops",
          alt: "Dev-IDE",
          description: "Full ML Ops pipeline for GenAI model training.",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Third",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Fourth",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Fifth",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Sixth",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Seventh",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        },
        {
          name: "Solution name",
          alt: "Eighth",
          description: "Short description",
          vertical: "Vertical",
          partner: "partnerPrimary"
        }
      ]}
      loadingText="Loading resources"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
    />
  );
}