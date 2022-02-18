// import Home from './components/Home.svelte';
import Geom from './components/GeomCalcu.svelte'
import Physik from './components/Physik.svelte'

export default {
    //Exaxt path
    '/': Geom,

    '/physik': Physik,
    '/physik/*': Physik,
}