import { useState } from 'react';

export default function chirp({ id, text }) {

    return(
        <div style={{ border: '1mm solid green', margin: '5mm' }}>
            <p>@{id}</p>
            <p>{text}</p>
        </div>
    )



}

