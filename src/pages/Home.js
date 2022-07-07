import React from 'react'
import Apropo from '../components/Apropo'
import Cours from '../components/Cours'
import Formatrise from '../components/Formatrise'
import DescriptionSection from '../components/DescriptionSection'
const Home = () => {
    return (
        <div>
            <DescriptionSection />
            <Apropo />
            <Formatrise />
            <Cours />
            <br /><br />

        </div>
    )
}

export default Home
