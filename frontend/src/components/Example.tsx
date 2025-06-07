import React from 'react';

interface ExampleProps {
    title: string;
    description?: string;
}

const Example: React.FC<ExampleProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
};

export default Example;