const modal = () => {
  const modalWindows = document.querySelectorAll('.modal'),
   modalConfirm = document.querySelector('.confirm'),
   modalDecline = document.querySelector('.decline'),
   modalOverflow = document.querySelectorAll('.overflow'),
   btnsClose =  document.querySelectorAll('.close');

  // window.addEventListener('hashchange', () => {
  //   if (document.location.hash = '#decline') {
  //     modalDecline.classList.add('active')
  //   } else if (document.location.hash = '#confirm') {
  //     modalConfirm.classList.add('active')
  //   } else {
  //     modalConfirm.classList.remove('active')
  //     modalDecline.classList.remove('active')
  //   }
  // })

  btnsClose.forEach(btn  => {
    btn.addEventListener('click', () => {
      modalWindows.forEach(modalWindow => {
        modalWindow.classList.remove('active')
      })
    })
  })

  modalOverflow.forEach(overflow   => {
    overflow.addEventListener('click', () => {
      modalWindows.forEach(modalWindow => {
        modalWindow.classList.remove('active')
      })
    })
  })
}

export default modal;