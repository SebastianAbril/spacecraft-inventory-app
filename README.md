# Spacecraft Inventory App

Amazing project that contains a Spacecraft Inventory where you can add various types of spacecrafts with different features to your Inventory. This is a serverlerss application that uses the following technology: React as Frontend Framework with Material UI and Firestore from Firebase for handling all the database.

The project uses Github Actions for the continous deployment with the tecnology of GitHub Pages in the following URL:
[Spacecraft Inventory App](https://sebastianabril.github.io/spacecraft-inventory-app/)

## Architecture

This applications uses a layer architecture that is divided into UI Layer and CORE Layer.

![Architecture of Spacecraft Diagram](./docs/img/architecture.png)

### UI

The UI folder is responsible for the user interaface, it was built using React and Material UI. UseState and useEffect hooks were used in order to control the behavior in the screen and ReactRouter for controlling all the Routes in the application, which are the following:

- `/`: go to `InvetoryScreen` by clicking in INVENTORY Button and displays a table with all the current items.
- `/new`: go to `DetailItemScreen` by clicking in NEW Button and displays a form where you can create a new item(thus a spacecraft) with its features.
- `/item/:id`: go to `DetailItemScreen` by clicking in a table row at `InventoryScreen`, you'll find all the item's information and two buttons: DELETE and UPDATE, you can delete the item or update its quantity information only.

### Core

The CORE folder is responsible for having our services that comunnicates with Firestore and our object model of the Spacecrafts. This folder contains all the logic and bussiness rules.

#### Model

![Inventory and Spacecraft Diagram](./docs/img/class-diagram.png)

- `Item`: this a class that contains all the information to be displayed in `InventoryScreen`, its attributes are: id, quantity, createAt and spacecraft.
- `Spacecraft`: It's the base class for all the diferente types of spacecrafts available, its attributes are: name and weight. The methods of the class are `getType()` which returns the name of the spacecraft and `toJSON()`, that converts the custom objects into simple objects to handle Firestore's storange.
- `ShuttleVehicle`: the `ShuttleVehicle` is used to launch a load into space, this class extends from `Spacecraft` class and its atrributes are: tonsOfPropulsion, loadCapacity and load. The methods are `addLoad()` , `releaseLoad()` , `getType()` and `toJSON`.The last two methods are overwrited in order to change their behavior.
- `UncrewedSpacecraft`: the `UncrewedSpacecraft` is used for exploration purposes in the space, this class extends from `Spacecraft` class and its atrributes are: speed and tonsOfPropulsion. The methods are `activateExplorationMode()` , `getType()` and `toJSON`.The last two methods are overwrited in order to change their behavior.
- `CrewedSpacecraft`: its purpose is to send human beings into space for repair, maintenance or research tasks, this class extends from `Spacecraft` class and its atrributes are: speed and crewCapacity. The methods are `activateEmergencyMode()` , `getType()` and `toJSON`.The last two methods are overwrited in order to change their behavior.

#### Service

This layer exposes the services that allow us to communicate with Firestore. It contains `inventoryService`, that has following functions:

- `createItem`: creates a new item in the Firestore database.
- `getItems`: obtain an array of all the items that are in the Firestore collection, also it filters them according to the searched value.
- `getItemById`: obtain a specific item according to its id.
- `updateItemQuantityById`: updates the Quantity of an existing item.
- `deleteItemById`: deletes an existing item.

Another file is `itemConverter` which is an object that transforms simple objects into custom objects and vice versa. The functions used are:

- `toFirestore`: we use the method `toJSON()`to convert from custom objects to simple obejcts. This method is being overwrited in each of the sublcasses as `CrewedSpacecraft`, `UncrewedSpaceCraft` and `ShuttleVehicle`.

- `fromFirestore`: we use `SpacecraftFactory` which purpose is to create objects of the same type (`Spacecraft`)

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
