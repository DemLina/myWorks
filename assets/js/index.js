import {header} from './components/header';
import {heroSlick} from './components/hero-slider';
import {testimonialsSlick} from './components/testimonials-slick';
import {imgSlick} from './components/img-with-description-slider'
import {accordion} from './components/accordion'
import ModalContentWindow from "./components/ModalWindow/ModalContentWindow";
import ModalWindow from "./components/ModalWindow/ModalWindow";


export function runAfterDomLoad() {
    header()
    heroSlick()
    testimonialsSlick()
    imgSlick()
    accordion()
    new ModalWindow(ModalContentWindow)
}
