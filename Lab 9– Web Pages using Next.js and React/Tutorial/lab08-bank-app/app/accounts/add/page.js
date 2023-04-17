'use client'
import React, { useState } from 'react'

export default function Add() {
    const [file, setFile] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()

        console.log(file.name)
        const formData = new FormData();
        formData.append("myfile", file, file.name);
        // upload to /api/upload
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        console.log(await response.json());

        // console.log(file.filename);

    }

    return (
        <div>
            {/* upload a pdf file html form*/}
            {file && file.filename}
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={e => setFile(e.target.files[0])} />
                <input type="submit" value="Upload" />
            </form>
        </div>
    )
}

