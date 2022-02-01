import React from 'react';
import './FAQComponent.css'
import { Button, ButtonLink} from './FAQComponents'


const FAQComponent = (props) => {
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div className="FAQ-container">


            <Button>
                <ButtonLink to='/FAQ'>Powrót na stronę główną</ButtonLink>
            </Button>
        </div>
    )
};

export {FAQComponent}