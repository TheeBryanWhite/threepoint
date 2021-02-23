import { useMemo } from 'react'
import { mergePrismicPreviewData } from 'gatsby-source-prismic'

const IS_BROWSER = typeof window !== 'undefined'

export default function usePreviewData(staticData) {
  return useMemo(() => {
    if (!IS_BROWSER || !window.__PRISMIC_PREVIEW_DATA__) return staticData

    return mergePrismicPreviewData({
      staticData,
      previewData: window.__PRISMIC_PREVIEW_DATA__,
    })
  }, [staticData])
}