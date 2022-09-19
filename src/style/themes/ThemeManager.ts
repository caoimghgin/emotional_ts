import { light as wsj_light, dark as wsj_dark } from './wsj'
import { light as mw_light, dark as mw_dark } from './mw'
import { light as bar_light, dark as bar_dark } from './bar'
import { light as mg_light, dark as mg_dark } from './mg'

export const ThemeManager = (theme: number, mode: boolean) => {

    switch(theme) {
        case 0:
          return (mode ? wsj_light : wsj_dark)
        case 1:
          return (mode ? mw_light : mw_dark)
        case 2:
          return (mode ? bar_light : bar_dark)        
        case 3:
            return (mode ? mg_light : mg_dark)                
        default:
            return wsj_light

      }


}