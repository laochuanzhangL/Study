let xhr = new XMLHttpRequest()
xhr.open("post", url, true)
xhr.send()
xhr.onreadystatechange = function () {
  try {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
  } catch (e) {}
}
