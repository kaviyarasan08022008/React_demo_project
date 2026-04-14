import React from 'react'
import SideBar from '../components/sideBar';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import TitleCard from '../components/TitleCard';
import FormCard from '../components/FormCard';
import Activity from '../components/Activity';

function MainPage() {
    return (
        <div className='flex bg-blue-50'>
            <div>
                <SideBar />
            </div>
            <div className='w-full'>
                <NavBar />
                <div>
                    <Cards />
                </div>
                <div>
                    <TitleCard />
                </div>
                <div>
                    <FormCard />
                </div>
                <div>
                    <Activity />
                </div>
            </div>
        </div>
    )
}

export default MainPage;
