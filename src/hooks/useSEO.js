import { useEffect } from 'react'

function setMeta(name, value, attr = 'name', contentAttr = 'content') {
  if (!value) return
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute(contentAttr, value)
}

function setLink(rel, href) {
  if (!href) return
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export default function useSEO({ title, description, image = '/Grade1InsulationLogo.png', url }) {
  useEffect(() => {
    if (title) document.title = title

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:type', 'website', 'property')
    if (url) setMeta('og:url', url, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    if (url) setLink('canonical', url)
  }, [title, description, image, url])
}
