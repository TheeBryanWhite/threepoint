import { types } from "../constants/types";

export const setActiveSlide = (data) => (dispatch) => {
  dispatch({
    type: types.SET_ACTIVE_SLIDE,
    payload: data,
  })
}

export const setActiveTeam = (data) => (dispatch) => {
  dispatch({
    type: types.SET_ACTIVE_TEAM,
    payload: data,
  })
}

export const setActiveWork = (data) => (dispatch) => {
  dispatch({
    type: types.SET_ACTIVE_WORK,
    payload: data,
  })
}

export const setFooterStatus = (data) => (dispatch) => {
  dispatch({
    type: types.SET_FOOTER_STATUS,
    payload: data,
  })
}

export const setHeaderStatus = (data) => (dispatch) => {
  dispatch({
    type: types.SET_HEADER_STATUS,
    payload: data,
  })
}

export const setInactiveSlide = (data) => (dispatch) => {
  dispatch({
    type: types.SET_INACTIVE_SLIDE,
    payload: data,
  })
}

export const setInactiveTeam = (data) => (dispatch) => {
  dispatch({
    type: types.SET_INACTIVE_TEAM,
    payload: data,
  })
}

export const setInactiveWork = (data) => (dispatch) => {
  dispatch({
    type: types.SET_INACTIVE_WORK,
    payload: data,
  })
}

export const setMenu = (data) => (dispatch) => {
  dispatch({
    type: types.MENU_OPEN,
    payload: data,
  })
}
