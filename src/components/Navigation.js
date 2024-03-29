import React from 'preact'
import Div100vh from 'react-div-100vh'
import { connect } from 'react-redux'
import { setMenu } from '../redux/actions'
import { css } from "@emotion/react"

const Nav = props => {
	const clickHandler = link => {
		props.setMenu(!props.menuOpen)
		
		return false
	}
	return(
		<nav
			className={(props.menuOpen ? 'open' : '')}
			css={css`
				background-color: #FFDC32;
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
			<Div100vh
				css={css`
					align-items: center;
					display: flex;
					justify-content: center;
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
									<a 
										css={css`
											color: #ffffff;
											display: inline-block;
											font-family: 'Axis', Helvetica, Arial, sans-seriff;
											font-size: 4vw;
											line-height: 3vh;
											padding: 10px 0;
											text-decoration: none;
											width: 100%;
											@media (min-width: 768px) {
												line-height: 5vh;
											}
										`}
										href={`#${item.link}`}
										onClick={
											() => clickHandler(item.link)
										}
									>
										{item.label}
									</a>
								</li>
							)
						})
					}
				</ul>
			</Div100vh>
		</nav>
	)
}

const mapStateToProps = state => ({
    menuOpen: state.app.menuOpen
})

export default connect(mapStateToProps, { setMenu })(Nav)