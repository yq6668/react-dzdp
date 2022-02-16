import { ActionType } from './context'

export default function city(state = "无锡", action: ActionType) {
    switch (action.type) {
        case 'CHANGE':
            return action.city
            break;
        default:
            return state;
    }
}