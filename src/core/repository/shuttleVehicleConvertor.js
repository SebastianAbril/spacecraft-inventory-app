import { ShuttleVehicle } from '../model/ShuttleVehicle';

export const shuttleVehicleConvetor = {
  toFirestore(shuttleVehicle) {
    return {
      name: shuttleVehicle.name,
      weight: shuttleVehicle.weight,
      tonsOfPropulsion: shuttleVehicle.tonsOfPropulsion,
      loadCapacity: shuttleVehicle.loadCapacity
    };
  },
  fromFirestore(snapshot, options): Post {
    const data = snapshot.data(options);
    return new ShuttleVehicle(data.name, data.weight, data.tonsOfPropulsion, data.loadCapacity);
  }
};
