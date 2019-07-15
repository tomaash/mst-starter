import React from 'react'
import ReactDOMServer from 'react-dom/server'
const path = require('path')

export const squashHtmlTags = str => str.replace(/(<[^>]+>)+/g, '\n')

export const renderText = element =>
  squashHtmlTags(ReactDOMServer.renderToStaticMarkup(element))

export const startPolly = dirname => {
  const { Polly } = require('@pollyjs/core')
  const { setupPolly } = require('setup-polly-jest')
  const FSPersister = require('@pollyjs/persister-fs')
  const XHRAdapter = require('@pollyjs/adapter-xhr')

  Polly.register(XHRAdapter)
  Polly.register(FSPersister)

  setupPolly({
    adapters: ['xhr'],
    recordIfMissing: true,
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(dirname, '__recordings__')
      }
    }
  })
}

export const sleep = m => new Promise(r => setTimeout(r, m))
