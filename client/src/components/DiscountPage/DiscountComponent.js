import React from 'react';
import './DiscountComponent.css'
import { Button, ButtonLink} from './DiscountComponents'


const DiscountComponent = (props) => {

    //let d = new Date(props.account.birth_date)

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div className="discount-container">
            <table>
            <tr>
            <th colspan="5">Aktualne przeceny</th>
            </tr>
            <tr>
            <th WIDTH="150">klient</th>
            <th WIDTH="200">auto</th>
            <th WIDTH="150">wartosc przeceny</th>
            <th WIDTH="250">kod przeceny</th>
            <th WIDTH="250">wazna do</th>
            </tr>

            <tr>
            <td WIDTH="150">klient</td>
            <td WIDTH="200">auto</td>
            <td WIDTH="150">wartosc przeceny</td>
            <td WIDTH="250">kod przeceny</td>
            <td WIDTH="250">wazna do</td>
            </tr>
            </table>

            <br></br>

            <hr align="left" width="90%"></hr>

            <br></br>

            <table>
            <tr>
            <th colspan="5">Nieaktualne przeceny</th>
            </tr>
            <tr>
            <th WIDTH="150">klient</th>
            <th WIDTH="200">auto</th>
            <th WIDTH="150">wartosc przeceny</th>
            <th WIDTH="250">kod przeceny</th>
            <th WIDTH="250">wazna do</th>
            </tr>

            <tr>
            <td WIDTH="150">klient</td>
            <td WIDTH="200">auto</td>
            <td WIDTH="150">wartosc przeceny</td>
            <td WIDTH="250">kod przeceny</td>
            <td WIDTH="250">wazna do</td>
            </tr>
            </table>

            <Button>
                <ButtonLink to='/account'>Powrót na stronę główną</ButtonLink>
            </Button>
        </div>
    )
};

export {DiscountComponent}