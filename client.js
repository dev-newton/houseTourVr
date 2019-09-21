// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot("HouseTourVR", {
  //     /* initial props */
  //   }),
  //   r360.getDefaultSurface()
  // );

  const buttonsPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);
  buttonsPanel.setAngle(
    -0.6, //left or right -ve/left +ve/right
    0.1 //top or bottom +ve/top -ve/bottom
  );

  r360.renderToSurface(
    r360.createRoot("ConnectedButtonInfoPanel", {
      /* initial props */
    }),
    buttonsPanel
  );

  const infoPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);
  infoPanel.setAngle(
    0.6, //left or right -ve/left +ve/right
    0.1 //top or bottom +ve/top -ve/bottom
  );

  r360.renderToSurface(
    r360.createRoot("ConnectedHouseInfoPanel", {
      /* initial props */
    }),
    infoPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_front_door.jpg"));
}

window.React360 = { init };
