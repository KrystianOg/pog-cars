import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
import {COLORS} from '../../colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const PaginationContainer= styled(Pagination)`
    color: ${COLORS.BlueGreen};
    margin: 1rem;
`