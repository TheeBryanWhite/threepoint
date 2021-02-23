import React from 'preact';
import { Provider } from 'react-redux';
import { PreviewStoreProvider } from 'gatsby-source-prismic'

import store from './src/redux/store/store';

export const wrapRootElement = ({ element }) => {
  return (
	<PreviewStoreProvider>
		<Provider store={store}>
			{element}
		</Provider>
	</PreviewStoreProvider>
  );
}