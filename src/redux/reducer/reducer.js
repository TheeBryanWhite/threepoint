import { types } from "../constants/types";
const initialState = {
  activeSlide: 0,
  activeTeam: 0,
  activeWork: 0,
  footerVisible: false,
  headerVisible: false,
  inactiveSlide: null,
  inactiveTeam: null,
  inactiveWork: null,
  menuOpen: false,
  slideDirection: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.SET_ACTIVE_SLIDE:
      return { 
        ...state, 
        activeSlide: action.payload
    }

    case types.SET_ACTIVE_TEAM:
      return { 
        ...state, 
        activeTeam: action.payload
    }
    
    case types.SET_ACTIVE_WORK:
      return { 
        ...state, 
        activeWork: action.payload
    }

    case types.SET_FOOTER_STATUS:
      return { 
        ...state, 
        footerVisible: action.payload
    }

    case types.SET_HEADER_STATUS:
      return { 
        ...state, 
        headerVisible: action.payload
    }

    case types.SET_INACTIVE_SLIDE:
      return { 
        ...state, 
        inactiveSlide: action.payload
    }

    case types.SET_INACTIVE_TEAM:
      return { 
        ...state, 
        inactiveTeam: action.payload
    }

    case types.SET_INACTIVE_WORK:
      return { 
        ...state, 
        inactiveWork: action.payload
    }

    case types.SET_MENU:
      return { 
        ...state, 
        menuOpen: action.payload
    }

    case types.SET_SLIDE_DIRECTION:
      return { 
        ...state, 
        slideDirection: action.payload
    }
      
    default:
      return {
        ...state
      }
  }
};