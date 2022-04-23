export const mockAPI = (timeout, returnData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (returnData) {
        resolve([...returnData])
      } else {
        reject({ message: 'Error' })
      }
    }, timeout)
  })
}
