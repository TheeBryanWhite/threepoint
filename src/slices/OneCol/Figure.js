import React from 'preact'
import { css } from "@emotion/react"

const Figure = props => {
	return(
		<figure 
			css={
				css`
					background-color: ${props.compoData};
					height: 100%;
					margin: 0; 
					position: relative;
					top: 0;
					width: 100%;
					z-index: -1;
				`
			}
		/>
	)
}

export default Figure