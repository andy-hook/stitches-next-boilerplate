import React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'
import { getCssString } from '../stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx).then((initialProps) => ({
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </>
      ),
    }))
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
