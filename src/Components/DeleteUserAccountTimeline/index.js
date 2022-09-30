import React from 'react';
import Timeline from '../Timeline';
import deleteAccountSteps from './steps';

const DeleteUserAccountTimeline = () => {
    return <Timeline events={deleteAccountSteps} />;
};

export default DeleteUserAccountTimeline;
