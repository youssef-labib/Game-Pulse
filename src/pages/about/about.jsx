import React from 'react';
import { useParams } from 'react-router-dom';

const AboutPage = () => {

    const {id} = useParams()
    return (
        <div>
            <h1>Hello {id} from about</h1>
        </div>
    );
};

export default AboutPage;