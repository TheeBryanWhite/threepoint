const linkResolver = ({ node, key, value }) => doc => {
	return `/${doc.uid}`
}

module.exports = linkResolver