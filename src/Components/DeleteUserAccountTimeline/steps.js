import React from 'react';
import { Image } from 'react-native';

const deleteAccountSteps = [
    {
        title: 'Demande de suppression',
        dayNumber: 1,
        icon: <Image source={require('../../Assets/checkvert.png')} />,
        description: [
            'E-mail de confirmation',
            'Délai de 30 jours de réflexion pour annuler',
        ],
    },
    {
        title: 'E-mail de rappel à J-7',
        dayNumber: 21,
        icon: <Image source={require('../../Assets/emailPetit.png')} />,
        description: [],
    },
    {
        title: 'Suppression définitive',
        dayNumber: 30,
        icon: <Image source={require('../../Assets/warningDelete.png')} />,
        description: ['E-mail de confirmation'],
    },
];

export default deleteAccountSteps;
