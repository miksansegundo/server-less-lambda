
import * as apis from './lib/api'
import {parser} from '../parser'

export const api = (event, context, cb) => {
    const eventParsed = parser(event)
    const path = event.path;

    switch (path) {
        case '/api/hotels':
            apis.getAll(eventParsed, context)
            break
        case '/api/availability':
            apis.getAll(eventParsed, context)
            break
        default:
            context.fail('Invalid api call')
    }
}
