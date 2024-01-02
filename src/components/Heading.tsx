import React from 'react'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold text-gray-100">
                {title}
            </div>
            <div className="font-light text-gray-100 mt-2">
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;