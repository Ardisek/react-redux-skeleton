import React from 'react';

export const renderField = ({ input, label, content, placeholder, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={placeholder} value={content} className="field" />
            {touched && (error && <span className="red">{error}</span>)}
        </div>
    </div>
)

export const textArea = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textArea {...input} type={type} placeholder={placeholder} className="textarea" />
            {touched && (error && <span className="red">{error}</span>)}
        </div>
    </div>
)