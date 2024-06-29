const storage = {}

// Handling User Responses
function getUserData(chatId) {
  let userData = storage[chatId]
  if (!userData) {
    userData = {
      waitingForCity: false,
      waitingForWeather: false,
      waitingForTime: false,
    }
    storage[chatId] = userData
  }
  return userData
}

//Reset the user data after sending the response, so the bot is ready for the next command
function resetUserData(chatId) {
  const userData = getUserData(chatId)
  userData.waitingForCity = false
  userData.waitingForWeather = false
  userData.waitingForTime = false
}

module.exports = {
  getUserData,
  resetUserData,
}
