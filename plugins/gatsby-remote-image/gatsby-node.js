const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const axios = require('axios')

exports.sourceNodes = async (
  { actions, store, cache, createNodeId },
  { url, name }
) => {
  const { createNode, createNodeField } = actions
  const node = await createRemoteFileNode({
    url,
    cache,
    store,
    createNode,
    createNodeId,
    name,
  })
  await createNodeField({
    node,
    name: 'CustomImage',
    value: name,
  })
}
