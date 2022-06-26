# Spacecraft Inventory App

Amazing project that contains a Spacecraft Inventory where you can add various types of spacecrafts with different features to the Inventory. This is a serverlerss application that uses the following technology: React as Frontend Framework with Material UI and Firestore from Firebase for handling all the database.

The project uses Github Actions for the continous deployment with the tecnology of GitHub Pages in the following URL:
[Spacecraft Inventory App](https://sebastianabril.github.io/spacecraft-inventory-app/)

## Architecture

This applications uses a layer architecture that is divided into UI Layer and CORE Layer.

![Architecture of Spacecraft Diagram](./docs/img/architecture.png)

### UI

The UI folder is responsible for the user interaface, it was built using React and Material UI. UseState and useEffect hooks were used in order to control the behavior in the screen and ReactRouter for controlling all the Routes in the application, which are the following:

- `/`: go to `InvetoryScreen` by clicking in INVENTORY Button and displays a table with all the current items.
- `/new`: go to `DetailItemScreen` by clicking in NEW Button and displays a form where you can create a new item(thus a spacecraft) with its features.
- `/item/:id`: go to `DetailItemScreen` by clicking in a table row in `InventoryScreen`, you will find all the item information, besides two buttons: DELETE and UPDATE, you can delete the item or update it with new quantity information.

### Core

The CORE folder is responsible for having our services and our object model working properly. This folder contains all the logic and bussiness rules.

#### Model

![Inventory and Spacecraft Diagram](./docs/img/class-diagram.png)

- `Item`: this a class that contains all the information to be displayed in `InventoryScreen`, its attributes are: id, quantity, createAt and spacecraft.
- `Spacecraft`: this class's attributes
- `ShuttleVehicle`: This is the first list item.
- `UncrewedSpacecraft`: This is the first list item.\* \* `CrewedSpacecraft`: This is the first list item.

#### Service

This layer aloows to communciate wiht firestro and convert the simple objtec that are stroed into custom objects like Item, Stapce.bla bla. THis process uses a firestroe conveter call `itemConverteR`.

For the process 'toFirestore' we use the method toJSON that allows ud to convert from custom objects to simple obejcts. This methjdos is overwrinting in each subtypes like CroweSpace,. UNcreem, cargaeto.

For the process 'fromFirestore' we use the 'SpacecraftFactory' for creatng new obejcts

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
