import React, { useState } from 'react';

const useDeleteUserAccount = () => {
    const [deleteRequestState, setDeleteRequestState] = useState(false);
    const askForDeleteRequest = () => {
        setDeleteRequestState(true);
    };

    const cancelDeleteRequest = () => {
        setDeleteRequestState(false);
    };

    return { askForDeleteRequest, cancelDeleteRequest, deleteRequestState };
};

export default useDeleteUserAccount;
