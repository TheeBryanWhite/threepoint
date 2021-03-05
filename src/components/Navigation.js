import React from 'preact'
import { connect } from 'react-redux'
import { setMenu } from '../redux/actions'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { css } from "@emotion/react"

const Nav = props => {
	const clickHandler = link => {
		props.setMenu(!props.menuOpen)
		scrollTo(`#${link}`)
		return false
	}
	return(
		<nav
			className={(props.menuOpen ? 'open' : '')}
			css={css`
				align-items: center;
				background-color: #FFDC32;
				display: flex;
				height: 100vh;
				justify-content: center;
				left: 120%;
				position: fixed;
				top: 0;
				transition: all 0.5s cubic-bezier(0.770, 0, 0.175, 1);
				width: 100%;
				z-index: 99;

				&.open {
					left: 0;
				}
			`}
		>
			<ul
				css={css`
					list-style-type: none;
					margin: 0;
					text-align: center;
				`}
			>
				{
					props.navData.menu_items.map((item, index) => {
						return(
							<li
								className={item.classes}
								key={index}
							>
								<button 
									css={css`
										background-color: transparent;
										border: 0;
										color: #ffffff;
										display: inline-block;
										font-family: 'Axis', Helvetica, Arial, sans-seriff;
										font-size: 5vw;
										outline: none;
										padding: 10px 0;
										width: 100%;
									`}
									onClick={
										() => clickHandler(item.link)
									}
								>
									{item.label}
								</button>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

const mapStateToProps = state => ({
    menuOpen: state.app.menuOpen
})

export default connect(mapStateToProps, { setMenu })(Nav)