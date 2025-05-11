import React from 'react';
import AddPublication from '../components/AddPublication';
import PublicationList from '../components/PublicationList';

function PublicationPage() {
    return (
        <div>
            <h2>Publication</h2>
            <AddPublication />
            <PublicationList />
        </div>
    );
}

export default PublicationPage;