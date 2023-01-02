const story = document.querySelectorAll('.story-block-el')

for (let i = 0; i < story.length; i++) {
  story[i].addEventListener('click', (e) => {
    let durationWidth = 0
    let counter = i

    const storyImgs = document.querySelectorAll('.story-img')

    const storyImgWrapper = document.createElement('div')
    storyImgWrapper.classList.add('story-img-wrapper')
    body.appendChild(storyImgWrapper)


    const img = document.createElement('img')
    img.classList.add('view-story')
    storyImgWrapper.appendChild(img)
    img.src = storyImgs[i].src

    const durationWrapper = document.createElement('div')
    durationWrapper.classList.add('duration-wrapper')
    storyImgWrapper.appendChild(durationWrapper)

    const duration = document.createElement('div')
    duration.classList.add('duration')
    durationWrapper.appendChild(duration)

    const closeStoryBtn = document.createElement('button')
    closeStoryBtn.innerHTML = 'X'
    closeStoryBtn.classList.add('close-story-btn')
    storyImgWrapper.appendChild(closeStoryBtn)
    closeStoryBtn.addEventListener('click', () => {
      storyImgWrapper.remove()
      img.remove()
      clearInterval(setDuration)
      body.style.overflow = 'auto'
      return
    })

    body.style.overflow = 'hidden'

    let setDuration = setInterval(() => {
      if (durationWidth < 100) {
        durationWidth += 1
        duration.style.width = durationWidth + '%'
        return
      }
      if (durationWidth == 100) {
        if (i < story.length - 1) {
          storyImgWrapper.remove()
          img.remove()
          story[i + 1].click()
          clearInterval(setDuration)
          return
        }
        clearInterval(setDuration)
        storyImgWrapper.remove()
        img.remove()
        body.style.overflow = 'auto'
        return
      }
    }, 30)

    img.addEventListener('click', (e) => {
      storyImgWrapper.remove()
      img.remove()
      clearInterval(setDuration)

      if (counter + 1 === story.length) {
        body.style.overflow = 'auto'
        return
      }

      storyImgWrapper.addEventListener('mousedown', () => {
        clearInterval(setDuration)
        console.log(1)
      })

      counter++
      story[counter].click()
    })
  })
}