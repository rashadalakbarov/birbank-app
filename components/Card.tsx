import React from 'react'

// components

interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

const Card = ({title, children}:CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
      {title && (
        <h2 className="text-lg font-medium text-gray-500 mt-2">{title}</h2>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  )
}

export default Card