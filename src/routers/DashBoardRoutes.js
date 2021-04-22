import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}