import { Navbar } from "../../components/Navbar";
import type { Route } from "./+types/home";
import React from 'react'

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
        </div>
    )
}

export default Home