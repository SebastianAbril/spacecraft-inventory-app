import { useEffect, useState } from 'react';
import {db} from '../../firebase';
import {ShuttleVehicle} from '../../core/model/ShuttleVehicle';
import {shuttleVehicleConvetor} from '../../core/repository/shuttleVehicleConvertor';

export const InventoryScreen  = () => {

    const [items, setItems] = useState([]);

    const getSpaceships = async() => {
        const querySnapshot = await db.collection('ships').withConverter(shuttleVehicleConvetor).get();
        const spacecrafts = [];
        querySnapshot.forEach((document) => {
            spacecrafts.push(document.data());
        });
    
        setItems(spacecrafts);
    };

    const addSpaceship = async () => {
        const saturnoV = new ShuttleVehicle("SaturnoV",2900,3500,118);

        await db.collection('ships').withConverter(shuttleVehicleConvetor).doc().set(saturnoV);

        getSpaceships();
    };

    useEffect(() => {getSpaceships();}, []);

    return (
        <div>
            <button onClick={addSpaceship}>Add SpaceShip</button>
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantaty</th>
                    </tr>
                    {items && items.map((item) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.weight}</td>
                            </tr>
                        );
                    })}
            </table>
        </div>
    )
};