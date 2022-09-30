import React from 'react';
import Timeline from '../Timeline';
import deleteAccountSteps from './steps';

const DeleteUserAccountTimeline = () => {
    console.log('DEBUG', deleteAccountSteps);
    return <Timeline events={deleteAccountSteps} />;
};

export default DeleteUserAccountTimeline;
