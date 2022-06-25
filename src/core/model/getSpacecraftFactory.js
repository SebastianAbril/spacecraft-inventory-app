import { ShuttleVehicle } from './ShuttleVehicle';
import { CrewedSpacecraft } from './CrewedSpacecraft';
import { UncrewedSpacecraft } from './UncrewedSpacecraft';

export const getSpacecraftFactory = (
  type,
  { name, weight, speed, tonsOfPropulsion, loadCapacity, crewCapacity }
) => {
  switch (type) {
    case 'ShuttleVehicle':
      return new ShuttleVehicle(name, weight, tonsOfPropulsion, loadCapacity);
    case 'CrewedSpacecraft':
      return new CrewedSpacecraft(name, weight, speed, crewCapacity);
    case 'UncrewedSpacecraft':
      return new UncrewedSpacecraft(name, weight, speed, tonsOfPropulsion);
    default:
      throw new Error('No type found:' + type);
  }
};
