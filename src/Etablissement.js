import React from 'react';
import { Card } from 'semantic-ui-react';
 
const Etablissement = ({ properties })  => {
    const { nom,telephone,email } = properties;
    return (
        <Card>
            <Card.Content>
                <Card.Header>{nom}</Card.Header>
                <Card.Header>{telephone}</Card.Header>
                <Card.Header>{email}</Card.Header>
            </Card.Content>
        </Card>

 
)
}
 export default Etablissement;