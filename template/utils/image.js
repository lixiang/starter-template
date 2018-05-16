export default function getImage(url) {
  if (url) {
    return url.replace(
      /https?:\/\/(img.*\.(jpg|png|gif))/g,
      'https://images.weserv.nl/?url=$1',
    )
  }
  return ''
}
