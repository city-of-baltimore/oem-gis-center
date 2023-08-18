# oem-gis-center
Access the deployed app here: https://city-of-baltimore.github.io/oem-gis-center/. Enable popups to allow the Esri login page to show.

## Instructions
- Adding Layers: Add layers to the map using the Layers section to the left of the page. Browse categories of layers using the navigation tabs,
  or search for individual layers using the search dropdown. Click on the + button to add a layer.
- Adding Events: Events are preloaded groups of layers that can be used to easily display large amounts of information.
  Add events to the map using the Events section in the top left of the page. Search for individual events using the search dropdown,
  or click the arrow buttons inside the search dropdown to view what layers belong to events.
- Managing Layers: Layers added to the map will appear in the Current Layers section. Click on a list item to toggle the layer visibility,
  or use the menu options to explore options such as removing a layer, editing a layer's style, reordering a layer, or viewing the legend.
- Managing Events: Added events will appear in the Events section below the search dropdown. Click on the X button to remove the event from the map.
  If all layers belonging to an event are removed from a map, the events will also be automatically removed from this section.
- Saving New Events: To create a new events, add all desired layers to the map, then click the Save as New Event button at the bottom of the page.
  The layers will be saved in the current order as they appear in the Current Layers section. Events will be saved globally and will be seen by all other dashboard users.
- Additional Functionalities: The following features are not currently publicly available: adding new layers, deleting layers, or deleting/renaming events.
  Use the [OEM Database Config app](https://github.com/city-of-baltimore/oem-gis-center-database) to carry out these actions.

## Minor Edits
Minor code and text edits can usually be made directly by going to the ./cdn/x/config.json file or the ./cdn/x/widgets/oem-dashboard/dist/runtimewidget.js files.
